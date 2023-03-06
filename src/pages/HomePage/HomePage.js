import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ProductsList from "../../components/ProductsList";
import Carousel from "../../components/UI/Carousel/Carousel";
import SlideCategory from "../../components/UI/Carousel/SlideCategory";
import Title from "../../components/UI/Title";
import { TitleSizes } from "../../components/UI/Title/constants/title-sizes";

import { setInView } from "../../reducers/carouselObserverSlice";

const Home = () => {
  const categories = useSelector((state) => state.products.categories);
  const items = useSelector((state) => state.products.items);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    dispatch(setInView(inView));
  }, [inView]);

  const clickSlideHandler = (title) => {
    navigate(`/${title}`);
  };

  return (
    <React.Fragment>
      <Carousel ref={ref}>
        {categories.map((category, index) => {
          return (
            <SlideCategory
              key={index}
              index={index}
              // TODO Убрать uppercase и перенести в css
              title={category.toUpperCase()}
              onClick={() => clickSlideHandler(category)}
            />
          );
        })}
      </Carousel>
      <Title size={TitleSizes.BIG}>Все товары</Title>
      <ProductsList items={items} />
    </React.Fragment>
  );
};

export default Home;
