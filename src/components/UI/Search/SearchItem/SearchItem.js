import styles from '../Search.module.scss';

const SearchItem = ({ item, onClick }) => {
  return (
    <div className={styles['search__list-item']} onClick={onClick}>
      <img src={item.image} alt={item.title} className={styles.search__image} />
      <div className={styles['search__right-side']}>
        <h4 className={styles.search__title}>{item.title}</h4>
        <span className={styles.search__price}>{item.price}$</span>
      </div>
    </div>
  );
};

export default SearchItem;
