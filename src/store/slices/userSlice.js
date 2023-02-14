import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create parent account
export const createParentAccount = createAsyncThunk(
  "user/createParentAccount",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(process.env.REACT_APP_CREATE_PARENT_ACCOUNT_API, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      return await res.json();
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
    const { id } = getState().userSlice;
    try {
      const res = await fetch(
        process.env.REACT_APP_CREATE_CHILD_ACCOUNT_API + "/" + id,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }
      );
      return await res.json();
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
      const res = await fetch(process.env.REACT_APP_LOGIN_API, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// addChildQuestions
export const addChildQuestions = createAsyncThunk(
  "user/addChildQuestions",
  async ({ questions, childId }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        process.env.REACT_APP_ADD_QUESTION_API + "/" + childId,
        {
          method: "POST",
          body: JSON.stringify(questions),
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }
      );
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  login: false,
  id: "",
  userName: "",
  email: "",
  photoURL: "",
  userImage: "",
  children: [],
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
      state.loading = true;
      state.error = false;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      if (action.payload.massage === "correct password") {
        const { _id, parentName, parentAge, parentPhoneNumber } =
        action.payload.info.parent[0];
        state.id = _id;
        state.userName = parentName;
        state.login = true;
      }
    },
    [loginAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // addQuestion
    [addChildQuestions.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addChildQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      console.log(action.payload);
    },
    [addChildQuestions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("sad", action.payload);
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
