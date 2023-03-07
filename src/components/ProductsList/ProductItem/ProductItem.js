import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductItem.module.scss';
import Button from '../../UI/Button/Button';
import {
  addToCart,
  clearItem,
  selectIsItemInCart,
} from '../../../reducers/cartSlice';
import QuantityController from '../../UI/QuantityController/QuantityController';

const ProductItem = ({ onClick, item }) => {
  const dispatch = useDispatch();
  // DONE вынести в селектор (id) => boolean
  const isAlreadyInCart = useSelector((state) =>
    selectIsItemInCart(state, item.id)
  );

  const addToCartButtonClickHandler = (e) => {
    e.stopPropagation();
    dispatch(addToCart(item));
  };

  const alreadyInCartClickHandler = (e) => {
    e.stopPropagation();
    dispatch(clearItem(item.id));
  };

  return (
    <div className={styles['product-item']} onClick={onClick}>
      <h3 className={styles['product-item__title']}>{item.title}</h3>
      <div className={styles['product-item__image']}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles['product-item__container']}>
        <span className={styles['product-item__price']}>{item.price}$</span>
        {!isAlreadyInCart ? (
          <Button onClick={addToCartButtonClickHandler}>
            Добавить в корзину
          </Button>
        ) : (
          <div className={styles['product-item__buttons-container']}>
            <Button onClick={alreadyInCartClickHandler} color="grey">
              Уже в корзине
            </Button>

            <div className={styles['product-item__quantity']}>
              <QuantityController item={item} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
