import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '../home/Home';
import Basket from '../basket/Basket';
import Wish from '../wish/Wish';
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
