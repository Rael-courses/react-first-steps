import { PersonType } from "../Person";

type Props = {
  person: PersonType;
};

export default function PersonCard({ person }: Props) {
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
