import { Fragment, useEffect, useState } from "react";
import AllElements from "../components/AllElements";
import Button from "../components/UI/Button";

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

  const nextPageHandler = () => {
    setPage((prevState) => prevState + 1);
  };

  const previousPageHandler = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div>
      <div className="centered">
        <Button
          name="Previous"
          disabled={page === 1 ? true : false}
          func={previousPageHandler}
        />
        <h2>All Characters!</h2>
        <Button
          name="Next"
          disabled={page === maxPage ? true : false}
          func={nextPageHandler}
        />
      </div>
      <div className="sections">
        {characters.length === 0 && <p>Something went wrong!</p>}
        {characters.map((char) => {
          return <AllElements key={char.id} data={char} />;
        })}
      </div>
      <div className="centered">
        <Button
          name="Previous"
          disabled={page === 1 ? true : false}
          func={previousPageHandler}
        />
        <Button
          name="Next"
          disabled={page === maxPage ? true : false}
          func={nextPageHandler}
        />
      </div>
    </div>
  );
};

export default AllCharacters;
