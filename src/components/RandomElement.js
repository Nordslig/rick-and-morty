import { useEffect, useState } from "react";
import classes from "./RandomElement.module.css";

const url = "https://rickandmortyapi.com/api/";

const RandomSearch = () => {
  const [maxPages, setMaxPages] = useState([]);
  const [charObj, setCharObj] = useState({});
  const [locaObj, setLocaObj] = useState({});
  const [episObj, setEpisObj] = useState({});

  // const randomElementNumber = Math.floor(Math.random() * 20);

  // const drawRandomPage = (maxPage) => {
  //   const randomPage = Math.floor(Math.random() * maxPage + 1);
  //   return randomPage;
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

      setMaxPages(everyMaxPage);
    };

    fetchMaxPages();
  }, []);

  let i = 0;

  maxPages.forEach(
    async (maxPage) => {
      const { randomPageNum: pageNum, randomEleNum: eleNum } =
        randomNumber(maxPage);

      const saveData = async () => {};

      i++;

      // console.log(i);

      const response = await fetch(
        `${url}${
          i === 1 ? "character" : i === 2 ? "location" : "episode"
        }/?page=${pageNum}`
      );

      console.log(i);

      const data = await response.json();

      const keys = data.results[eleNum];

      console.log("species" in keys);

      if ("species" in keys) {
        const character = {
          name: keys.name,
        };

        console.log(character);

        // setCharObj(character);
        // setCharObj((prevState) => ({
        //   ...prevState,
        //   ...character,
        // }));
      }

      // console.log(data.results[eleNum]);
    }
    // console.log(data.results[eleNum].name);
  );

  // console.log(charObj);
  // const charackter = (
  //   <section className={classes.section}>
  //     <div className={classes.image}>
  //       <img src={iam} width="150px" height="150 px" alt="character look" />
  //     </div>
  //     <div className={classes.info}>
  //       <h3>Name: </h3>
  //       <p>{true}</p>
  //       <h3>Status: </h3>
  //       <p>{true}</p>
  //     </div>
  //     <div className={classes.info}>
  //       <h3>Last location: </h3>
  //       <p>{location.name}</p>
  //       <h3>Number of Episodes:</h3>
  //       <p>{episode.length}</p>
  //     </div>
  //   </section>
  // );

  // const location = (
  //   <section className={classes.section}>
  //     <div className={classes.info}>
  //       <h3>Name: </h3>
  //       <p>{true}</p>
  //       <h3>Type: </h3>
  //       <p>{type}</p>
  //     </div>
  //     <div className={classes.info}>
  //       <h3>Dimension </h3>
  //       <p>{dimension}</p>
  //       <h3>Number of Residents:</h3>
  //       <p>{residents.length}</p>
  //     </div>
  //   </section>
  // );

  // const episode = (
  //   <section className={classes.section}>
  //     <div className={classes.info}>
  //       <h3>Name: </h3>
  //       <p>{true}</p>
  //       <h3>Air date: </h3>
  //       <p>{air_date}</p>
  //     </div>
  //     <div className={classes.info}>
  //       <h3>Episode Code: </h3>
  //       <p>{code}</p>
  //       <h3>Number of characters:</h3>
  //       <p>{characters.length}</p>
  //     </div>
  //   </section>
  // );

  return (
    <div className={classes.RandomSearch}>
      <h2>Your random search is:</h2>
      <div className={classes.sections}>
        {/* {maxPages.map((maxPage) => {
          const data = randomNumber(maxpage);
        })} */}
        {/* {charackter}
        {location} */}
        {/* {episode} */}
      </div>
    </div>
  );
};

export default RandomSearch;
