import { configureStore } from "@reduxjs/toolkit";
import reducer from './authSlice.js';

export const store = configureStore({
  reducer: reducer, // Assign the reducer
});

export default store;