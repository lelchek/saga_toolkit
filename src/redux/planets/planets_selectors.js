import { createSelector } from "@reduxjs/toolkit";

export const getPlanets = (state) => state.planets.items;

export const getPlanetsName = createSelector([getPlanets], (planet) => {
  return planet.map(({ name }) => name);
});
