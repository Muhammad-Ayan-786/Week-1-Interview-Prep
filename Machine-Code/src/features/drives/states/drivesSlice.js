import { createSlice } from '@reduxjs/toolkit';

const drivesSlice = createSlice({
  name: 'drives',
  initialState: {
    entries: [],
    isLoaded: false,
  },
  reducers: {
    drivesLoaded: (state, action) => {
      state.entries = action.payload;
      state.isLoaded = true;
    },
    driveAdded: (state, action) => {
      state.entries.unshift(action.payload);
    },
  },
});

export const { drivesLoaded, driveAdded } = drivesSlice.actions;
export default drivesSlice.reducer;
