import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacto = () => {

    const [sucessMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_wqvaobd";
    const templateID = "template_x0yc11k";
    const userID = "user_Y1NXuqBbXSj0BTdA8kb4E";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                telefono: data.telefono,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }


    const sendEmail = (serviceID, templateID, variables, userID) => {

        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("¡Muchas gracias por el contacto! Le responderemos lo antes posible.")
            }).catch(err => console.error(`Algo ha ido mal... ${err}`));
    }




    return (
        <div id="contacto" className="contacts">
            <div className="text-center">
                <h1>¡Contacta con nosotros!</h1>
                <p>¡Cuéntanos tu proyecto y nos pondremos en contacto contigo lo mas rápido posible! </p>
                <span className="success-message">{sucessMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* Nombre */}
                            <div className="text-center">
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="name"
                                    ref={
                                        register({
                                            required: "Introduce tu nombre",
                                            maxLength: {
                                                value: 20,
                                                message: "Ups! Un máximo de 20 caracteres"

                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* Teléfono */}
                            <div className="text-center">
                                <input
                                    id="telefono"
                                    type="text"
                                    className="form-control"
                                    placeholder="Telefono"
                                    name="telefono"
                                    ref={
                                        register({
                                            required: "Introduce tu teléfono",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.telefono && errors.telefono.message}
                            </span>
                            {/* Email */}
                            <div className="text-center">
                                <input
                                    id="mail"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    ref={
                                        register({
                                            required: "Introduce tu email",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* subject */}
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Cuéntanos tu proyecto!"
                                    name="subject"
                                    ref={
                                        register({
                                            required: "Introduce el título de tu proyecto",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Descripcion */}
                            <div className="text-center">
                                <textarea
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripción"
                                    name="description"
                                    ref={
                                        register({
                                            required: "Introduce la descripción",
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn btn btn-info" type="submit">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacto