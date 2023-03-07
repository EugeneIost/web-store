import { useEffect, useState } from "react";

const useCarousel = (slideWidth, length) => {
  const [offset, setOffset] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // DONE сделать activeSlideIndex = useState(0); и менять его в функциях moveRight, moveLeft, onDotClick, и сравнивать index дота с activeSlideIndex для класса

  const onDotClick = (index) => {
    setActiveSlideIndex(index);
    setOffset(-index * slideWidth);
  };

  const moveToLeft = () => {
    setOffset((currentOffset) => {
      let newOffset;
      if (currentOffset === 0) {
        setActiveSlideIndex(length - 1);
        return (newOffset = -slideWidth * (length - 1));
      } else {
        setActiveSlideIndex((current) => current - 1);
        return (newOffset = currentOffset + slideWidth);
      }
    });
  };

  const moveToRight = () => {
    setOffset((currentOffset) => {
      let newOffset;
      if (currentOffset === -slideWidth * (length - 1)) {
        setActiveSlideIndex(0);
        return (newOffset = 0);
      } else {
        setActiveSlideIndex((current) => current + 1);
        return (newOffset = currentOffset - slideWidth);
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      moveToRight;
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [offset]);

  return {
    offset,
    moveToRight,
    moveToLeft,
    activeSlideIndex,
    onDotClick,
  };
};

export default useCarousel;
