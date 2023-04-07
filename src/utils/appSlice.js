import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
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
  },
});

export default appSlice.reducer;

export const { toggleMenu, closeToggleMenu } = appSlice.actions;
