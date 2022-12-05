import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    // <nav className={classes.nav}>
    <ul className={classes.list}>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="characters"
        >
          All Characters
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="locations"
        >
          All Locations
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="episodes"
        >
          All Episodes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to="random-result"
        >
          Random thing/person
        </NavLink>
      </li>
    </ul>
    // </nav>
  );
};

export default Navigation;
