import { useState } from "react";
import PersonCard from "../PersonCard";
import Button from "../Button";

export type PersonType = {
  name: string;
  age: number;
};

export default function Person() {
  const alice: PersonType = { name: "Alice", age: 18 };
  const [person, setPerson] = useState(alice);

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
      <Button label="Decrement" onClick={decrementAge} />
      <Button label="Increment" onClick={incrementAge} />

      <PersonCard person={person} />
    </div>
  );
}
