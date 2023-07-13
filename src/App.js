import React, { Component } from "react";
import './App.css';
// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MiTienda from './components/MiTienda';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// pages
import ContactoPage from "./Pages/ContactoPage/ContactoPage";
import HomePage from "./Pages/HomePage/HomePage";
import QuienesSomosPage from "./Pages/QuienesSomosPage/QuienesSomosPage";
import ItemPage from "./Pages/ItemPage/ItemPage";
import CategoriaPage from "./Pages/CategoriaPage/CategoriaPage";
import CarritoPage from "./Pages/CarritoPage/CarritoPage";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
        <MiTienda
          titulo="INFOIBOOKTEACH"
          subtitulo="Conseguí iBooks de estos autores"
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/QuienesSomos" element={<QuienesSomosPage />} />
          <Route path="/Item/:id" element={<ItemPage />} />
          <Route path="/categoria/:categoriaId" element={<CategoriaPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          </Routes>
<<<<<<< HEAD
        { <div className="Cards-Container">
        <CardList />
      </div> }
=======
        {/* <div className="Cards-Container">
        <CardList />
      </div> */}
>>>>>>> 568bbe647ec2ea9a82f722b802fa390072c8897f
      
        <ItemListContainer greeting="Gracias por visitar nuestra página"/> 
      </div>
      </Router>
    );
  }
}

export default App;
