import { Fragment, useContext, useRef } from "react";
import ResultContext from "../../store/result-context";
import classes from "./SearchBar.module.css";

const apiLink = "https://rickandmortyapi.com/api/";

const SearchBar = ({ filter }) => {
  const enteredNameRef = useRef();
  const enteredTypeRef = useRef();
  const enteredDimenRef = useRef();
  const enteredEpCodeRef = useRef();

  const resultCtx = useContext(ResultContext);

  // console.log(props.filter);
  const submitHandler = async (event) => {
    event.preventDefault();

    let filteredString;

    const enteredName = enteredNameRef.current.value;

    if (filter === "location") {
      const enteredType = enteredTypeRef.current.value;
      const enteredDimension = enteredDimenRef.current.value;
      filteredString = `type=${enteredType}&dimension=${enteredDimension}`;
    }

    if (filter === "episode") {
      const enteredCode = enteredEpCodeRef.current.value;
      filteredString = `episode=${enteredCode}`;
    }

    console.log(
      `${apiLink}${filter}/?name=${enteredName ? enteredName : ""}&${
        filter === "location"
          ? filteredString
          : filter === "episode"
          ? filteredString
          : ""
      }`
    );

    const response = await fetch(
      `${apiLink}${filter}/?name=${enteredName}&${
        filter === "location" ? filteredString : ""
      }`
    );

    const data = await response.json();

    resultCtx.onFetch(data.results);
  };

  const characterFilter = (
    <Fragment>
      {/* <label htmlFor="" className={classes.label}>
        Episode Code
      </label>
      <input
        htmlFor=""
        className={classes.input}
        ref={enteredEpCodeRef}
      /> */}
    </Fragment>
  );

  const locationFilter = (
    <Fragment>
      <label htmlFor="type" className={classes.label}>
        Type
      </label>
      <input htmlFor="type" className={classes.input} ref={enteredTypeRef} />
      <label htmlFor="dimension" className={classes.label}>
        Dimension
      </label>
      <input
        htmlFor="dimension"
        className={classes.input}
        ref={enteredDimenRef}
      />
    </Fragment>
  );

  const episodeFilter = (
    <Fragment>
      <label htmlFor="epCode" className={classes.label}>
        Episode Code
      </label>
      <input
        htmlFor="epCode"
        className={classes.input}
        ref={enteredEpCodeRef}
      />
    </Fragment>
  );

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="name" className={classes.label}>
        Name
      </label>
      <input htmlFor="name" className={classes.input} ref={enteredNameRef} />
      {filter === "character" ? characterFilter : ""}
      {filter === "location" ? locationFilter : ""}
      {filter === "episode" ? episodeFilter : ""}

      <button className={classes.button}>Search</button>
    </form>
  );
};

export default SearchBar;
