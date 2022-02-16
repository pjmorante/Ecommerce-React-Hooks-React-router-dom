import React, { useContext } from "react";

import { DataContext } from "../context/DataProvider";
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <>
      <h1 className="produ">PRODUCTS</h1>
      <div className="productos">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            // quantity={product.rating}
          />
        ))}
      </div>
    </>
  );
};
