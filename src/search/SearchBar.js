const SearchBar = () => {
  return (
    <div>
      <p>
        If you are looking for character/location/episode just use names, name
        of that location, code of episode. If you want to be more specific you
        can use additional words like for example 'Rick male Earth' or 'Earth
        planet dimension c-137'. First word should be main characteristic to
        avoid problems.
      </p>
      <form>
        <label>Look for something:</label>
        <input />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
