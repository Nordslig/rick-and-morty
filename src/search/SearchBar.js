import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="search" className={classes.label}>
        Look for something:
      </label>
      <input htmlFor="search" className={classes.input} />
      <button className={classes.button}>Search</button>
    </form>
  );
};

export default SearchBar;
