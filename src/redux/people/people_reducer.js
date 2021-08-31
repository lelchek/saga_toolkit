import { createReducer } from "@reduxjs/toolkit";

import { fetchPeopleSuccess } from "./people_actions";

const initState = {
  characters: [],
};

const peopleReducer = createReducer(initState, {
  [fetchPeopleSuccess]: (state, { payload }) => ({
    ...state,
    characters: payload,
  }),
});

export default peopleReducer;
