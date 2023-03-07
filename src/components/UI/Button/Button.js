import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonSizes } from './constants/button-sizes';
import { ButtonColors } from './constants/button-colors';

const Button = ({ children, onClick, size, color }) => {
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
