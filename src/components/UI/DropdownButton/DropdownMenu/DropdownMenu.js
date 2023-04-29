import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './DropdownMenu.module.scss';
import DropdownMenuItem from '../DropdownMenuItem/DropdownMenuItem';

const DropdownMenu = ({ setIsActive, elements, isActive }) => {
  const navigate = useNavigate();
  const clickLinkHandler = (title) => {
    setIsActive(false);
    navigate(`/web-store/${title}`);
  };

  return (
    <ul
      className={cn(styles.dropdown, {
        [styles.dropdown_active]: isActive,
      })}
    >
      {elements.map((element) => (
        <div className={styles.dropdown__container} key={element}>
          <DropdownMenuItem
            onClick={() => clickLinkHandler(element)}
            title={element}
          />
        </div>
      ))}
    </ul>
  );
};

export default DropdownMenu;
