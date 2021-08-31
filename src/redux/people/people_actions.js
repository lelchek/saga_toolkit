import { createAction } from "@reduxjs/toolkit";

export const fetchPeopleRequest = createAction("people/fetchPeople/pending");
export const fetchPeopleSuccess = createAction("people/fetchPeople/fulfilled");
export const fetchPeopleError = createAction("people/fetchPeople/rejected");
