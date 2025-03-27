import { configureStore } from "@reduxjs/toolkit";
import { Custom } from "./reducers";

const store = configureStore({
  reducer: {Custom:Custom},
});

export default store;
