import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.centered}>
      <p className={classes["about-search"]}>
        If you are looking for character/location/episode just use names, name
        of that location, code of episode. If you want to be more specific you
        can use additional words like for example 'Rick male Earth' or 'Earth
        planet dimension c-137'. First word should be main characteristic to
        avoid problems.
      </p>
      <form>
        <label htmlFor="search">Look for something:</label>
        <input htmlFor="search" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
