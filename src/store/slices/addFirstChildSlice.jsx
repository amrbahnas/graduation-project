import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  grade: "",
  userName: "",
  password: "",
  page: 1,
};

export const addFirstChildSlice = createSlice({
  name: "quetions",
  initialState,
  reducers: {
    setname: (state, action) => {
      state.name = action.payload;
    },
    setgrade: (state, action) => {
      state.grade = action.payload;
    },
    setuserName: (state, action) => {
      state.userName = action.payload;
    },
    setpassword: (state, action) => {
      state.password = action.payload;
    },
    setpage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setname, setpage, setpassword, setuserName, setgrade } =
  addFirstChildSlice.actions;
export default addFirstChildSlice.reducer;
