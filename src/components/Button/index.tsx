import classes from "./classes.module.css";

type Props = {
  label: string;
  onClick: (args?: unknown) => unknown;
};

export default function Button({ label, onClick }: Props) {
  return (
    <button className={classes.root} onClick={onClick}>
      {label}
    </button>
  );
}
