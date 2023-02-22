import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  dataSend: false,
  subjectData:[],
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
  },
});

export const { setEnglish } = unitsSlice.actions;
export default unitsSlice.reducer;
