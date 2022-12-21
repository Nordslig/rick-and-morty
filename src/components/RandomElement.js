import { useEffect, useState } from "react";
import classes from "./RandomElement.module.css";

const url = "https://rickandmortyapi.com/api/";

const RandomSearch = () => {
  const [maxPages, setMaxPages] = useState([]);
  const [charObj, setCharObj] = useState({});
  const [locaObj, setLocaObj] = useState({});
  const [episObj, setEpisObj] = useState({});

  const charackter = (data) => {
    const yeah = (
      <section className={classes.section}>
        <div className={classes.image}>
          <img src="" width="150px" height="150 px" alt="character look" />
        </div>
        <div className={classes.info}>
          <h3>Name: </h3>
          <p>{data.name}</p>
          <h3>Status: </h3>
          <p>{true}</p>
        </div>
        <div className={classes.info}>
          <h3>Last location: </h3>
          <p>{data.location}</p>
          <h3>Number of Episodes:</h3>
          <p>{data.episodes}</p>
        </div>
      </section>
    );
    return yeah;
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

      setMaxPages(everyMaxPage);
    };

    fetchMaxPages();
  }, []);

  let i = 0;

  maxPages.forEach(async (maxPage) => {
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
      const ta = charackter(character);
    }
  });

  return (
    <div className={classes.RandomSearch}>
      <h2>Your random search is:</h2>
      <div className={classes.sections}>
        <p>{ta}</p>
      </div>
    </div>
  );
};

export default RandomSearch;
