import styles from "./HeaderButton.module.scss";
import React from "react";
import { useSelector } from "react-redux";

const HeaderButton = ({ onClick, src, alt, title, children }) => {
  return (
    <div className={styles["header-button"]} onClick={onClick}>
      <img className={styles["header-button__icon"]} src={src} alt={alt} />
      <div className={styles["header-button__title"]}>{title}</div>
      {/* DONE переделать на children */}
      {children}
    </div>
  );
};

export default HeaderButton;
