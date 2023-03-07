import { useEffect, useState, useCallback } from 'react';

const useCarousel = (slideWidth, length) => {
  const [offset, setOffset] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onDotClick = (index) => {
    setActiveSlideIndex(index);
    setOffset(-index * slideWidth);
  };

  const moveToLeft = () => {
    setOffset((currentOffset) => {
      if (currentOffset === 0) {
        setActiveSlideIndex(length - 1);
        return -slideWidth * (length - 1);
      }

      setActiveSlideIndex((current) => current - 1);
      return currentOffset + slideWidth;
    });
  };

  const moveToRight = useCallback(() => {
    setOffset((currentOffset) => {
      if (currentOffset === -slideWidth * (length - 1)) {
        setActiveSlideIndex(0);
        return 0;
      }

      setActiveSlideIndex((current) => current + 1);
      return currentOffset - slideWidth;
    });
  }, [length, slideWidth]);

  useEffect(() => {
    const timer = setTimeout(() => {
      moveToRight();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [offset, moveToRight]);

  return {
    offset,
    activeSlideIndex,
    moveToRight,
    moveToLeft,
    onDotClick,
  };
};

export default useCarousel;
