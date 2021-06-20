import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth";
import  articleReducer from "./articles"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles : articleReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
