import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
  // Definimos el estado inicial del formulario usando useState.
  // Este estado guarda los valores de los campos del formulario.
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  // Función para manejar cambios en los campos del formulario.
  // Se ejecuta cada vez que el usuario escribe en un campo del formulario.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [confirmada, setConfirmada] = useState(false); // para que inicie en falso el mensaje de confirmada

  const confirmacionClic = () => {
    /* cambia la confirmada a true */
    setConfirmada(true);
  };

  // Función para manejar el envío del formulario.
  // Se ejecuta cuando el usuario envía el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).
    console.log("Form data submitted:", formData); // Imprime los datos del formulario en la consola.
    // alert("consulta enviada, gracias por su aporte"); // Muestra una alerta indicando que el formulario fue enviado.
    confirmacionClic(); // va aqui el clic, por que? ni perra
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
                        name="nombre" // Asocia este textarea con el campo "nombre" en el estado
                        value={formData.nombre} // Vincula el valor del textarea con el estado actual.
                        onChange={handleChange} // // Actualiza el estado cuando el usuario escribe.
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
                <h2>Consulta enviada, gracias por su aporte.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contenido2">
        <div className="mensajito">
          <h2>Sobre nosotros</h2>
          <p>
            Somos un equipo de desarrolladores que participó en el bootcamp de
            Generation Chile, donde trabajamos arduamente para completar este
            proyecto. Nos motiva profundamente el deseo de ayudar a la comunidad
            y mejorar la transparencia en el sector farmacéutico. Por ello,
            hemos creado una aplicación web diseñada para facilitar la
            comparación de precios de medicamentos entre diferentes farmacias de
            la comuna de Santiago, Chile.
            <p>
              Nuestra visión es proporcionar una plataforma que no solo
              beneficie a los usuarios, permitiéndoles encontrar la mejor opción
              para sus necesidades, sino también dar visibilidad a las farmacias
              más pequeñas, que a menudo pasan desapercibidas. Creemos que todos
              merecen acceso a medicamentos asequibles y de calidad, y nuestra
              herramienta busca hacer precisamente eso.
            </p>{" "}
            <p>
              Invitamos a todos los usuarios a sumarse a nuestra comunidad,
              utilizando la aplicación para ahorrar en sus compras de
              medicamentos y mejorar su bienestar. Asimismo, extendemos una
              cálida invitación a las farmacias interesadas en unirse a nuestra
              base de datos, para que juntos podamos ofrecer una alternativa más
              justa y accesible para todos. ¡Únete a nosotros y se parte del
              cambio hacia un sistema de salud más inclusivo y eficiente!
            </p>{" "}
            <p>Autores del Proyecto: </p>
            <p>Fabián Torres - Gonzalo Pavez - Ignacio Morales - Jett Puga</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
