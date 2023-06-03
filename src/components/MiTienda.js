import React from "react";
import "./MiTienda.css";
import logo from "./Logo tienda Nehuen.png"
const MiTienda = (props) => {
  return (
    <div className = "Estilo">
        
        <h1>{props.titulo}</h1> 
        <img src={logo} alt="logo-tienda" style={{ width: '100px', float: 'left', marginLeft: '3px' }} />
       <h3>{props.subtitulo}</h3>

    </div>
  );
}

export default MiTienda