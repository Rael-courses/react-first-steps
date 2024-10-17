import { useState } from "react";

type PersonType = {
  name: string;
  age: number;
};

export default function PersonOld() {
  const alice: PersonType = { name: "Alice", age: 18 };
  const [person, setPerson] = useState(alice);
  const type = person.age < 18 ? "Child" : "Adult";

  const incrementAge = () => {
    const updatedPerson = {
      ...person,
      age: person.age + 1,
    };
    setPerson(updatedPerson);
  };

  const decrementAge = () => {
    const updatedPerson = {
      ...person,
      age: person.age - 1,
    };
    setPerson(updatedPerson);
  };

  return (
    <div>
      <button onClick={decrementAge}>Decrement</button>
      <button onClick={incrementAge}>Increment</button>

      <div>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Type: {type}</p>
      </div>
    </div>
  );
}
