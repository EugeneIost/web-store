import styles from "./QuantityController.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemById } from "../../../reducers/cartSlice";

import { addToCart, removeFromCart } from "../../../reducers/cartSlice";

const QuantityController = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => selectCartItemById(state, item.id));

  if (!cartItem) {
    return;
  }

  return (
    <div className={styles["quantity-options"]}>
      <button
        className={styles["quantity-options__button"]}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(removeFromCart(cartItem.id));
        }}
      >
        -
      </button>
      <span className={styles["quantity-options__quantity"]}>
        {cartItem.quantity}
      </span>
      <button
        className={styles["quantity-options__button"]}
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

export default QuantityController;
