import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { ProductItem } from "./ProductItem";

export const ProductDetail = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCarrito = value.addCarrito;
  const [detail, setDetail] = useState([]);
  const params = useParams();
  let item = 0;

  useEffect(() => {
    products.forEach((product) => {
      item = 0;
      if (product.id === parseInt(params.id)) {
        setDetail(product);
      }
    });
  }, [params.id, products]);

  return (
    <>
      <div className="detalles">
        <h2>{detail.title}</h2>
        <p className="price">${detail.price}</p>
        <div className="grid">
          <p className="nuevo">Nuevo</p>
          <div className="tamano">
            <select placeholder="Size">
              <option value="1"></option>
              <option value="1">XS</option>
              <option value="1">S</option>
              <option value="1">M</option>
              <option value="1">L</option>
              <option value="1">XL</option>
              <option value="1">XXL</option>
              {/* <option value="1">7</option>
              <option value="1">8</option>
              <option value="1">9</option> */}
            </select>
            <p>Size</p>
          </div>
        </div>
        <button onClick={() => addCarrito(detail.id)}>Buy</button>
        <img src={detail.image} alt={detail.title} />
        <input type="range" min="1" max="36" />
        <div className="description">
          <b>Description</b>
          <p>{detail.description}</p>
        </div>
      </div>
      <h2 className="relacionados">Productos relacionados</h2>
      <div className="productos">
        {products.map((product) => {
          if (item < 6 && detail.category === product.category) {
            item++;
            return (
              <ProductItem
                key={product.id}
                title={product.title}
                image={product.image}
                category={product.category}
                price={product.price}
                id={product.id}
              />
            );
          }
        })}
      </div>
    </>
  );
};
