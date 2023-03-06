import { useState } from "react";
import styles from "./FilterButton.module.scss";
import filterIcon from "../../../assets/icons/icon-filter.png";

const FilterButton = ({ options, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const clickFilterButtonHandler = () => {
    setIsActive((current) => !current);
  };

  // TODO classnames (cn)
  const style = isActive
    ? `${styles["filter__list"]} ${styles["filter__list_active"]}`
    : `${styles["filter__list"]}`;

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["filter"]} onClick={clickFilterButtonHandler}>
          <img
            src={filterIcon}
            alt="Фильтр"
            className={styles["filter__icon"]}
          />
          <div className={styles["filter__title"]}>Фильтр</div>
        </div>
        <ul className={style}>
          {options.map((option) => (
            <li onClick={onClick.bind(undefined, option)} key={option}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterButton;
