import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    setSearchCacheInfo: (state, action) => {
      return { ...action.payload, ...state };
    },
  },
});
export default cacheSlice.reducer;
export const { setSearchCacheInfo } = cacheSlice.actions;
