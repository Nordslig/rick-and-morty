import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import RootLayout from "./components/RootLayout";
import AllCharacters from "./pages/AllCharacters";
import AllEpisodes from "./pages/AllEpisodes";
import AllLocations from "./pages/AllLocations";
import MainPage from "./pages/MainPage";
import SearchBar from "./search/SearchBar";
import SearchResults from "./search/SearchResults";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/characters" element={<AllCharacters />} />
      <Route path="/locations" element={<AllLocations />} />
      <Route path="/episodes" element={<AllEpisodes />} />
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
