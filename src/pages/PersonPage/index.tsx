import { useNavigate, useParams } from "react-router-dom";
import PersonSection from "../../components/PersonSection";
import { useEffect } from "react";

export default function PersonPage() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isPersonIdValid = Number.isInteger(Number(params.personId));
    if (!isPersonIdValid) {
      navigate("/not-found");
    }
  });

  const personId = Number(params.personId);

  return (
    <div>
      <h1>Person Page works!!</h1>
      <PersonSection id={personId} />
    </div>
  );
}
