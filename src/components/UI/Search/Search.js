import styles from "./Search.module.scss";
import searchIcon from "../../../assets/icons/icon-search.png";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem/SearchItem";
import { useDetectClickOutside } from "react-detect-click-outside";
import { selectFilteredProducts } from "../../../reducers/productSlice";

const Search = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const items = useSelector((state) => selectFilteredProducts(state, input));

  useEffect(() => {
    setIsActive(items?.length > 0);
  }, [items]);

  const changeInputHandler = (e) => {
    setInput(e.target.value.trim());
  };

  const clickItemHandler = (category, id) => {
    navigate(`/${category}/${id}`);
    setInput("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length) {
      navigate(`/search/${input}`);
    } else {
      navigate("/");
    }
    setInput("");
  };

  const closeDropdown = () => {
    setIsActive(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={submitHandler}>
        <label htmlFor="search">
          <img
            src={searchIcon}
            alt="Иконка поиска"
            className={styles["search__icon"]}
          />
        </label>
        <input
          autoComplete="off"
          type="text"
          id="search"
          value={input}
          className={styles["search__input"]}
          placeholder="Введите название товара или категорию"
          onChange={changeInputHandler}
        />
      </form>
      {items.length > 0 && isActive && (
        <div className={styles["search__dropdown"]} ref={ref}>
          {items.slice(0, 5).map((item, index) => {
            return (
              <SearchItem
                key={item.id}
                item={item}
                isLast={index != items.length - 1 && index != 4}
                onClick={clickItemHandler.bind(
                  undefined,
                  item.category,
                  item.id
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
