import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuToggled: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuToggled = !state.isMenuToggled;
    },
  },
});

export default appSlice.reducer;

export const { toggleMenu } = appSlice.actions;
