import React from "react";
import { Header } from "./components/Header";
import "boxicons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Pages } from "./Pages/Pages.jsx";
import { DataProvider } from "./components/context/DataProvider";
import { Carrito } from "./components/Carrito";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
