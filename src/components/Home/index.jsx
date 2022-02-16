import React from "react";
import Portada from "../../images/inicio.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="inicio">
      <Link to="/">
        <h1 className="produ">Home</h1>
      </Link>
      <Link to="/products">
        <h1 className="produ">Products</h1>
      </Link>
      <img src={Portada} alt="" />
    </div>
  );
};
