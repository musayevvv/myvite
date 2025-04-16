import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '../basketwish/home/Home';
import Basket from '../basketwish/basket/Basket';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Home />} />
          <Route path="basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
