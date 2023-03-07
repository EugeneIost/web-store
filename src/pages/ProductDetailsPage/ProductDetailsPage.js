import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/UI/Card/Card";
import QuantityController from "../../components/UI/QuantityController/QuantityController";
import Title from "../../components/UI/Title/Title";
import styles from "./ProductDetailsPage.module.scss";
import Button from "../../components/UI/Button/Button";
import BackButton from "../../components/UI/BackButton/BackButton";
import { addToCart, clearItem } from "../../reducers/cartSlice";
import { TitleSizes } from "../../components/UI/Title/constants/title-sizes";
import { setInView } from "../../reducers/carouselObserverSlice";
import { selectIsItemInCart } from "../../reducers/cartSlice";
import { selectItemById } from "../../reducers/productSlice";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(setInView(true));
  // DONE вынести в селектор вернуть один item (Number.parseInt(id) - 1)
  const item = useSelector((state) => selectItemById(state, +id));

  // DONE вынести в селектор (id) => boolean
  const isAlreadyInCart = useSelector((state) =>
    selectIsItemInCart(state, +id)
  );

  const addToCartButtonClickHandler = (e) => {
    dispatch(addToCart(item));
  };

  const alreadyInCartClickHandler = (e) => {
    dispatch(clearItem(item.id));
  };

  return (
    <>
      <div className={styles["back-button"]}>
        <BackButton />
      </div>
      <Card>
        {item && (
          <div className={styles.product}>
            <img
              src={item.image}
              alt={item.title}
              className={styles["product__image"]}
            />

            <div className={styles["product__right-side"]}>
              <Title size={TitleSizes.SMALL}>{item.title}</Title>
              <h4 className={styles["product__category"]}>
                <em>{item.category}</em>
              </h4>

              <hr />

              <div className={styles["product__descr"]}>
                <b>Description: </b>
                {item.description}
              </div>

              <hr />

              <div className={styles["product__container"]}>
                <span className={styles["product__price"]}>
                  Price: {item.price}$
                </span>

                {!isAlreadyInCart ? (
                  <Button onClick={addToCartButtonClickHandler} size={"large"}>
                    Добавить в корзину
                  </Button>
                ) : (
                  <div className={styles["product__buttons-container"]}>
                    <Button
                      onClick={alreadyInCartClickHandler}
                      size={"large"}
                      color={"grey"}
                    >
                      Уже в корзине
                    </Button>
                    <div className={styles["product__quantity"]}>
                      <QuantityController item={item} />
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
