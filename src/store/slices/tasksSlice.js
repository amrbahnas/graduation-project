import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    tasks: [],
    loading: false,
    error: false,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
