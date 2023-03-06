import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/UI/Card/Card";
import Title from "../../components/UI/Title/Title";
import styles from "./ProductDetailsPage.module.scss";
import Button from "../../components/UI/Button/Button";
import BackButton from "../../components/UI/BackButton/BackButton";
import { addToCart } from "../../reducers/cartSlice";
import { TitleSizes } from "../../components/UI/Title/constants/title-sizes";

const ProductDetailsPage = () => {
  const { id: idParam } = useParams();
  const [itemIndex, setItemIndex] = useState(+idParam - 1);
  // TODO вынести в селектор вернуть один item (Number.parseInt(id) - 1)
  const items = useSelector((state) => state.products.items);
  const [item, setItem] = useState();
  const dispatch = useDispatch();

  // TODO вынести в селектор (id) => boolean
  const cartItems = useSelector((state) => state.cart.items);
  const [alreadyInCart, setAlreadyInCart] = useState(false);

  useEffect(() => {
    setItemIndex(+idParam - 1);
    setItem(items[itemIndex]);
  }, [idParam, items]);

  useEffect(() => {
    const expectedItem = cartItems.find((cartItem) => cartItem.id === +idParam);
    if (expectedItem) {
      setAlreadyInCart(true);
    }
    if (!expectedItem) {
      setAlreadyInCart(false);
    }
  }, [cartItems]);

  const addToCartButtonClickHandler = (e) => {
    dispatch(addToCart(item));
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

                {!alreadyInCart ? (
                  <Button
                    onClick={addToCartButtonClickHandler}
                    buttonStyle={"button_large"}
                  >
                    Добавить в корзину
                  </Button>
                ) : (
                  <Button
                    onClick={addToCartButtonClickHandler}
                    buttonStyle={"button_grey"}
                  >
                    Уже в корзине
                  </Button>
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
