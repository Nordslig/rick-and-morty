import { useContext } from "react";
import ResultContext from "../store/result-context";

import classes from "./SearchResult.module.css";

const SearchResult = () => {
  const resultCtx = useContext(ResultContext);

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
