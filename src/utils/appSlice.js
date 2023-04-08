import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    searchData: [],
    isMenuToggled: true,
    videoInfo: {},
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuToggled = !state.isMenuToggled;
    },
    closeToggleMenu: (state) => {
      state.isMenuToggled = false;
    },
    watchVideoInfo: (state, action) => {
      state.videoInfo = action.payload;
    },
    setSeachSuggestion: (state, action) => {
      state.searchData = action.payload;
    },
    clearSeachSuggestion: (state) => {
      state.searchData = [];
    },
  },
});

export default appSlice.reducer;

export const {
  toggleMenu,
  closeToggleMenu,
  setSeachSuggestion,
  clearSeachSuggestion,
} = appSlice.actions;
