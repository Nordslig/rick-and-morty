import { useEffect, useRef, useState } from "react";
import Element from "./Element";
import classes from "./RandomElement.module.css";

const url = "https://rickandmortyapi.com/api/";

const RandomSearch = () => {
  const [maxPages, setMaxPages] = useState([]);
  const [charObj, setCharObj] = useState([]);
  const charRef = useRef();
  // const [locaObj, setLocaObj] = useState({});
  // const [episObj, setEpisObj] = useState({});

  // const charackter = (data) => {
  //   setCharObj(data);
  // };

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

        console.log(data);

        const keys = data.results[eleNum];

        if ("species" in keys) {
          const character = {
            id: keys.id,
            image: keys.image,
            name: keys.name,
            status: keys.status,
            location: keys.location.name,
            episodes: keys.episode.length,
            currentEle: "character",
          };

          setCharObj((prevState) => [...prevState, character]);
        } else if ("dimension" in keys) {
          const location = {
            id: keys.id,
            name: keys.name,
            type: keys.type,
            dimension: keys.dimension,
            residents: keys.residents.length,
            currentEle: "location",
          };

          setCharObj((prevState) => [...prevState, location]);
        } else {
          const episode = {
            id: keys.id,
            name: keys.name,
            air_date: keys.air_date,
            episode: keys.episode,
            characters: keys.characters,
            currentEle: "episode",
          };

          setCharObj((prevState) => [...prevState, episode]);
        }
      });
    };

    fetchMaxPages();
  }, []);

  console.log(charObj);

  return (
    <div className={classes.RandomSearch}>
      <h2>Your random search is:</h2>
      <div className={classes.sections}>
        {charObj.map((obj) => (
          <Element
            key={obj.id}
            data={obj}
            currentElement={
              obj.currentEle === "character"
                ? obj.currentEle
                : obj.currentEle === "location"
                ? obj.currentEle
                : obj.currentEle
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RandomSearch;
