import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuToggled: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuToggled = !state.isMenuToggled;
    },
  },
});

export default appSlice.reducer;

export const { toggleMenu } = appSlice.actions;
