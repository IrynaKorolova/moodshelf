import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
  // Will add custom syncToUrlMiddleware here later
});

// Types for TypeScript to know about store structure
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
