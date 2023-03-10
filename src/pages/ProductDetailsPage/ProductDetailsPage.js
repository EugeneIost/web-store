import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectProductById } from '@/store/products/selectors';
import {
  addToCart,
  clearItem,
  selectIsItemInCart,
} from '@/store/reducers/cartSlice';

import { ButtonColors } from '@/components/UI/Button/constants/button-colors';
import { ButtonSizes } from '@/components/UI/Button/constants/button-sizes';
import BackButton from '../../components/UI/BackButton';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card/Card';
import Quantity from '../../components/UI/Quantity';
import { TitleSizes } from '../../components/UI/Title/constants/title-sizes';

import Title from '../../components/UI/Title/Title';

import styles from './ProductDetailsPage.module.scss';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    selectProductById(state, Number.parseInt(id, 10))
  );

  const isAlreadyInCart = useSelector((state) =>
    selectIsItemInCart(state, Number.parseInt(id, 10))
  );

  const addToCartButtonClickHandler = () => {
    dispatch(addToCart(product));
  };

  const alreadyInCartClickHandler = () => {
    dispatch(clearItem(product.id));
  };

  return (
    <>
      <div className={styles['back-button']}>
        <BackButton />
      </div>
      <Card>
        {product && (
          <div className={styles.product}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.product__image}
            />

            <div className={styles['product__right-side']}>
              <Title size={TitleSizes.SMALL}>{product.title}</Title>
              <h4 className={styles.product__category}>
                <em>{product.category}</em>
              </h4>

              <hr />

              <div className={styles.product__descr}>
                <b>Description: </b>
                {product.description}
              </div>

              <hr />

              <div className={styles.product__container}>
                <span className={styles.product__price}>{product.price}$</span>

                {!isAlreadyInCart ? (
                  <Button
                    onClick={addToCartButtonClickHandler}
                    size={ButtonSizes.LARGE}
                  >
                    Добавить в корзину
                  </Button>
                ) : (
                  <div className={styles['product__buttons-container']}>
                    <Button
                      onClick={alreadyInCartClickHandler}
                      size={ButtonSizes.LARGE}
                      color={ButtonColors.GREY}
                    >
                      Уже в корзине
                    </Button>
                    <div className={styles.product__quantity}>
                      <Quantity item={product} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Card>
    </>
  );
};

export default ProductDetailsPage;
