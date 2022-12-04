import { Fragment } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SearchBar from "./components/search/SearchBar";
import SearchResults from "./components/search/SearchResults";

function App() {
  return (
    <Fragment>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <Navigation />
      <SearchBar />
      <SearchResults />
    </Fragment>
  );
}

export default App;
