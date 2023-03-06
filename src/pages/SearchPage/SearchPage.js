import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BackButton from "../../components/UI/BackButton/BackButton";
import { TitleSizes } from "../../components/UI/Title/constants/title-sizes";
import Title from "../../components/UI/Title/Title";
import ProductsList from "../../components/ProductsList";

import { selectFilteredProducts } from "../../reducers/productSlice";

import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  const { searchValue } = useParams();
  const items = useSelector((state) =>
    selectFilteredProducts(state, searchValue)
  );

  return (
    <>
      <div className={styles.container}>
        <BackButton />
        <Title size={TitleSizes.BIG}>Результаты поиска «{searchValue}»:</Title>
      </div>

      {items && <ProductsList items={items} />}
    </>
  );
};

export default SearchPage;
