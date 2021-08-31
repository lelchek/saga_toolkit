import axios from "axios";
import {
  fetchPeopleRequest,
  fetchPeopleSuccess,
  fetchPeopleError,
} from "./people_actions";

export const fetchPeople = () => async (dispatch) => {
  dispatch(fetchPeopleRequest());

  try {
    const { data } = await axios.get("https://swapi.dev/api/people");

    dispatch(fetchPeopleSuccess(data.results));
  } catch (error) {
    dispatch(fetchPeopleError(error.message));
  }
};
