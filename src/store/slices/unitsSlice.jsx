import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: "",
  units: [
    {
      unit: 1,
      lessons: [
        {
          lesson: 1,
          title: "Enter The Lesson Name",
        },
      ],
    },
  ],
  currentUnit: {
    unit: 1,
    lessons: [
      {
        lesson: 1,
        title: "Enter The Lesson Name",
      },
    ],
  },
  currentLesson: { lesson: 1, title: "Enter The Lesson Name" },
  subjectData: [],
  stepNumber: 0,
};

export const unitsSlice = createSlice({
  name: "quetions",
  initialState,
  reducers: {
    setunits: (state, action) => {
      state.units = action.payload;
    },
    setcurrentUnit: (state, action) => {
      state.currentUnit = action.payload;
    },
    setcurrentLesson: (state, action) => {
      state.currentLesson = action.payload;
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

export const {
  setsubject,
  setunits,
  setcurrentUnit,
  setcurrentLesson,
  setsubjectData,
  setstepNumber,
} = unitsSlice.actions;
export default unitsSlice.reducer;
