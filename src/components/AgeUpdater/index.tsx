import Button from "../Button";

export default function AgeUpdater() {
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
