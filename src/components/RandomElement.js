import { Fragment } from "react";

const RandomSearch = () => {
  const charackter = (
    <section>
      <h3>Name</h3>
      {/* <img alt="character image" /> */}
      <p>Status</p>
      <p>Location</p>
      <p>How many episodes they were in?</p>
    </section>
  );

  const location = (
    <section>
      <h3>Name</h3>
      <p>Type</p>
      <p>Dimension</p>
      <p>How many residents there have been seen last?</p>
    </section>
  );

  const episode = (
    <section>
      <h3>Name</h3>
      <p>Air date</p>
      <p>Code of episode</p>
      <p>How many charackters were in it?</p>
    </section>
  );

  return (
    <div>
      <h2>Your random search is:</h2>
      {charackter}
      {location}
      {episode}
    </div>
  );
};

export default RandomSearch;
