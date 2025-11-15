import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("preferences") || "{}");

const initialState = {
  category: saved.category || "technology",
  language: saved.language || "en",
  query: saved.query || "",
};

const slice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      localStorage.setItem("preferences", JSON.stringify(state));
    },
    setLanguage(state, action) {
      state.language = action.payload;
      localStorage.setItem("preferences", JSON.stringify(state));
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setCategory, setLanguage, setQuery } = slice.actions;
export default slice.reducer;
