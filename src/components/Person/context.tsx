import { createContext, PropsWithChildren, useContext, useState } from "react";

type PersonType = {
  name: string;
  age: number;
};
const alice: PersonType = { name: "Alice", age: 18 };

type PersonContextType = {
  person: PersonType;
  updateAge: (updateMode: "increment" | "decrement") => void;
};
const PersonContext = createContext<PersonContextType | null>(null);

export default function PersonContextProvider({ children }: PropsWithChildren) {
  const [person, setPerson] = useState<PersonType>(alice);

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
