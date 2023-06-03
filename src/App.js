import React, { Component } from "react";
import './App.css';
import MiTienda from './components/MiTienda';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MiTienda
          titulo="NEHUEN"
          subtitulo="COLECCIÓN 2023"
        />
        <NavBar />
        <ItemListContainer greeting="Gracias por visitar nuestra página"/> 
      </div>
    );
  }
}

export default App;
