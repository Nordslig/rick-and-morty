import React, { useState } from "react";

const resultContext = React.createContext({
  results: [],
  onFetch: () => {},
});

export const ResultContextProvider = (props) => {
  const [fetched, setFetched] = useState();

  const fetchedResults = (dataResults) => {
    setFetched(dataResults);
  };

  const contextValue = {
    results: fetched,
    onFetch: fetchedResults,
  };

  return (
    <resultContext.Provider value={contextValue}>
      {props.children}
    </resultContext.Provider>
  );
};

export default resultContext;
