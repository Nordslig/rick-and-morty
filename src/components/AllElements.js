import { Fragment, useContext } from "react";
import resultContext from "../store/result-context";
import classes from "./AllElements.module.css";

const AllElements = (props) => {
  const resultCtx = useContext(resultContext);

  let sheet;

  if (resultCtx.actualPage === "character") {
    const { image, name, status, location, episode } = props.data;

    sheet = (
      <section className={classes.section}>
        <div className={classes.image}>
          <img src={image} width="150px" height="150 px" alt="character look" />
        </div>
        <div className={classes.info}>
          <h3>Name: </h3>
          <p>{name}</p>
          <h3>Status: </h3>
          <p>{status}</p>
        </div>
        <div className={classes.info}>
          <h3>Last location: </h3>
          <p>{location.name}</p>
          <h3>Number of Episodes:</h3>
          <p>{episode.length}</p>
        </div>
      </section>
    );
  }

  if (resultCtx.actualPage === "location") {
    const { name, type, dimension, residents } = props.data;

    sheet = (
      <section className={classes.section}>
        <div className={classes.info}>
          <h3>Name: </h3>
          <p>{name}</p>
          <h3>Type: </h3>
          <p>{type}</p>
        </div>
        <div className={classes.info}>
          <h3>Dimension </h3>
          <p>{dimension}</p>
          <h3>Number of Residents:</h3>
          <p>{residents.length}</p>
        </div>
      </section>
    );
  }

  if (resultCtx.actualPage === "episode") {
    const { name, air_date, episode: code, characters } = props.data;

    sheet = (
      <section className={classes.section}>
        <div className={classes.info}>
          <h3>Name: </h3>
          <p>{name}</p>
          <h3>Air date: </h3>
          <p>{air_date}</p>
        </div>
        <div className={classes.info}>
          <h3>Episode Code: </h3>
          <p>{code}</p>
          <h3>Number of characters:</h3>
          <p>{characters.length}</p>
        </div>
      </section>
    );
  }

  return <Fragment>{sheet}</Fragment>;
};

export default AllElements;
