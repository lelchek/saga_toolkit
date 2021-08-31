import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "./redux/people";
import People from "./components/People/People";
import Planets from "./components/Planets/Planets";
import { getIsLoading, getError } from "./redux/common";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <div className="App">
      Saga & Toolkit
      {isLoading && <p>Loading...</p>}
      {error && <p>Ups.. {error}</p>}
      <People />
      <Planets />
    </div>
  );
}

export default App;
