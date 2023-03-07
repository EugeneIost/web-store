import { useDispatch } from 'react-redux';
import { clearItem } from '@/store/reducers/cartSlice';

import recyclingBinIcon from '../../../assets/icons/icon-recycling-bin.png';

import Quantity from '../../UI/Quantity';

import styles from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__left-side']}>
        <img
          src={item.image}
          alt={item.title}
          className={styles['cart-item__image']}
        />
        <div className={styles['cart-item__text-container']}>
          <h4 className={styles['cart-item__title']}>{item.title}</h4>
          <p className={styles['cart-item__category']}>
            Category: {item.category}
          </p>
        </div>
      </div>
      <div className={styles['cart-item__right-side']}>
        <Quantity item={item} />

        <span className={styles['cart-item__price']}>
          {item.totalPrice.toFixed(2)}$
        </span>

        <img
          src={recyclingBinIcon}
          alt="Иконка корзина"
          className={styles['cart-item__recycling-bin']}
          onClick={() => {
            dispatch(clearItem(item.id));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
