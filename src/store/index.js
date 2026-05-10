import { configureStore } from '@reduxjs/toolkit';
import analyticsReducer from './slices/analyticsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
    auth: authReducer,
  },
});
