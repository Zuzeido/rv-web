import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";



// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-naranja fixed-top">
    <div className="container"> 
  <Link smooth={true} className="navbar-brand" href="#"><img className="logo" src={logo} alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="sobre" offset={-110} className="nav-link fa-camera" href="#" >Sobre nosotros</Link>
      </li>
        <li className="nav-item">
            <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">servicios</Link>
        </li>
        <li className="nav-item">
            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
        </li>
        <li className="nav-item">
            <Link smooth={true} to="contacto" offset={-110} className="nav-link" href="#">contacto</Link>
        </li>
    </ul>

  </div>
  </div>
</nav>
    )
}

export default Navbar