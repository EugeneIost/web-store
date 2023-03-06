import styles from "./Button.module.scss";

// TODO параметры - size, color / сделать файл с Object.freeze на каждый тип
const Button = ({ children, onClick, buttonStyle }) => {
  let style;

  // TODO переделать на classnames
  if (buttonStyle) {
    style = `${styles.button} ${styles[`${buttonStyle}`]}`;
  } else {
    style = styles.button;
  }

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
