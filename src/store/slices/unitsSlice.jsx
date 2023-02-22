import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject:"",
  units: [
    {
      unit: 1,
      lessons: [
        {
          lesson: 1,
          title: "animal",
        },
        {
          lesson: 2,
          title: "school",
        },
      ],
    },
  ],
  currentUnit: {
    unit: 1,
    lessons: [
      {
        lesson: 1,
        title: "animal",
      },
      {
        lesson: 2,
        title: "school",
      },
    ],
  },
  currentLesson:{lesson:1,title: "animal"},
  subjectData:[],
  dataSend: false,
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
    setdataSend: (state, action) => {
      state.dataSend = action.payload;
    },
    setsubject: (state, action) => {
      state.subject = action.payload;
    },
    setsubjectData: (state, action) => {
      state.subjectData = action.payload;
    },
  },
});

export const {
  setsubject,
  setunits,
  setcurrentUnit,
  setcurrentLesson,
  setsubjectData,
  setdataSend,
} = unitsSlice.actions;
export default unitsSlice.reducer;
