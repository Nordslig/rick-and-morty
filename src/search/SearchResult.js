import { Fragment } from "react";

const SearchResult = () => {
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
    <Fragment>
      {charackter}
      {location}
      {episode}
    </Fragment>
  );
};

export default SearchResult;
