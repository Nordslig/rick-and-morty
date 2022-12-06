import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const RootLayout = () => {
  return (
    <Fragment>
      <header>
        <h1>Rick and Morty!</h1>
        <Navigation />
      </header>
      <main style={{ height: "100%" }}>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
