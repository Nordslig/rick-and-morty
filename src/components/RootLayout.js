import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={classes.all}>
      <header>
        <h1>Rick and Morty!</h1>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
