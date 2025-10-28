import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

export function Header() {
  return (
    <header className={classes["header"]}>
      <h1>Checkpoint : frontend</h1>
      <Link to="/">Countries</Link>
    </header>
  );
}
