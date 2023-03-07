import styles from "./DropdownMenu.module.scss";
import { useNavigate } from "react-router-dom";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import cn from "classnames";

const DropdownMenu = ({ setIsActive, elements, isActive }) => {
  const navigate = useNavigate();
  const clickLinkHandler = (title) => {
    setIsActive(false);
    navigate(`/${title}`);
  };

  // DONE classnames

  return (
    <ul
      className={cn(styles.dropdown, {
        [styles.dropdown_active]: isActive,
      })}
    >
      {elements.map((element) => (
        <div className={styles["dropdown__container"]} key={element}>
          <DropdownMenuItem
            onClick={clickLinkHandler.bind(undefined, element)}
            title={element}
          />
        </div>
      ))}
    </ul>
  );
};

export default DropdownMenu;
