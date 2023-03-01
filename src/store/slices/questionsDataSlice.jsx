import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// addChildQuestions
export const addChildQuestions = createAsyncThunk(
  "quetions/addChildQuestions",
  async (word, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // console.log(word);
    const { _id } = getState().userSlice;
    const formdata = new FormData();
    formdata.append("stadge", word.stadge);
    formdata.append("unit", word.unit);
    formdata.append("lesson", word.lesson);
    formdata.append("defintionac", word.defintionac);
    formdata.append("defintionen", word.defintionen);
    formdata.append("sentence", word.sentence);
    formdata.append("image", word.image, word.image.name);
    try {
      const url = `https://gamebasedlearning-ot4m.onrender.com/FSE/FSEinsertQuestion/${_id}`;
      const headers = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      const res = await fetch(url, headers);
      return res.json;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Get ChildQuestions
export const getChildQuestions = createAsyncThunk(
  "quetions/getChildQuestions",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { _id } = getState().userSlice;
    const url = `https://gamebasedlearning-ot4m.onrender.com/FSE/FSEtakeQuestion/${_id}`;
    const headers = {
      "content-type": "application/json; charset=UTF-8",
    };
    try {
      const res = await axios.post(url, data, { headers });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Get Questions-feedback
export const getQuestionsFeedback = createAsyncThunk(
  "quetions/getQuestionsFeedback",
  async (_id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const url = `https://gamebasedlearning-ot4m.onrender.com/FSE/feedback/${_id}`;
    // const headers = {
    //   "content-type": "application/json; charset=UTF-8",
    // };
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  english: [],
  feedBack: [],
  loading: false,
  errorHappen: false,
  dataIsSend: false,
};

export const questionsDataSlice = createSlice({
  name: "quetions",
  initialState,
  reducers: {
    setEnglish: (state, action) => {
      state.login = action.payload;
    },
    setdataIsSend: (state, action) => {
      state.dataIsSend = action.payload;
    },
    seterrorHappen: (state, action) => {
      state.errorHappen = action.payload;
    },
  },
  extraReducers: {
    // addQuestion
    [addChildQuestions.pending]: (state) => {
      state.loading = true;
      state.errorHappen = false;
      state.dataIsSend = false;
    },
    [addChildQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorHappen = false;
      state.dataIsSend = true;
      console.log(action.payload);
    },
    [addChildQuestions.rejected]: (state, action) => {
      state.loading = false;
      state.dataIsSend = false;
      state.errorHappen = true;
      console.log("addChildQuestions rejected", action.payload);
    },

    // // get Question
    [getChildQuestions.pending]: (state) => {
      state.loading = true;
      state.errorHappen = false;
      state.english = [];
    },
    [getChildQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorHappen = false;
      // console.log(action.payload);
      state.english = action.payload.question;
    },
    [getChildQuestions.rejected]: (state, action) => {
      state.loading = false;
      state.errorHappen = true;
      console.log("sad", action.payload);
    },
    // //  getQuestionsFeedback
    [getQuestionsFeedback.pending]: (state) => {
      state.loading = true;
      state.errorHappen = false;
      state.feedBack = [];
    },
    [getQuestionsFeedback.fulfilled]: (state, action) => {
      state.loading = false;
      state.errorHappen = false;
      console.log("feedback",action.payload);
      state.feedBack = action.payload;
    },
    [getQuestionsFeedback.rejected]: (state, action) => {
      state.loading = false;
      state.errorHappen = true;
      console.log("sad", action.payload);
    },
  },
});

export const { setEnglish, setdataIsSend, seterrorHappen } =
  questionsDataSlice.actions;
export default questionsDataSlice.reducer;
