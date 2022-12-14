import { Fragment, useEffect, useState } from "react";

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
      console.log("rerender1");
      // console.log(data);
    };

    fetchData();
  }, [page]);

  const character = (
    <section>
      <img width="300px" height="300px" />
      <p>Name: </p>
      <p></p>
      <p>Status: </p>
      <p></p>
      <p>Last location: </p>
      <p></p>
    </section>
  );

  return (
    <div>
      <h2>All Characters!</h2>
      <div>
        {characters.length === 0 && <p>Something went wrong!</p>}
        {characters.map((char) => {
          return (
            <section key={char.id}>
              <img src={char.image} width="300px" height="300px" />
              <p>Name: </p>
              <p>{char.name}</p>
              <p>Status: </p>
              <p>{char.status}</p>
              <p>Last location: </p>
              <p>{char.location.name}</p>
            </section>
          );
        })}
      </div>
      <button disabled={page === 1 ? true : false}>Previous</button>
      <button
        onClick={() => setPage(2)}
        disabled={page === maxPage ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default AllCharacters;
