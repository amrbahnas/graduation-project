import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create parent account
export const createParentAccount = createAsyncThunk(
  "user/createParentAccount",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = process.env.REACT_APP_CREATE_PARENT_ACCOUNT_API;
      const headers = {
        "content-type": "application/json; charset=UTF-8",
      };
      const res = await axios.post(url, data, { headers });
      return await res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// create child account
export const createChildAccount = createAsyncThunk(
  "user/createChildAccount",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { _id } = getState().userSlice;
    try {
      const url = `${process.env.REACT_APP_CREATE_CHILD_ACCOUNT_API}/${_id}`;
      const headers = {
        "content-type": "application/json; charset=UTF-8",
      };
      const res = await axios.post(url, data, { headers });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// login
export const loginAccount = createAsyncThunk(
  "user/loginAccount",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = process.env.REACT_APP_LOGIN_API;
      const headers = {
        "content-type": "application/json; charset=UTF-8",
      };
      const res = await axios.post(url, data, { headers });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const initialState = {
  login: false,
  _id: "",
  userName: "",
  email: "",
  photoURL: "",
  userImage: "",
  children: [],
  childrenQuestions: [],
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.login = action.payload;
    },
    setTheUserName: (state, action) => {
      state.userName = action.payload;
    },
    setTheEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhotoURL: (state, action) => {
      state.photoURL = action.payload;
    },
    setUserImage: (state, action) => {
      state.userImage = action.payload;
    },
    resetUserChildren: (state) => {
      state.children = [];
    },
    addChildren: (state, action) => {
      state.children.push(action.payload);
    },
    setChildrenQuestions: (state, action) => {
      state.children = action.payload;
    },
  },
  extraReducers: {
    // create parent account
    [createParentAccount.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createParentAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      console.log(action.payload);
    },
    [createParentAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("sad", action.payload);
    },

    // create child account
    [createChildAccount.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createChildAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      console.log(action.payload);
    },
    [createChildAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("sad", action.payload);
    },

    // login
    [loginAccount.pending]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      console.log("sad", action.payload);
      if (action.payload.massage === "correct password") {
        // having a children
        const { _id, parentName, parentAge, parentPhoneNumber } =
          action.payload.parent;
        state._id = _id;
        state.userName = parentName;
        state.login = true;
        /**************************** */
        state.children = action.payload.children;
      }
    },
    [loginAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  setLoginState,
  setTheUserName,
  setTheEmail,
  setPhotoURL,
  setUserImage,
  resetUserChildren,
  addChildren,
} = userSlice.actions;
export default userSlice.reducer;
