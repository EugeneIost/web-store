import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonSizes } from './constants/button-sizes';
import { ButtonColors } from './constants/button-colors';

// DONE параметры - size, color / сделать файл с Object.freeze на каждый тип
const Button = ({ children, onClick, size, color }) => {
  // DONE переделать на classnames

  return (
    <button
      type="button"
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
