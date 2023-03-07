import styles from "./Button.module.scss";
import cn from "classnames";
import { ButtonSizes } from "./constants/button-sizes";
import { ButtonColors } from "./constants/button-colors";

// DONE параметры - size, color / сделать файл с Object.freeze на каждый тип
const Button = ({ children, onClick, buttonStyle, size, color }) => {
  let style;

  // DONE переделать на classnames
  if (buttonStyle) {
    style = `${styles.button} ${styles[`${buttonStyle}`]}`;
  } else {
    style = styles.button;
  }

  return (
    <button
      className={cn(styles.button, {
        [styles.button_large]: size === ButtonSizes.LARGE,
        [styles.button_grey]: color === ButtonColors.GREY,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
