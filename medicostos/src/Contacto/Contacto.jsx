import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const [confirmada, setConfirmada] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const confirmacionClic = () => {
    setConfirmada(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).

    emailjs
      .send(
        "service_sx1exjf", // Reemplaza con tu Service ID
        "template_fil95n9", // Reemplaza con tu Template ID
        formData,
        "98u0wS5siZu56Tylr" // Reemplaza con tu User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          confirmacionClic(); // Muestra el mensaje de confirmación
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="todo">
      <div className="contenido">
        <div className="contenidoFormulario">
          <div className="titulo">
            <h1>Contactanos</h1>
            <p>Ingresa tu consulta</p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="ayNoSe">
                <div className="inputs">
                  <div className="nombreApellido">
                    <p>
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <label htmlFor="apellido">Apellido</label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                      />
                    </p>
                  </div>
                  <p>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label htmlFor="mensaje">Tu mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </p>
                </div>
                <div className="enviar">
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
            {confirmada && (
              <div className="confirmacion">
                <h2>Consulta enviada, gracias por su aporte</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contenido2">
        <div className="mensajito">
          <h2>Sobre nosotros</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
