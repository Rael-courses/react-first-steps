import PersonCard from "./PersonCard";
import AgeUpdater from "./AgeUpdater";
import PersonContextProvider from "./context";

export default function Person() {
  return (
    <div>
      <PersonContextProvider>
        <AgeUpdater />

        <PersonCard />
      </PersonContextProvider>
    </div>
  );
}
