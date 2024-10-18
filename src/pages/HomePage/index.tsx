import { useNavigate } from "react-router-dom";
import { persons } from "../../api/data";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr
              key={person.id}
              onClick={() => navigate(`/persons/${person.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
