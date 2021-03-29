import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faPencilRuler, faPalette, faMagic } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Nuestros servicios </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faPencilRuler} size="2x"/></div>
                                <h3>Diseño Web</h3>
                                <p>Diseño web a medida. Orientamos nuestros conocimientos a tu marca.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                <h3>Desarrollo Web</h3>
                                <p>Nos encargamos de todo el desarrollo. E-commerce, Blog, Institucional, Colegios etc</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faMagic} size="2x"/></div>
                                <h3>SEO / SEM</h3>
                                <p>Hacemos que tu marca sea visible, mediante nuestras estrategias de Digital Marketing</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faPalette} size="2x"/></div>
                                <h3>Diseño Gráfico</h3>
                                <p>Desde el diseño de un logo, a todo el Branding completo de tu empresa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
    )
}

export default Services