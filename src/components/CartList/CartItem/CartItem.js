import styles from "./CartItem.module.scss";
import recyclingBinIcon from "../../../assets/icons/icon-recycling-bin.png";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearItem,
} from "../../../reducers/cartSlice";
import QuantityController from "../../UI/QuantityController/QuantityController";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-item__left-side"]}>
        <img
          src={item.image}
          alt={item.title}
          className={styles["cart-item__image"]}
        />
        <div className={styles["cart-item__text-container"]}>
          <h4 className={styles["cart-item__title"]}>{item.title}</h4>
          <p className={styles["cart-item__category"]}>
            Category: {item.category}
          </p>
        </div>
      </div>
      <div className={styles["cart-item__right-side"]}>
        <QuantityController item={item} />
        <span className={styles["cart-item__price"]}>
          {item.totalPrice.toFixed(2)}$
        </span>
        <img
          src={recyclingBinIcon}
          alt="Иконка корзина"
          className={styles["cart-item__recycling-bin"]}
          onClick={(e) => {
            dispatch(clearItem(item.id));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
