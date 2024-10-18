import Button from "../Button";
import { PersonType } from "../Person";

type Props = {
  person: PersonType;
  setPerson: (person: PersonType) => void;
};

export default function AgeUpdater({ person, setPerson }: Props) {
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
    </div>
  );
}
