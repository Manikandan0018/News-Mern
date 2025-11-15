import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("favorites") || "[]");

const slice = createSlice({
  name: "favorites",
  initialState: saved,
  reducers: {
    addFavorite(state, action) {
      state.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite(state, action) {
      const updated = state.filter((item) => item.link !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    },
  },
});

export const { addFavorite, removeFavorite } = slice.actions;
export default slice.reducer;
