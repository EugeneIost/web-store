import cn from 'classnames';
import { TitleSizes } from './constants/title-sizes';
import styles from './Title.module.scss';

const Title = ({ children, size = TitleSizes.DEFAULT }) => {
  return (
    <div
      className={cn(styles.title, {
        [styles.title_big]: size === TitleSizes.BIG,
        [styles.title_small]: size === TitleSizes.SMALL,
      })}
    >
      {children}
    </div>
  );
};

export default Title;
