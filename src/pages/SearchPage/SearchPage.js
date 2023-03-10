import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectFilteredProducts } from '@/store/products/selectors';

import ProductsList from '../../components/ProductsList';
import BackButton from '../../components/UI/BackButton/BackButton';
import { TitleSizes } from '../../components/UI/Title/constants/title-sizes';
import Title from '../../components/UI/Title/Title';

import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const { searchValue } = useParams();
  const products = useSelector((state) =>
    selectFilteredProducts(state, searchValue)
  );

  return (
    <>
      <div className={styles.container}>
        <BackButton />
        <Title size={TitleSizes.BIG}>
          Результаты поиска <br />«{searchValue}»:
        </Title>
      </div>

      {products.length > 0 ? (
        <ProductsList items={products} />
      ) : (
        <div className={styles['not-found']}>
          Ничего не найдено, проверьте поисковую строку и попробуйте еще раз!
        </div>
      )}
    </>
  );
};

export default SearchPage;
