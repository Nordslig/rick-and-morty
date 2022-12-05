import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RandomSearch from "./components/RandomElement";
import RootLayout from "./components/RootLayout";
import AllCharacters from "./pages/AllCharacters";
import AllEpisodes from "./pages/AllEpisodes";
import AllLocations from "./pages/AllLocations";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/characters" element={<AllCharacters />} />
      <Route path="/locations" element={<AllLocations />} />
      <Route path="/episodes" element={<AllEpisodes />} />
      <Route path="/random-result" element={<RandomSearch />} />
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
