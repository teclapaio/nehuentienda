import "./NavBar.css";

import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/QuienesSomos">
          Quienes Somos
        </Link>
        <Link className="li" to="/contacto">
          Contacto
        </Link>
        <Link className="li" to="/categoria/User">
        User
        </Link>
        <Link className="li" to="/categoria/Organization">
        Organization
        </Link>

        <Link className="li" to="/carrito">
        <ShoppingCartIcon />
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
