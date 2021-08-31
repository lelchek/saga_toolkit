import { getPeopleName } from "../../redux/people";
import { useSelector } from "react-redux";

const People = () => {
  const peopleName = useSelector(getPeopleName);

  return (
    <ul>
      {peopleName.map((name) => (
        <li key={name}> {name}</li>
      ))}
    </ul>
  );
};

export default People;
