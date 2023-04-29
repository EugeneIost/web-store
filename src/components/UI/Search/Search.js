import { useEffect, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectFilteredProducts } from '@/store/products/selectors';

import searchIcon from '../../../assets/icons/icon-search.png';

import styles from './Search.module.scss';
import SearchItem from './SearchItem/SearchItem';

const Search = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const items = useSelector((state) => selectFilteredProducts(state, input));

  useEffect(() => {
    setIsActive(items?.length > 0);
  }, [items]);

  const changeInputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickItemHandler = (category, id) => {
    navigate(`/web-store/${category}/${id}`);
    setInput('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.trim().length) {
      navigate(`/web-store/search/${input}`);
    } else {
      navigate('/web-store');
    }
    setInput('');
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
            className={styles.search__icon}
          />
        </label>
        <input
          autoComplete="off"
          type="text"
          id="search"
          value={input}
          className={styles.search__input}
          placeholder="Введите название товара"
          onChange={changeInputHandler}
        />
      </form>
      {items.length > 0 && isActive && (
        <div className={styles.search__dropdown} ref={ref}>
          {items.slice(0, 5).map((item) => {
            return (
              <div
                key={item.id}
                className={styles['search__dropdown-item-container']}
              >
                <SearchItem
                  key={item.id}
                  item={item}
                  onClick={() => clickItemHandler(item.category, item.id)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
