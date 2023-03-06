import styles from "../DropdownMenu/DropdownMenu.module.scss";

const DropdownMenuItem = ({ isLast, title, onClick }) => {
  // TODO убрать isLast, убрать div, сделать в родителе через css border-bottom, :not(:last-child)
  return (
    <>
      <li onClick={onClick} className={styles["dropdown__link"]}>
        {title}
      </li>
      {!isLast && <div className={styles["dropdown__line"]}></div>}
    </>
  );
};

export default DropdownMenuItem;
