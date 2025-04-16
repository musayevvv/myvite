import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '../basketwish/home/Home';
import Basket from '../basketwish/basket/Basket';
import Wish from '../basketwish/wish/Wish';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wish" element={<Wish />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
