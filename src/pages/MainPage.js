import { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchResult from "../components/search/SearchResult";
import Button from "../components/UI/Button";

const MainPage = () => {
  const [filteringItem, setFilteringItem] = useState("character");

  const switchFilterHandler = (filter) => {
    setFilteringItem(filter);
  };

  return (
    <div>
      <div className="centered">
        <Button
          func={() => switchFilterHandler("character")}
          name="character"
        />
        <Button func={() => switchFilterHandler("location")} name="location" />
        <Button func={() => switchFilterHandler("episode")} name="episode" />
      </div>
      <div className="centered">
        <p className="about-search">
          Use '-&&&&: ' for filtering. Legend: character( name, status, species,
          type, gender) || location (name, type, dimension) || episode (name,
          episode code) Example
          <span className="example">
            <span className="exampleFilter">name: </span> rick sanchez
            <span className="exampleFilter">gender: </span>
            male <span className="exampleFilter">species: </span> human
          </span>
        </p>
        <div className="flex">
          <SearchBar filter={filteringItem} />
        </div>
      </div>
      <SearchResult />
    </div>
  );
};

export default MainPage;

// If you are looking for character/location/episode just use names, name
//           of that location, code of episode. If you want to be more specific you
//           can use additional words like for example 'Rick male Earth' or 'Earth
//           planet dimension c-137'. First word should be main characteristic to
//           avoid problems.
