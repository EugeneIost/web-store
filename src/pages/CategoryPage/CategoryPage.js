import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsList from '../../components/ProductsList/ProductsList';
import BackButton from '../../components/UI/BackButton/BackButton';
import Title from '../../components/UI/Title/Title';
import { setInView } from '../../reducers/carouselObserverSlice';
import { selectProductsByCategory } from '../../reducers/productSlice';
import styles from './CategoryPage.module.scss';

const CategoryPage = () => {
  // DONE вынести фильтрацию в селектор
  const dispatch = useDispatch();
  dispatch(setInView(true));

  const { category } = useParams();
  const items = useSelector((state) =>
    selectProductsByCategory(state, category)
  );

  return (
    <>
      <div className={styles.container}>
        <BackButton />
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
      </div>
      <ProductsList items={items} />
    </>
  );
};

export default CategoryPage;
