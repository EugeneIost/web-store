import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectProductsByCategory } from '@/store/products/selectors';

import ProductsList from '../../components/ProductsList/ProductsList';
import BackButton from '../../components/UI/BackButton/BackButton';
import Title from '../../components/UI/Title/Title';

import styles from './CategoryPage.module.scss';

const CategoryPage = () => {
  const { category } = useParams();

  const products = useSelector((state) =>
    selectProductsByCategory(state, category)
  );

  return (
    <>
      <div className={styles.container}>
        <BackButton />
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
      </div>
      <ProductsList items={products} />
    </>
  );
};

export default CategoryPage;
