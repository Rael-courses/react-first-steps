import { useState } from "react";
import PersonCard from "../PersonCard";
import AgeUpdater from "../AgeUpdater";

export type PersonType = {
  name: string;
  age: number;
};

export default function Person() {
  const alice: PersonType = { name: "Alice", age: 18 };
  const [person, setPerson] = useState(alice);

  return (
    <div>
      <AgeUpdater />

      <PersonCard person={person} />
    </div>
  );
}
