import { useEffect, useState } from "react";

const useCarousel = (slideWidth, length) => {
  const [offset, setOffset] = useState(0);
  const [pageSwitches, setPageSwitches] = useState([]);

  const switchPageClickHandler = (offset) => {
    setOffset((currentOffset) => {
      activePaginationToggle(currentOffset, false);
      activePaginationToggle(offset, true);
      return offset;
    });
  };

  useEffect(() => {
    const newPageSwitches = [];
    for (let i = 0; i < length; i++) {
      if (i === 0) {
        newPageSwitches.push({
          isActive: true,
          offset: 0,
          handlerFunc: switchPageClickHandler,
        });
      } else {
        newPageSwitches.push({
          isActive: false,
          offset: i * -slideWidth,
          handlerFunc: switchPageClickHandler,
        });
      }
    }
    setPageSwitches(newPageSwitches);
  }, [length]);

  // TODO сделать activeSlideIndex = useState(0); и менять его в функциях moveRight, moveLeft, onDotClick, и сравнивать index дота с activeSlideIndex для класса
  const activePaginationToggle = (offset, isActive) => {
    setPageSwitches((current) => {
      const activeSwitchIndex = current.findIndex((dot) => {
        return dot.offset === offset;
      });

      current[activeSwitchIndex].isActive = isActive;

      return current;
    });
  };

  const setMoveToNewSlide = (findSlideOffset) => {
    setOffset((currentOffset) => {
      activePaginationToggle(currentOffset, false);
      let newOffset = findSlideOffset(currentOffset, length);
      activePaginationToggle(newOffset, true);
      return newOffset;
    });
  };

  return {
    offset,
    pageSwitches,
    setMoveToNewSlide,
  };
};

export default useCarousel;
