import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  DarkLight: true,
  loading: true,
  YoutubeVideo: false,
  YoutubeUrl: "",
  SwapQuotes: false,
  SpaceMen: false,
  HomePage: false,
  PlanFromPopUp: "",
  windowidth:window.innerWidth,

};

export const Custom = createReducer(initialState, (builder) => {
  builder.addCase("Opposite", (state, action) => {
    state[action.payload] = !state[action.payload];
  });
  builder.addCase("False", (state, action) => {
    state[action.payload] = false;
  });
  builder.addCase("True", (state, action) => {
    state[action.payload] = true;
  });
  builder.addCase("ValueChanger", (state, action) => {
    state[action.payload] = action.value;
  });
});
