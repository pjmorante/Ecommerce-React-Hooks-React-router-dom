import React, { useState, useEffect, createContext } from "react";
// import Data from "./Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const url = "https://fakestoreapi.com/products?limit=9";
    fetch(url)
      .then((response) => response.json())
      .then((products) => setProducts(products));
    console.log(products);
  };

  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alert("This product is already inserted");
    }
  };

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito")); //JSON.parse sirve para convertir el string dentro del localStorage
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  const value = {
    products: [products],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

// export const DataProvider = (props) => {
//   const [products, setProducts] = useState([]);
// const [menu, setMenu] = useState(false);
// const [carrito, setCarrito] = useState([]);

//   useEffect(() => {
//     const product = Data.items;

//     if (product) {
//       setProducts(product);
//     } else {
//       setProducts([]);
//     }
//   }, []);
// const addCarrito = (id) => {
//   const check = carrito.every((item) => {
//     return item.id !== id;
//   });
// };
//   const value = {
//     products: [products],
//     menu: [menu, setMenu],
//   };

//   return (
//     <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
//   );
// };
