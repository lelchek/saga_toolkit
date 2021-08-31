import { createSlice } from "@reduxjs/toolkit";
import { fetchPlanets } from "./planets_thunks";

const initialState = {
  items: [],
  currentPlanet: null,
};

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    setCurrentPlanet(state, action) {
      state.currentPlanet = action.payload;
    },
    addPlanet: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (name) => {
        const tag = "handleAdd";
        return { payload: { tag, name } };
      },
    },
  },
  extraReducers: {
    [fetchPlanets.fulfilled]: (state, action) => {
      state.items = [...action.payload];
    },
  },
});

export const { setCurrentPlanet, addPlanet } = planetsSlice.actions;
export default planetsSlice.reducer;
