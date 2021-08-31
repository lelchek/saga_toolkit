import { createSelector } from "@reduxjs/toolkit";

export const getPeople = (state) => state.people.characters;

export const getPeopleName = createSelector([getPeople], (people) => {
  return people.map(({ name }) => name);
});
