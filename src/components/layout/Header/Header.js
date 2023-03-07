import cn from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import cartIcon from '../../../assets/icons/icon-cart.png';
import categoryIcon from '../../../assets/icons/icon-category.png';
import CartList from '../../CartList/CartList';
import CartModal from '../../UI/CartModal';
import DropdownButton from '../../UI/DropdownButton/DropdownButton';
import HeaderButton from '../../UI/HeaderButton';
import Search from '../../UI/Search/Search';

const Header = () => {
  const categories = useSelector((state) => state.products.categories);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const inView = useSelector((state) => state.carouselObserver.inView);
  const [isCartModalActive, setIsCartModalActive] = useState(false);

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
        <div className={styles.header__title}>
          <Link to="/">Web-store</Link>
        </div>
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
