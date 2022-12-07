import { Fragment } from "react";
import SearchBar from "../search/SearchBar";

const MainPage = () => {
  return (
    <div className="centered">
      <p className="about-search">
        If you are looking for character/location/episode just use names, name
        of that location, code of episode. If you want to be more specific you
        can use additional words like for example 'Rick male Earth' or 'Earth
        planet dimension c-137'. First word should be main characteristic to
        avoid problems.
      </p>
      <SearchBar />
    </div>
  );
};

export default MainPage;
