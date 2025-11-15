import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "./preferencesSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    favorites: favoritesReducer,
  },
});
