import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./searchSlice";

const store = configureStore({
  reducer: { app: appSlice, seacrhCache: cacheSlice },
});

export default store;
