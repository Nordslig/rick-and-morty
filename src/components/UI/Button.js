import classes from "./Button.module.css";

const Button = ({ func, name, disabled = false }) => {
  return (
    <button
      className={classes.button}
      onClick={func}
      disabled={disabled ? true : false}
    >
      {name}
    </button>
  );
};

export default Button;
