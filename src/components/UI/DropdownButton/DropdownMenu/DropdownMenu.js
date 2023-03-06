import styles from "./DropdownMenu.module.scss";
import { useNavigate } from "react-router-dom";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";

const DropdownMenu = ({ setIsActive, elements, isActive }) => {
  const navigate = useNavigate();
  const clickLinkHandler = (title) => {
    setIsActive(false);
    navigate(`/${title}`);
  };

  // TODO classnames
  const style = isActive
    ? `${styles["dropdown"]} ${styles["dropdown_active"]}`
    : `${styles["dropdown"]}`;

  return (
    <ul className={style}>
      {elements.map((element, index) => (
        <div className={styles["dropdown__container"]} key={element}>
          {index !== elements.length - 1 ? (
            <DropdownMenuItem
              onClick={clickLinkHandler.bind(undefined, element)}
              title={element}
              isLast={false}
            />
          ) : (
            <DropdownMenuItem
              onClick={clickLinkHandler.bind(undefined, element)}
              title={element}
              isLast={true}
            />
          )}
        </div>
      ))}
    </ul>
  );
};

export default DropdownMenu;
