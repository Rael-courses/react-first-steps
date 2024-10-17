import { PersonType } from "../Person";

export default function PersonCard({ person }: { person: PersonType }) {
  const type = person.age < 18 ? "Child" : "Adult";

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Type: {type}</p>
    </div>
  );
}
