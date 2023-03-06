import styles from "./ProductItem.module.scss";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../reducers/cartSlice";
import { useState, useEffect } from "react";

const ProductItem = ({ onClick, item }) => {
  const dispatch = useDispatch();
  // TODO вынести в селектор (id) => boolean
  const cartItems = useSelector((state) => state.cart.items);
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  useEffect(() => {
    const expectedItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (expectedItem) {
      setAlreadyInCart(true);
    }

    if (!expectedItem) {
      setAlreadyInCart(false);
    }
  }, [cartItems]);

  const addToCartButtonClickHandler = (e) => {
    e.stopPropagation();
    dispatch(addToCart(item));
  };

  return (
    <div className={styles["product-item"]} onClick={onClick}>
      <h3 className={styles["product-item__title"]}>{item.title}</h3>
      <div className={styles["product-item__image"]}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles["product-item__container"]}>
        <span className={styles["product-item__price"]}>{item.price}$</span>
        {!alreadyInCart ? (
          <Button onClick={addToCartButtonClickHandler}>
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
  );
};

export default ProductItem;
