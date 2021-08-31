import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlanets = createAsyncThunk(
  "planets/fetchPlanets",
  async () => {
    const { data } = await axios.get("https://swapi.dev/api/planets");
    return data.results;
  }
);
