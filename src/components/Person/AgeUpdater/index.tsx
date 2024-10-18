import Button from "../../Button";
import { usePersonContext } from "../context";

export default function AgeUpdater() {
  const { updateAge } = usePersonContext();

  return (
    <div>
      <Button label="Decrement" onClick={() => updateAge("decrement")} />
      <Button label="Increment" onClick={() => updateAge("increment")} />
    </div>
  );
}
