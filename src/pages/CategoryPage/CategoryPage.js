import ProductsList from "../../components/ProductsList/ProductsList";
import Title from "../../components/UI/Title/Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CategoryPage.module.scss";
import BackButton from "../../components/UI/BackButton/BackButton";

const CategoryPage = () => {
  // TODO вынести фильтрацию в селектор
  const { category } = useParams();
  const items = useSelector((state) => {
    return state.products.items;
  });
  const [filteredItems, setfilteredItems] = useState([]);

  useEffect(() => {
    setfilteredItems(items.filter((item) => item.category === category));
  }, [category, items]);

  return (
    <>
      <div className={styles.container}>
        <BackButton />
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
      </div>
      <ProductsList items={filteredItems} />
    </>
  );
};

export default CategoryPage;
