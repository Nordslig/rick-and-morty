import { Fragment, useContext, useEffect, useState } from "react";
import ResultContext from "../store/result-context";

import classes from "./SearchResult.module.css";

const SearchResult = () => {
  const resultCtx = useContext(ResultContext);

  // const charackter = (
  //   <Fragment>
  //     <div className={classes.name}>
  //       <h3>Name:</h3>
  //       <p>Test name</p>
  //     </div>
  //     {/* <img alt="character image" /> */}
  //     <p className={classes.question}>Status:</p>
  //     <p className={classes.answer}>Test status</p>
  //     <p className={classes.question}>Location:</p>
  //     <p className={classes.answer}>Test location</p>
  //     <p className={classes.question}>How many episodes they were in?</p>
  //     <p className={classes.answer}>Test number</p>
  //   </Fragment>
  // );

  // const location = (
  //   <section>
  //     <h3>Name</h3>
  //     <p>Type</p>
  //     <p>Dimension</p>
  //     <p>How many residents there have been seen last?</p>
  //   </section>
  // );

  // const episode = (
  //   <section>
  //     <h3>Name</h3>
  //     <p>Air date</p>
  //     <p>Code of episode</p>
  //     <p>How many charackters were in it?</p>
  //   </section>
  // );
  // if (resultCtx.results) {
  // setResults([...resultCtx.results]);
  // }
  // console.log(results === false);

  return (
    <div className={classes.sections}>
      {!resultCtx.results && <p>Start searching!</p>}
      {resultCtx.results &&
        resultCtx.results.map((result) => {
          return (
            <section className={classes.section} key={result.id}>
              <div className={classes.name}>
                <h3>Name:</h3>
                <p>{result.name}</p>
              </div>
              {/* <img alt="character image" /> */}
              <p className={classes.question}>Status:</p>
              <p className={classes.answer}>{result.status}</p>
              <p className={classes.question}>Location:</p>
              <p className={classes.answer}>{result.location.name}</p>
              <p className={classes.question}>
                How many episodes they were in?
              </p>
              <p className={classes.answer}>{result.episode.length}</p>
            </section>
          );
        })}
    </div>
  );
};

export default SearchResult;
