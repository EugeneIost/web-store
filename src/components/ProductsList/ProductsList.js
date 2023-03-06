import styles from "./ProductsList.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductItem from "./ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";
import DropdownButton from "../UI/DropdownButton/DropdownButton";
import FilterButton from "./FilterButton/FilterButton";

const ProductsList = ({ items }) => {
  const navigate = useNavigate();
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const filterOptions = ["По убыванию цены", "По возрастанию цены"];
  const clickFilterButtonHandler = (title) => {
    setFilteredItems((current) => {
      const filteredItemsCopy = [...current];
      filteredItemsCopy.sort((a, b) => {
        if (title === "По убыванию цены") {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });
      return filteredItemsCopy;
    });
  };

  return (
    <>
      {filteredItems.length > 1 && (
        <FilterButton
          options={filterOptions}
          onClick={clickFilterButtonHandler}
        />
      )}
      <div className={styles["products-grid"]}>
        {filteredItems &&
          filteredItems.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              onClick={(e) => {
                navigate(`/${item.category}/${item.id}`);
              }}
            />
          ))}
      </div>
    </>
  );
};

export default ProductsList;
