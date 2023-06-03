import React from 'react';
import './NavBar.css'; // Importa el archivo CSS
import CartWidget from '../CartWidget/CartWidget';
import EmailIcon from '@mui/icons-material/Email';


const NavBar = () => {
  return (
    <div >
      <div className="container"></div>
      <nav className="navbar ul"> {/* Utiliza la clase "navbar" del archivo CSS */}
        <ul>
        
        <li>
          <a href="https://www.google.com.ar/">PRODUCTOS</a>
        </li>
        <li>
          <a href="https://www.google.com.ar/">SALE</a>
        </li>
        <li>
           <a href="https://www.google.com/intl/es-419/gmail/about/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> 
              <EmailIcon/>
           </a>
        </li>
        <li>
          < CartWidget/>
        </li>
      
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
