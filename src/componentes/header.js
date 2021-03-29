import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Eleva tu negocio, desarrollamos para ti</h1>
                <Typed 
                className="typed-text"
                strings={["Diseño web", "Diseño grafico", "Posicionamiento SEO"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main">¡Contacta con nosotros!</a>
            </div>
        </div>
    )
}

export default Header;