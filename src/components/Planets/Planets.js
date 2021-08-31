import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPlanet,
  addPlanet,
  fetchPlanets,
  getPlanetsName,
} from "../../redux/planets";

const Planets = () => {
  const planets = useSelector(getPlanetsName);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchPlanets())}> Get Planet</button>
      <button
        onClick={() => dispatch(setCurrentPlanet("This is current Planet"))}
      >
        Set Current Planet
      </button>
      <button onClick={() => dispatch(addPlanet("New Planets to add"))}>
        Add Planet
      </button>

      <ul>
        {planets.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
