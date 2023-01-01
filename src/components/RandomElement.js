import { useEffect, useRef, useState } from "react";
import classes from "./RandomElement.module.css";

const url = "https://rickandmortyapi.com/api/";

const RandomSearch = () => {
  const [maxPages, setMaxPages] = useState([]);
  const [charObj, setCharObj] = useState([]);
  const charRef = useRef();
  const [locaObj, setLocaObj] = useState({});
  const [episObj, setEpisObj] = useState({});

  const charackter = (data) => {
    setCharObj(data);
  };

  const randomNumber = (numOfEle) => {
    let randomEleNum = Math.floor(Math.random() * numOfEle);

    const randomPageNum = Math.floor(randomEleNum / 20) + 1;

    randomEleNum = randomEleNum % 20;

    return { randomPageNum, randomEleNum };
  };

  useEffect(() => {
    const fetchMaxPages = async () => {
      const responseCharacter = await fetch(`${url}character`);
      const responseLocation = await fetch(`${url}location`);
      const responseEpisode = await fetch(`${url}episode`);

      const dataChar = await responseCharacter.json();
      const dataLoca = await responseLocation.json();
      const dataEpis = await responseEpisode.json();

      const everyMaxPage = [
        dataChar.info.count,
        dataLoca.info.count,
        dataEpis.info.count,
      ];

      // setMaxPages(everyMaxPage);

      let i = 0;

      everyMaxPage.forEach(async (maxPage) => {
        const { randomPageNum: pageNum, randomEleNum: eleNum } =
          randomNumber(maxPage);

        i++;

        const response = await fetch(
          `${url}${
            i === 1 ? "character" : i === 2 ? "location" : "episode"
          }/?page=${pageNum}`
        );

        const data = await response.json();

        const keys = data.results[eleNum];

        if ("species" in keys) {
          const character = {
            id: keys.id,
            name: keys.name,
            status: keys.status,
            location: keys.location.name,
            episodes: keys.episode.length,
          };

          setCharObj((prevState) => [...prevState, character]);
        }

        if ("dimension" in keys) {
          const location = {
            id: keys.id,
            name: keys.name,
            type: keys.type,
            dimension: keys.dimension,
            residents: keys.residents.length,
          };

          setCharObj((prevState) => [...prevState, location]);
        }

        if ("episode" in keys) {
          const episode = {
            id: keys.id,
            name: keys.name,
            air_date: keys.air_date,
            episode: keys.episode,
          };

          setCharObj((prevState) => [...prevState, episode]);
        }
      });
    };

    fetchMaxPages();
  }, []);

  const Element = (props) => {
    return (
      <section key={props.data.id} className={classes.section}>
        <div className={classes.image}>
          <img src="" width="150px" height="150 px" alt="character look" />
        </div>
        <div className={classes.info}>
          <h3>Name: </h3>
          <p>{props.data.name}</p>
          <h3>Status: </h3>
          <p>{true}</p>
        </div>
        <div className={classes.info}>
          <h3>Last location: </h3>
          <p>{props.data.location}</p>
          <h3>Number of Episodes:</h3>
          <p>{props.data.episodes}</p>
        </div>
      </section>
    );
  };

  return (
    <div className={classes.RandomSearch}>
      <h2>Your random search is:</h2>
      <div className={classes.sections}>
        {charObj.map((obj) => (
          <Element data={obj} />
        ))}
      </div>
    </div>
  );
};

export default RandomSearch;
