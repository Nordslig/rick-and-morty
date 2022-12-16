import { Fragment, useContext, useEffect, useState } from "react";
import resultContext from "../store/result-context";
import AllElements from "./AllElements";
import Button from "./UI/Button";

const DisplayContent = (props) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");
  const [characters, setCharacters] = useState([]);

  const { choosePage } = useContext(resultContext);

  const pageSpecific = props.page;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/${pageSpecific}/?page=${page}`
      );

      const data = await response.json();

      setMaxPage(data.info.pages);

      setCharacters(data.results);
    };

    choosePage(pageSpecific);

    fetchData();
  }, [page, pageSpecific, choosePage]);

  const nextPageHandler = () => {
    setPage((prevState) => prevState + 1);
  };

  const previousPageHandler = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <Fragment>
      <div className="centered">
        <Button
          name="Previous"
          disabled={page === 1 ? true : false}
          func={previousPageHandler}
        />
        <h2>All {`${pageSpecific}s`}</h2>
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
    </Fragment>
  );
};

export default DisplayContent;
