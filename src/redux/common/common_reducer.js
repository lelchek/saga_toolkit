import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const isLoadingAction = (action) => action.type.endsWith("/pending");
const isErrorAction = (action) => action.type.endsWith("/rejected");
const isFulfilledAction = (action) => action.type.endsWith("/fulfilled");

const commonReducer = createReducer(initialState, {}, [
  {
    matcher: isLoadingAction,
    reducer(state) {
      state.loading = true;
    },
  },
  {
    matcher: isErrorAction,
    reducer(state, action) {
      state.error = action.error.message;
      state.loading = false;
    },
  },
  {
    matcher: isFulfilledAction,
    reducer(state) {
      state.loading = false;
    },
  },
]);

export default commonReducer;
