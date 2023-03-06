import styles from "./Carousel.module.scss";
import { useState, useEffect, Children, cloneElement } from "react";
import arrow from "../../../assets/icons/left-arrow.png";
import useCarousel from "../../../hooks/use-carousel";
import React from "react";

const slideWidth = 100;

// TODO передалать children на prop slides
const Carousel = React.forwardRef(({ children }, ref) => {
  const [slides, setSlides] = useState([]);
  // TODO добавить onDotClick(index)
  const { offset, pageSwitches, setMoveToNewSlide } = useCarousel(
    slideWidth,
    children.length
  );

  useEffect(() => {
    setSlides(children);
  }, [children]);

  // TODO вынести в хук
  const moveRight = (currentOffset, length) => {
    let newOffset;
    if (currentOffset <= -slideWidth * (length - 1)) {
      return (newOffset = 0);
    }
    return (newOffset = currentOffset - slideWidth);
  };

  // TODO вынести в хук
  const moveLeft = (currentOffset, length) => {
    let newOffset;
    if (currentOffset >= 0) {
      return (newOffset = -slideWidth * (length - 1));
    }
    return (newOffset = currentOffset + slideWidth);
  };

  const leftArrowClickHandler = () => {
    // TODO Разделить на moveRight и moveLeft, и одинаковый код вынести в функцию над хуком (передать параметры)
    setMoveToNewSlide(moveLeft);
  };

  const rightArrowClickHandler = () => {
    setMoveToNewSlide(moveRight);
  };

  // TODO вынести в хук
  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveToNewSlide(moveRight);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [offset]);

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
          {slides}
        </div>
      </div>
      <img
        className={styles["arrow_right"]}
        src={arrow}
        alt="стрелка"
        onClick={rightArrowClickHandler}
      />
      <div className={styles.dots}>
        {/* TODO не по pageSwitches а по slides */}
        {pageSwitches.map((dot, index) => (
          <button
            key={dot.offset}
            // TODO classnames
            className={
              dot.isActive
                ? `${styles["dots__dot"]} ${styles["dots__dot_active"]}`
                : styles["dots__dot"]
            }
            // TODO изменить на onDotClick
            onClick={dot.handlerFunc.bind(undefined, dot.offset)}
          ></button>
        ))}
      </div>
    </div>
  );
});

export default Carousel;
