import { createSlice } from '@reduxjs/toolkit';

const dsaSlice = createSlice({
  name: 'dsa',
  initialState: {
    entries: [],
    isLoaded: false,
  },
  reducers: {
    dsaEntriesLoaded: (state, action) => {
      state.entries = action.payload;
      state.isLoaded = true;
    },
    dsaEntriesAdded: (state, action) => {
      state.entries = [...action.payload, ...state.entries];
    },
  },
});

export const { dsaEntriesLoaded, dsaEntriesAdded } = dsaSlice.actions;
export default dsaSlice.reducer;
