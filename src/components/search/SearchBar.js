import { useContext, useRef } from "react";
import ResultContext from "../../store/result-context";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const enteredNameRef = useRef();
  const resultCtx = useContext(ResultContext);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredName = enteredNameRef.current.value;

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${enteredName}`
    );

    const data = await response.json();

    resultCtx.onFetch(data.results);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="search" className={classes.label}>
        Look for something:
      </label>
      <input htmlFor="search" className={classes.input} ref={enteredNameRef} />
      <button className={classes.button}>Search</button>
    </form>
  );
};

export default SearchBar;
