import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import FilterButton from './FilterButton/FilterButton';
import ProductItem from './ProductItem/ProductItem';
import styles from './ProductsList.module.scss';

const ProductsList = ({ items }) => {
  const navigate = useNavigate();
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const filterOptions = ['По убыванию цены', 'По возрастанию цены'];
  const clickFilterButtonHandler = (title) => {
    setFilteredItems((current) => {
      const filteredItemsCopy = [...current];
      filteredItemsCopy.sort((a, b) => {
        if (title === 'По убыванию цены') {
          return b.price - a.price;
        }
        return a.price - b.price;
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
      <div className={styles['products-grid']}>
        {filteredItems &&
          filteredItems.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              onClick={() => {
                navigate(`/${item.category}/${item.id}`);
              }}
            />
          ))}
      </div>
    </>
  );
};

export default ProductsList;
