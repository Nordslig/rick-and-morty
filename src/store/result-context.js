import React from "react";

const ResultContext = React.createContext({
  name: [],
  status: "",
  lastLocation: {},
  episodesNumber: [],
});

export const ResultContextProvider = (props) => {
  // const contextValue = {
  //   name,
  //   status: status,
  //   lastLocation: lastLocation.name,
  //   episodesNumber: episodesNumber.length,
  // };

  return (
    <ResultContext.Provider value={ResultContext}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default ResultContext;
