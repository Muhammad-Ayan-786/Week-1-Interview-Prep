import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../features/tracker/states/questionsSlice';
import drivesReducer from '../features/drives/states/drivesSlice';
import dsaReducer from '../features/dsa/states/dsaSlice';
import authReducer from '../features/auth/states/authSlice';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    drives: drivesReducer,
    dsa: dsaReducer,
    auth: authReducer,
  },
});