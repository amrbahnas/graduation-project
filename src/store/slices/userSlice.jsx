import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create parent account
export const createParentAccount = createAsyncThunk(
  "user/createParentAccount",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = import.meta.env.VITE_REACT_CREATE_PARENT_ACCOUNT_API;
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
      const url = `${
        import.meta.env.VITE_REACT_CREATE_CHILD_ACCOUNT_API
      }/${_id}`;
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
    console.log(import.meta.env.VITE_REACT_LOGIN_API);
    try {
      const url = import.meta.env.VITE_REACT_LOGIN_API;
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
  parentName: "",
  parentMail: "",
  parentPic: "",
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
    setParentName: (state, action) => {
      state.parentName = action.payload;
    },
    setParentMail: (state, action) => {
      state.parentMail = action.payload;
    },
    setParentPic: (state, action) => {
      state.parentPic = action.payload;
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
      if (action.payload.massage.includes("successfully")) {
        const { _id, parentName, parentAge, parentMail, parentPic } =
          action.payload.parent;
        state._id = _id;
        state.parentName = parentName;
        state.parentMail = parentMail;
        state.parentPic = parentPic;
        state.login = true;
        /**************************** */
        state.children = [];

      }
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
      state.loading = true;
      state.error = false;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      if (action.payload.massage === "correct password") {
        // having a children
        const { _id, parentName, parentAge, parentMail, parentPic } =
          action.payload.parent;
        state._id = _id;
        state.parentName = parentName;
        state.parentMail = parentMail;
        state.parentPic = parentPic;
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
  setParentName,
  setParentMail,
  setParentPic,
  resetUserChildren,
  addChildren,
} = userSlice.actions;
export default userSlice.reducer;
