import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ProductsList from "../../components/ProductsList";
import Carousel from "../../components/UI/Carousel/Carousel";
import SlideCategory from "../../components/UI/Carousel/SlideCategory";
import Title from "../../components/UI/Title";
import { TitleSizes } from "../../components/UI/Title/constants/title-sizes";
import { selectCategoriesWithImages } from "../../reducers/productSlice";

import { setInView } from "../../reducers/carouselObserverSlice";

import styles from "./HomePage.module.scss";

const Home = () => {
  const categories = useSelector((state) => state.products.categories);
  const items = useSelector((state) => state.products.items);
  const slides = useSelector((state) => selectCategoriesWithImages(state));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    dispatch(setInView(inView));
  }, [inView]);

  const clickSlideHandler = (title) => {
    navigate(`/${title}`);
  };

  return (
    <React.Fragment>
      <Carousel
        ref={ref}
        slides={slides}
        clickSlideHandler={clickSlideHandler}
      />
      <div className={styles.title}>
        <Title size={TitleSizes.BIG}>Все товары</Title>
      </div>
      <ProductsList items={items} />
    </React.Fragment>
  );
};

export default Home;
