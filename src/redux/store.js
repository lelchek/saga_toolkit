import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { peopleReducer } from "./people";
import { planetsReducer } from "./planets";
import { commonReducer } from "./common";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: {
    people: peopleReducer,
    planets: planetsReducer,
    common: commonReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
