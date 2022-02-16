import React, { useContext } from "react";
import Card from "../../images/img03.jpg";
import { DataContext } from "../context/DataProvider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const toogleFalse = () => {
    setMenu(false);
  };
  const show = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const reduce = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
      setCarrito([...carrito]);
    });
  };

  const increase = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });

      setCarrito([...carrito]);
    }
  };
  return (
    <div className={show}>
      <div className={show2}>
        <div onClick={toogleFalse} className="carrito_close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>

        <div className="carrito_center">
          {carrito.length === 0 ? (
            <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Empty Car</h2>
          ) : (
            <>
              {carrito.map((product) => (
                <div className="carrito_item" key={product.id}>
                  <img src={product.image} alt="" />
                  <div>
                    <h3>{product.title}</h3>
                    <p className="price">${product.price}</p>
                  </div>
                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => increase(product.id)}
                    ></box-icon>
                    <p className="cantidad">{product.quantity}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => reduce(product.id)}
                    ></box-icon>
                  </div>
                  <div
                    className="remove_item"
                    onClick={() => removeProduct(product.id)}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="carrito_footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
};
