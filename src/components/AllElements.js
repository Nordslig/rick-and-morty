import classes from "./AllElements.module.css";

const AllElements = (props) => {
  const { image, name, status, location, episode } = props.data;

  return (
    <section className={classes.section}>
      <div className={classes.image}>
        <img src={image} width="150px" height="150 px" alt="character look" />
      </div>
      <div className={classes.info}>
        <h3>Name: </h3>
        <p>{name}</p>
        <h3>Status: </h3>
        <p>{status}</p>
      </div>
      <div className={classes.info}>
        <h3>Last location: </h3>
        <p>{location.name}</p>
        <h3>Number of Episodes:</h3>
        <p>{episode.length}</p>
      </div>
    </section>
  );
};

export default AllElements;
