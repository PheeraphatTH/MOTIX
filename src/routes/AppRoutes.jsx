import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ProductDetail } from '../pages/ProductDetail';
import { Categories } from '../pages/Categories';
import { Promotions } from '../pages/Promotions';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { FAQ } from '../pages/FAQ';
import { Wishlist } from '../pages/Wishlist';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Recommendations } from '../pages/Recommendations';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
