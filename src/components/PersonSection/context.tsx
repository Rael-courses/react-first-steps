import { createContext, PropsWithChildren, useContext, useState } from "react";
import { persons, PersonType } from "../../api/data";

type PersonContextType = {
  person: PersonType;
  updateAge: (updateMode: "increment" | "decrement") => void;
};
const PersonContext = createContext<PersonContextType | null>(null);

type Props = PropsWithChildren<{ id: number }>;
export default function PersonContextProvider({ children, id }: Props) {
  const defaultPerson = persons[id];
  const [person, setPerson] = useState<PersonType>(
    defaultPerson || { id: 0, name: "Alice", age: 18 }
  );

  const updateAge = (updateMode: "increment" | "decrement") => {
    const updatedPerson = {
      ...person,
      age: updateMode === "increment" ? person.age + 1 : person.age - 1,
    };
    setPerson(updatedPerson);
  };

  return (
    <PersonContext.Provider value={{ person, updateAge }}>
      {children}
    </PersonContext.Provider>
  );
}

export function usePersonContext() {
  const context = useContext(PersonContext);

  if (context === null) {
    throw new Error(
      "usePersonContext must be used within a PersonContextProvider"
    );
  }

  return context;
}
