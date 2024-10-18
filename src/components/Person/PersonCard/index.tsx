import { usePersonContext } from "../context";

export default function PersonCard() {
  const { person } = usePersonContext();

  const { age, name } = person;
  const type = age < 18 ? "Child" : "Adult";

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Type: {type}</p>
    </div>
  );
}
