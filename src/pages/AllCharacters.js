import { Fragment, useEffect, useState } from "react";
import AllElements from "../components/AllElements";

const AllCharacters = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );

      const data = await response.json();

      setMaxPage(data.info.pages);

      setCharacters(data.results);
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <h2>All Characters!</h2>
      <div className="sections">
        {characters.length === 0 && <p>Something went wrong!</p>}
        {characters.map((char) => {
          return <AllElements key={char.id} data={char} />;
        })}
      </div>
      <button
        onClick={() => setPage((prevState) => prevState - 1)}
        disabled={page === 1 ? true : false}
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prevState) => prevState + 1)}
        disabled={page === maxPage ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default AllCharacters;
