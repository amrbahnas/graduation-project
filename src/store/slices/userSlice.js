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
  children: [],
  childrenQuestions: [],
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLoginState: (state, action) => {
      state.login = action.payload;
    },
    setParentinfo: (state, action) => {
      state.parentName = action.payload.parentName;
      state.parentMail = action.payload.parentMail;
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
    updateChildren: (state, action) => {
      state.children = state.children.map((child) => {
        if (child._id === action.payload._id) {
          const { studentUserName, studentName, studentGrade } =
            action.payload.body;
          return {
            ...child,
            studentUserName,
            studentName,
            studentGrade,
          };
        } else {
          return child;
        }
      });
    },
    updateChildrenPassword: (state, action) => {
      state.children = state.children.map((child) => {
        if (child._id === action.payload._id) {
          const { newpassword } = action.payload;
          return {
            ...child,
            studentPassword: newpassword,
          };
        } else {
          return child;
        }
      });
    },
    deleteChildren: (state, action) => {
      state.children = state.children.filter(
        (child) => child._id !== action.payload
      );
    },
    setChildren: (state, action) => {
      state.children = action.payload;
    },
    setChildrenQuestions: (state, action) => {
      state.children = action.payload;
    },
    resetAll: (state) => {
      state._id = "";
      state.parentName = "";
      state.parentMail = "";
      state.parentPic = "";
      state.children = [];
      state.childrenQuestions = [];
      state.login = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // create parent account
      .addCase(createParentAccount.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createParentAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;

        if (action.payload.parent.status.includes("successfully")) {
          const { _id, parentName, parentAge, parentMail } =
            action.payload.parent;
          state._id = _id;
          state.parentName = parentName;
          state.parentMail = parentMail;
          /**************************** */
          state.children = [];
          state.login = true;
        }
      })
      .addCase(createParentAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("sad", action.payload);
      })
      // create child account
      .addCase(createChildAccount.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createChildAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        console.log("acc created amr", action.payload);
      })
      .addCase(createChildAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("sad", action.payload);
      })
      // login
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        console.log(action.payload.children);
        state.loading = false;
        state.error = false;
        if (action.payload.parent) {
          const { _id, parentName, parentMail } = action.payload.parent;
          state._id = _id;
          state.parentName = parentName;
          state.parentMail = parentMail;
          state.login = true;
          /**************************** */
          state.children = action.payload.children;
        }
      })
      .addCase(loginAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setLoading,
  setLoginState,
  setParentinfo,
  setParentName,
  setParentMail,
  setParentPic,
  resetUserChildren,
  addChildren,
  setChildren,
  updateChildren,
  updateChildrenPassword,
  deleteChildren,
  resetAll,
} = userSlice.actions;
export default userSlice.reducer;
