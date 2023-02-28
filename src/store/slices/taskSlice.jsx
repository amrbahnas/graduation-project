import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: "",
  taskType: "new",
  subjectData: [],
  stepNumber: 0,
};

export const taskSlice = createSlice({
  name: "quetions",
  initialState,
  reducers: {
    settaskType: (state, action) => {
      state.units = action.payload;
    },
    setsubject: (state, action) => {
      state.subject = action.payload;
    },
    setsubjectData: (state, action) => {
      state.subjectData = action.payload;
    },
    setstepNumber: (state, action) => {
      state.stepNumber = action.payload;
    },
  },
});

export const { setsubject, settaskType, setsubjectData, setstepNumber } =
  taskSlice.actions;
export default taskSlice.reducer;
