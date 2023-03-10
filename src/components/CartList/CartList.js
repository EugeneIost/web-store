import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import styles from './CartList.module.scss';
import Button from '../UI/Button/Button';

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((acc, item) => acc + item.totalPrice, 0));
  }, [cartItems]);

  return (
    <>
      <div className={styles['cart-items']}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className={styles['cart-items__item-container']}>
              <CartItem item={item} />
            </div>
          ))
        ) : (
          <p className={styles['cart-items__empty']}>
            Здесь в данный момент пусто. Пожалуйста, выберите товар на сайте и
            возвращайтесь снова!
          </p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className={styles['cart-items__bottom-right']}>
          <h2 className={styles['cart-items__total']}>
            Итого: {totalPrice.toFixed(2)}$
          </h2>

          <div className={styles['cart-items__button']}>
            <Button buttonStyle="button_large" size="large" color="grey">
              Оформить заказ
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartList;
