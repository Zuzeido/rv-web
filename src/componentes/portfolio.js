import React from "react";
import jorge from "../imagenes/jorge.png";
import CEMU from "../imagenes/CEMU.png";


//FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//POPUP
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //Jorge
    const openPopupboxJorge = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={jorge} alt="" />
                <p></p>
                <b>Enlace:</b> <a className="hyper-link" onClick={() => window.open("https://recycledj.com")}>https://recycledj.com </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigJorge = {
        titleBar: {
            enable: true,
            text: "Página oficial Recycled J."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //CEMU
    const openPopupboxCEMU = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={CEMU} alt="" />
                <p></p>
                <b>Enlace:</b> <a className="hyper-link" onClick={() => window.open("https://colegiocemu.es/")}>https://colegiocemu.es/ </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCEMU = {
        titleBar: {
            enable: true,
            text: "Página para Colegio CEMU."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5 portfolio">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxJorge}>

                        <img className="portfolio-image" src={jorge} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxCEMU}>
                        <img className="portfolio-image" src={CEMU} alt="" />

                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>
                    {/* - */}
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={jorge} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>
                    {/* - */}
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={jorge} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigJorge} />
            <PopupboxContainer {...popupboxConfigCEMU} />
        </div>
    )
}

export default Portfolio