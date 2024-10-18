import PersonCard from "./PersonCard";
import AgeUpdater from "./AgeUpdater";
import PersonContextProvider from "./context";

type Props = { id: number };

export default function PersonSection({ id }: Props) {
  return (
    <div>
      <PersonContextProvider id={0}>
        <AgeUpdater />

        <PersonCard />
      </PersonContextProvider>
    </div>
  );
}
