import { createSelector } from '@reduxjs/toolkit';

import menImage from 'Assets/img/men.png';
import womenImage from 'Assets/img/women.png';
import electronicsImage from 'Assets/img/electronic.png';
import jeweleryImage from 'Assets/img/jewelery.png';

const categoryImages = {
  "men's clothing": menImage,
  "women's clothing": womenImage,
  electronics: electronicsImage,
  jewelery: jeweleryImage,
};

export const selectCategoriesWithImages = (state) => {
  return state.products.categories.reduce((slides, category) => {
    if (category in categoryImages) {
      slides.push({
        title: category,
        imageSrc: categoryImages[category],
      });
    }

    return slides;
  }, []);
};

export const selectProductById = createSelector(
  [(state) => state.products.items, (_state, id) => id],
  (items, id) => {
    return items.find((item) => item.id === id);
  }
);

export const selectProductsByCategory = createSelector(
  [(state) => state.products.items, (_state, category) => category],
  (products, category) => {
    return products.filter((item) => item.category === category);
  }
);

export const selectFilteredProducts = createSelector(
  [(state) => state.products.items, (_state, searchValue) => searchValue],
  (products, searchValue) => {
    if (!searchValue) {
      return [];
    }

    return products.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.includes(searchValue.toLowerCase())
      );
    });
  }
);
