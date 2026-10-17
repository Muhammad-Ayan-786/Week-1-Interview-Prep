import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    entries: [],
    isLoaded: false,
  },
  reducers: {
    questionsLoaded: (state, action) => {
      state.entries = action.payload;
      state.isLoaded = true;
    },
    questionAdded: (state, action) => {
      state.entries.unshift(action.payload);
    },
    questionDeleted: (state, action) => {
      state.entries = state.entries.filter((question) => question.id !== action.payload);
    },
  },
});

export const { questionsLoaded, questionAdded, questionDeleted } = questionsSlice.actions;
export default questionsSlice.reducer;
