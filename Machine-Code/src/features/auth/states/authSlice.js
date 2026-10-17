import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    currentUser: null,
    isInitialized: false,
  },
  reducers: {
    authInitialized: (state, action) => {
      state.users = action.payload.users;
      state.currentUser = action.payload.currentUser;
      state.isInitialized = true;
    },
    userRegistered: (state, action) => {
      state.users.push(action.payload.user);
      state.currentUser = action.payload.currentUser;
      state.isInitialized = true;
    },
    userLoggedIn: (state, action) => {
      state.currentUser = action.payload;
    },
    userLoggedOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  authInitialized,
  userRegistered,
  userLoggedIn,
  userLoggedOut,
} = authSlice.actions;
export default authSlice.reducer;
