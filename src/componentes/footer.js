import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon

} from "react-share";



const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>¡Contacta con nosotros!</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:691548336">691 548 336</a>
                        </div>
                        <div className="d-flex">
                            <p>hola@rvstudios.es</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                        <div className="col">
                                <a className="footer-nav">Inicio</a>
                                <br/>
                                <a className="footer-nav">Sobre nosotros</a>
                                <br/>
                                <a className="footer-nav">Servicios</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacto</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://rvstudios.es"}
                                quote={"Marketing Digital y Desarrollo web"}
                                hashtag="#desarrolloWeb"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://rvstudios.es"}
                                quote={"Marketing Digital y Desarrollo web"}
                                hashtag="#desarrolloWeb"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <EmailShareButton
                                url={"https://rvstudios.es"}
                                quote={"Marketing Digital y Desarrollo web"}
                                hashtag="#desarrolloWeb"
                            >
                                <EmailIcon className="mx-3" size={36}/>
                            </EmailShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;RVStudios | Todos los derechos reservados
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer