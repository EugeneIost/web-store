import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/UI/BackButton/BackButton';
import { TitleSizes } from '../../components/UI/Title/constants/title-sizes';
import Title from '../../components/UI/Title/Title';
import ProductsList from '../../components/ProductsList';

import { selectFilteredProducts } from '../../reducers/productSlice';
import { setInView } from '../../reducers/carouselObserverSlice';

import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const { searchValue } = useParams();
  const items = useSelector((state) =>
    selectFilteredProducts(state, searchValue)
  );
  const dispatch = useDispatch();
  dispatch(setInView(true));

  return (
    <>
      <div className={styles.container}>
        <BackButton />
        <Title size={TitleSizes.BIG}>Результаты поиска «{searchValue}»:</Title>
      </div>

      {items.length > 0 ? (
        <ProductsList items={items} />
      ) : (
        <div className={styles['not-found']}>
          Ничего не найдено, проверьте поисковую строку и попробуйте еще раз!
        </div>
      )}
    </>
  );
};

export default SearchPage;
