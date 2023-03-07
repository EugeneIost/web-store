import styles from "./Header.module.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Search from "../../UI/Search/Search";
import HeaderButton from "../../UI/HeaderButton";
import categoryIcon from "../../../assets/icons/icon-category.png";
import cartIcon from "../../../assets/icons/icon-cart.png";
import DropdownButton from "../../UI/DropdownButton/DropdownButton";
import CartModal from "../../UI/CartModal";
import CartList from "../../CartList/CartList";
import cn from "classnames";

const Header = () => {
  const categories = useSelector((state) => state.products.categories);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const inView = useSelector((state) => state.carouselObserver.inView);
  const [isCartModalActive, setIsCartModalActive] = useState(false);

  // DONE classnames (cn)

  const toggleCartModalHandler = () => {
    setIsCartModalActive(true);
  };

  return (
    <>
      <header
        className={cn(styles.header, {
          [styles.header_relative]: inView,
          [styles.header_fixed]: !inView,
        })}
      >
        <div className={styles["header__title"]}>
          <Link to="/">Web-store</Link>
        </div>
        <Search></Search>
        <div className={styles["header__buttons"]}>
          <DropdownButton
            icon={categoryIcon}
            title={"Категории"}
            elements={categories}
          />
          <HeaderButton
            src={cartIcon}
            title="Корзина"
            onClick={toggleCartModalHandler}
          >
            <div className={styles["header-button__amount"]}>{totalAmount}</div>
          </HeaderButton>
        </div>
      </header>
      {isCartModalActive && (
        <CartModal setIsCartModalActive={setIsCartModalActive}>
          <CartList />
        </CartModal>
      )}
    </>
  );
};

export default Header;
