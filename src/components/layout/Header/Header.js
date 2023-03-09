import cn from 'classnames';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';

import cartIcon from '../../../assets/icons/icon-cart.png';
import categoryIcon from '../../../assets/icons/icon-category.png';
import CartList from '../../CartList/CartList';
import CartModal from '../../UI/CartModal';
import DropdownButton from '../../UI/DropdownButton/DropdownButton';
import HeaderButton from '../../UI/HeaderButton';
import Search from '../../UI/Search/Search';
import logo from '../../../assets/icons/web-store-header-logo.png';

const Header = () => {
  const categories = useSelector((state) => state.products.categories);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const inView = useSelector((state) => state.carouselObserver.inView);
  const [isCartModalActive, setIsCartModalActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isCartModalActive ? 'hidden' : 'auto';
  }, [isCartModalActive]);

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
        <img
          src={logo}
          alt="web-store"
          onClick={() => {
            navigate('/');
          }}
          className={styles.header__logo}
        />
        <Search />
        <div className={styles.header__buttons}>
          <DropdownButton
            icon={categoryIcon}
            title="Категории"
            elements={categories}
          />
          <HeaderButton
            src={cartIcon}
            title="Корзина"
            onClick={toggleCartModalHandler}
          >
            <div className={styles['header-button__amount']}>{totalAmount}</div>
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
