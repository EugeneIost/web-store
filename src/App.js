import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import { fetchCategories, fetchItems } from '@/store/products/effects';

import Layout from './components/layout/Layout';

import CategoryPage from './pages/CategoryPage/CategoryPage';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import SearchPage from './pages/SearchPage/SearchPage';
import { setInView } from './store/reducers/carouselObserverSlice';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCategories());
  }, [dispatch, location]);

  useEffect(() => {
    dispatch(setInView(true));
    history.scrollRestoration = 'manual';
  }, [location, dispatch]);

  return (
    <Routes>
      <Route path="/web-store" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/web-store/search/:searchValue" element={<SearchPage />} />
        <Route path="/web-store/:category" element={<CategoryPage />} />
        <Route
          path="/web-store/:category/:id"
          element={<ProductDetailsPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
