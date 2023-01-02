import { Fragment, useContext, useRef } from "react";
import ResultContext from "../../store/result-context";
import classes from "./SearchBar.module.css";

const apiLink = "https://rickandmortyapi.com/api/";

const SearchBar = ({ filter }) => {
  const enteredNameRef = useRef();

  const enteredStatusRef = useRef();
  const enteredSpeciesRef = useRef();
  const enteredGenderRef = useRef();

  const enteredTypeRef = useRef();
  const enteredDimenRef = useRef();

  const enteredEpCodeRef = useRef();

  const resultCtx = useContext(ResultContext);

  // console.log(props.filter);
  const submitHandler = async (event) => {
    event.preventDefault();

    let filteredString;

    const enteredName = enteredNameRef.current.value;

    if (filter === "character") {
      const enteredStatus = enteredStatusRef.current.value;
      const enteredSpecies = enteredSpeciesRef.current.value;
      const enteredType = enteredTypeRef.current.value;
      const enteredGender = enteredGenderRef.current.value;

      filteredString = `status=${enteredStatus}&species=${enteredSpecies}&type=${enteredType}&gender=${enteredGender}`;
    }

    if (filter === "location") {
      const enteredType = enteredTypeRef.current.value;
      const enteredDimension = enteredDimenRef.current.value;

      filteredString = `type=${enteredType}&dimension=${enteredDimension}`;
    }

    if (filter === "episode") {
      const enteredCode = enteredEpCodeRef.current.value;

      filteredString = `episode=${enteredCode}`;
    }

    const response = await fetch(
      `${apiLink}${filter}/?name=${enteredName}&${filteredString}`
    );

    const data = await response.json();

    resultCtx.onFetch(data.results);
  };

  const characterFilter = (
    <div className="form">
      <label htmlFor="status" className={classes.label}>
        Status
      </label>
      <input
        htmlFor="status"
        className={classes.input}
        ref={enteredStatusRef}
      />
      <label htmlFor="species" className={classes.label}>
        Species
      </label>
      <input
        htmlFor="species"
        className={classes.input}
        ref={enteredSpeciesRef}
      />
      <label htmlFor="type" className={classes.label}>
        Type
      </label>
      <input htmlFor="type" className={classes.input} ref={enteredTypeRef} />
      <label htmlFor="gender" className={classes.label}>
        Gender
      </label>
      <input
        htmlFor="gender"
        className={classes.input}
        ref={enteredGenderRef}
      />
    </div>
  );

  const locationFilter = (
    <div className="form">
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
    </div>
  );

  const episodeFilter = (
    <div className="form">
      <label htmlFor="epCode" className={classes.label}>
        Episode Code
      </label>
      <input
        htmlFor="epCode"
        className={classes.input}
        ref={enteredEpCodeRef}
      />
    </div>
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
