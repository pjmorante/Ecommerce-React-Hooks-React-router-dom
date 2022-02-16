import React, { useContext } from "react";
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;
  const toogleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Nike} alt="" width="150px" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{carrito.length}</span>
      </div>
    </header>
  );
};
