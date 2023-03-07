import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./components/layout/Layout";
import { fetchItems, fetchCategories } from "./reducers/productSlice";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCategories());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search/:searchValue" element={<SearchPage />} />
        <Route path=":category" element={<CategoryPage />} />
        <Route path=":category/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
