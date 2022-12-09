import classes from "./RandomElement.module.css";

const RandomSearch = () => {
  const charackter = (
    <section className={classes.section}>
      <h3 className={classes.name}>Name</h3>
      {/* <img alt="character image" /> */}
      <p className={classes.info}>Status</p>
      <p className={classes.info}>Location</p>
      <p className={classes.info}>How many episodes they were in?</p>
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
    <div className={classes.RandomSearch}>
      <h2>Your random search is:</h2>
      <div className={classes.sections}>
        {charackter}
        {location}
        {episode}
      </div>
    </div>
  );
};

export default RandomSearch;
