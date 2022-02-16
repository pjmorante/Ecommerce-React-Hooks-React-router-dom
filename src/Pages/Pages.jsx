import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsList } from "../components/Productos";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { ProductDetail } from "../components/Productos/ProductDetail";

export const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<ProductsList />} />
        <Route path="/product/:id" exact element={<ProductDetail />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </section>
  );
};
