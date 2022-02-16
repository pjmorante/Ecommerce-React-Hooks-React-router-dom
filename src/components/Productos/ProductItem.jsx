import React, { useContext } from "react";
import IMG from "../../images/img01.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export const ProductItem = ({ id, title, price, image, category, rating }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  return (
    <div className="producto">
      <Link to={`/product/${id}`}>
        <div className="producto_img">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="producto_footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price}</p>
      </div>
      <div className="buttom">
        <button className="btn" onClick={() => addCarrito(id)}>
          Add
        </button>
        <div>
          <Link to={`/product/${id}`} className="btn">
            Go To Detail
          </Link>
        </div>
      </div>
    </div>
  );
};
