import { Link } from "react-router-dom";
import Logo from "../assets/White Logo-noBg.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar-logo" />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;