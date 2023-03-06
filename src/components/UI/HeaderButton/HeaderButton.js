import styles from "./HeaderButton.module.scss";
import React from "react";
import { useSelector } from "react-redux";

const HeaderButton = ({ onClick, src, alt, title, isCart }) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className={styles["header-button"]} onClick={onClick}>
      <img className={styles["header-button__icon"]} src={src} alt={alt} />
      <div className={styles["header-button__title"]}>{title}</div>
      {/* TODO переделать на children */}
      {isCart && (
        <div className={styles["header-button__amount"]}>{totalAmount}</div>
      )}
    </div>
  );
};

export default HeaderButton;
