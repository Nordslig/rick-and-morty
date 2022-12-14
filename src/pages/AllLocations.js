import SearchResults from "../search/SearchResults";

const AllLocations = () => {
  const response = fetch("https://rickandmortyapi.com/api/character");

  return (
    <div className="all-elements">
      <h2>All Locations!</h2>
      <section></section>

      {/* <SearchResults /> */}
    </div>
  );
};

export default AllLocations;
