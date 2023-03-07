import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemById,
} from '@/store/reducers/cartSlice';

import styles from './Quantity.module.scss';

const Quantity = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => selectCartItemById(state, item.id));

  if (!cartItem) {
    return null;
  }

  return (
    <div className={styles['quantity-options']}>
      <button
        type="button"
        className={styles['quantity-options__button']}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(removeFromCart(cartItem.id));
        }}
      >
        -
      </button>

      <span className={styles['quantity-options__quantity']}>
        {cartItem.quantity}
      </span>

      <button
        type="button"
        className={styles['quantity-options__button']}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(addToCart(cartItem));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
