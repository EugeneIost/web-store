import styles from "./Carousel.module.scss";
import arrow from "../../../assets/icons/left-arrow.png";
import useCarousel from "../../../hooks/use-carousel";
import React from "react";
import SlideCategory from "./SlideCategory";
import cn from "classnames";

const slideWidth = 100;

// DONE передалать children на prop slides
const Carousel = React.forwardRef(({ slides, clickSlideHandler }, ref) => {
  // DONE добавить onDotClick(index)
  const { offset, moveToLeft, moveToRight, activeSlideIndex, onDotClick } =
    useCarousel(slideWidth, slides.length);

  // DONE вынести в хук

  // DONE вынести в хук

  const leftArrowClickHandler = () => {
    // DONE Разделить на moveRight и moveLeft, и одинаковый код вынести в функцию над хуком (передать параметры)
    moveToLeft();
  };

  const rightArrowClickHandler = () => {
    moveToRight();
  };

  // DONE вынести в хук

  return (
    <div className={styles["main-container"]} ref={ref}>
      <img
        className={styles["arrow_left"]}
        src={arrow}
        alt="стрелка"
        onClick={leftArrowClickHandler}
      />
      <div className={styles.window}>
        <div
          className={styles["all-slides-container"]}
          style={{
            transform: `translateX(${offset}%)`,
          }}
        >
          {slides.map((slide) => (
            <SlideCategory
              key={slide.imageSrc}
              title={slide.title}
              imageSrc={slide.imageSrc}
              onClick={() => clickSlideHandler(slide.title)}
            />
          ))}
        </div>
      </div>
      <img
        className={styles["arrow_right"]}
        src={arrow}
        alt="стрелка"
        onClick={rightArrowClickHandler}
      />
      <div className={styles.dots}>
        {/* DONE не по pageSwitches а по slides */}
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            // DONE classnames
            className={cn(styles.dots__dot, {
              [styles.dots__dot_active]: index === activeSlideIndex,
            })}
            // DONE изменить на onDotClick
            onClick={() => {
              onDotClick(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
});

export default Carousel;
