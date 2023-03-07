import React from 'react';
import cn from 'classnames';
import styles from './Carousel.module.scss';
import arrow from '../../../assets/icons/left-arrow.png';
import useCarousel from '../../../hooks/use-carousel';
import SlideCategory from './SlideCategory';

const slideWidth = 100;

const Carousel = ({ slides, clickSlideHandler }, ref) => {
  const { offset, activeSlideIndex, moveToLeft, moveToRight, onDotClick } =
    useCarousel(slideWidth, slides.length);

  const leftArrowClickHandler = () => {
    moveToLeft();
  };

  const rightArrowClickHandler = () => {
    moveToRight();
  };

  return (
    <div className={styles['main-container']} ref={ref}>
      <img
        className={styles.arrow_left}
        src={arrow}
        alt="стрелка"
        onClick={leftArrowClickHandler}
      />

      <div className={styles.window}>
        <div
          className={styles['all-slides-container']}
          style={{
            transform: `translateX(${offset}%)`,
          }}
        >
          {slides.map((slide) => (
            <SlideCategory
              key={slide.title}
              title={slide.title}
              imageSrc={slide.imageSrc}
              onClick={() => clickSlideHandler(slide.title)}
            />
          ))}
        </div>
      </div>

      <img
        className={styles.arrow_right}
        src={arrow}
        alt="стрелка"
        onClick={rightArrowClickHandler}
      />

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={cn(styles.dots__dot, {
              [styles.dots__dot_active]: index === activeSlideIndex,
            })}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default React.forwardRef(Carousel);
