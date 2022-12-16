import React, { useState } from "react";

const resultContext = React.createContext({
  results: [],
  actualPage: "",
  onFetch: () => {},
  choosePage: () => {},
});

export const ResultContextProvider = (props) => {
  const [fetched, setFetched] = useState();
  const [chosenPage, setChosenPage] = useState();

  const fetchedResultsHandler = (dataResults) => {
    setFetched(dataResults);
  };

  const choosePageHandler = (pageName) => {
    setChosenPage(pageName);
  };

  const contextValue = {
    results: fetched,
    actualPage: chosenPage,
    onFetch: fetchedResultsHandler,
    choosePage: choosePageHandler,
  };

  return (
    <resultContext.Provider value={contextValue}>
      {props.children}
    </resultContext.Provider>
  );
};

export default resultContext;
