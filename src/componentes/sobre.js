import React from "react";
import author from "../logo.png";
import SkillBar from 'react-skillbars';


const Sobre = () => {
    return (
        <div id="sobre" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">

                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="sobre-header">¿Quienes somos?</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ipsum vehicula, lacinia augue eget, euismod urna. Ut vehicula est tellus, at malesuada dolor fringilla id. Suspendisse blandit ante sed lorem auctor vehicula.
                     Aliquam erat volutpat. Nunc mattis, sem eu ultricies consequat, nisl augue auctor metus, et viverra lorem dui non felis. Nullam consectetur eu neque quis lobortis. Sed pulvinar tempor laoreet. Morbi lacinia nisi mauris, eu molestie libero molestie eu. 
                     Aenean cursus tortor sollicitudin, iaculis tortor ac, dapibus metus. Ut fermentum, ex non molestie semper, lacus diam ultrices nulla, id viverra dolor urna et sem. Aliquam eu metus neque.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Sobre