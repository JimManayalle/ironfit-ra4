import { useState } from "react";

const valoresIniciales = {
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: ""
};

function Contacto() {
  const [formulario, setFormulario] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");

  function actualizarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario((formularioActual) => ({
      ...formularioActual,
      [name]: value
    }));

    setErrores((erroresActuales) => ({
      ...erroresActuales,
      [name]: ""
    }));

    setMensajeExito("");
  }

  function validarFormulario() {
    const nuevosErrores = {};

    const nombreLimpio = formulario.nombre.trim();
    const correoLimpio = formulario.correo.trim();
    const asuntoLimpio = formulario.asunto.trim();
    const mensajeLimpio = formulario.mensaje.trim();

    const regexNombre =
      /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/;

    const regexCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombreLimpio === "") {
      nuevosErrores.nombre = "Ingrese su nombre completo.";
    } else if (nombreLimpio.length < 3) {
      nuevosErrores.nombre =
        "El nombre debe tener al menos 3 caracteres.";
    } else if (!regexNombre.test(nombreLimpio)) {
      nuevosErrores.nombre =
        "El nombre solo puede contener letras y espacios.";
    }

    if (correoLimpio === "") {
      nuevosErrores.correo =
        "Ingrese su correo electrónico.";
    } else if (!regexCorreo.test(correoLimpio)) {
      nuevosErrores.correo =
        "Ingrese un correo electrónico válido.";
    }

    if (asuntoLimpio === "") {
      nuevosErrores.asunto = "Seleccione un asunto.";
    }

    if (mensajeLimpio === "") {
      nuevosErrores.mensaje = "Ingrese su consulta.";
    } else if (mensajeLimpio.length < 15) {
      nuevosErrores.mensaje =
        "La consulta debe tener al menos 15 caracteres.";
    } else if (mensajeLimpio.length > 500) {
      nuevosErrores.mensaje =
        "La consulta no debe superar los 500 caracteres.";
    }

    return nuevosErrores;
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    const nuevosErrores = validarFormulario();

    setErrores(nuevosErrores);
    setMensajeExito("");

    if (Object.keys(nuevosErrores).length > 0) {
      const primerCampoIncorrecto =
        Object.keys(nuevosErrores)[0];

      document
        .getElementById(`contacto-${primerCampoIncorrecto}`)
        ?.focus();

      return;
    }

    setEnviando(true);

    const consulta = {
      nombre: formulario.nombre.trim(),
      correo: formulario.correo.trim(),
      asunto: formulario.asunto,
      mensaje: formulario.mensaje.trim(),
      fecha: new Date().toISOString()
    };

    /*
      Simulación del envío de la consulta.
      Por ahora se almacena en localStorage.
    */
    setTimeout(() => {
      localStorage.setItem(
        "ultimaConsultaContacto",
        JSON.stringify(consulta)
      );

      setEnviando(false);

      setMensajeExito(
        "Tu consulta fue registrada correctamente. Te responderemos lo antes posible."
      );

      setFormulario(valoresIniciales);
      setErrores({});
    }, 800);
  }

  return (
    <main className="pagina-contacto">

      <section className="contacto-encabezado">

        <div className="contacto-contenedor">

          <p className="contacto-etiqueta">
            Estamos para ayudarte
          </p>

          <h1>Comunícate con IronFit Gym</h1>

          <p>
            Resuelve tus dudas sobre planes, clases, horarios e inscripciones
            mediante nuestros canales de atención.
          </p>

        </div>

      </section>

      <section className="contacto-seccion">

        <div className="contacto-contenedor contacto-distribucion">

          <div className="contacto-informacion">

            <h2>Información de contacto</h2>

            <address>

              <article className="contacto-dato">
                <span aria-hidden="true">📍</span>

                <div>
                  <h3>Dirección</h3>
                  <p>Av. Energía 123, Chiclayo, Perú</p>
                </div>
              </article>

              <article className="contacto-dato">
                <span aria-hidden="true">📞</span>

                <div>
                  <h3>Teléfono</h3>

                  <a href="tel:+51987654321">
                    +51 987 654 321
                  </a>
                </div>
              </article>

              <article className="contacto-dato">
                <span aria-hidden="true">✉️</span>

                <div>
                  <h3>Correo electrónico</h3>

                  <a href="mailto:contacto@ironfitgym.pe">
                    contacto@ironfitgym.pe
                  </a>
                </div>
              </article>

              <article className="contacto-dato">
                <span aria-hidden="true">🕒</span>

                <div>
                  <h3>Horario de atención</h3>

                  <p>
                    Lunes a viernes: 6:00 a. m. – 10:00 p. m.
                  </p>

                  <p>
                    Sábados y domingos: 7:00 a. m. – 8:00 p. m.
                  </p>
                </div>
              </article>

            </address>

          </div>

          <form
            className="formulario-contacto"
            onSubmit={enviarFormulario}
            noValidate
          >

            <h2>Envíanos una consulta</h2>

            <p className="contacto-indicacion">
              Los campos marcados con * son obligatorios.
            </p>

            <div className="contacto-campo">

              <label htmlFor="contacto-nombre">
                Nombre completo *
              </label>

              <input
                type="text"
                id="contacto-nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={actualizarCampo}
                autoComplete="name"
                aria-invalid={Boolean(errores.nombre)}
                aria-describedby="contacto-error-nombre"
              />

              <small
                id="contacto-error-nombre"
                className="contacto-error"
                aria-live="polite"
              >
                {errores.nombre}
              </small>

            </div>

            <div className="contacto-campo">

              <label htmlFor="contacto-correo">
                Correo electrónico *
              </label>

              <input
                type="email"
                id="contacto-correo"
                name="correo"
                value={formulario.correo}
                onChange={actualizarCampo}
                autoComplete="email"
                aria-invalid={Boolean(errores.correo)}
                aria-describedby="contacto-error-correo"
              />

              <small
                id="contacto-error-correo"
                className="contacto-error"
                aria-live="polite"
              >
                {errores.correo}
              </small>

            </div>

            <div className="contacto-campo">

              <label htmlFor="contacto-asunto">
                Asunto *
              </label>

              <select
                id="contacto-asunto"
                name="asunto"
                value={formulario.asunto}
                onChange={actualizarCampo}
                aria-invalid={Boolean(errores.asunto)}
                aria-describedby="contacto-error-asunto"
              >
                <option value="">
                  Seleccione un asunto
                </option>

                <option value="Información sobre planes">
                  Información sobre planes
                </option>

                <option value="Horarios de clases">
                  Horarios de clases
                </option>

                <option value="Proceso de inscripción">
                  Proceso de inscripción
                </option>

                <option value="Sugerencias">
                  Sugerencias
                </option>

                <option value="Otro">
                  Otro
                </option>
              </select>

              <small
                id="contacto-error-asunto"
                className="contacto-error"
                aria-live="polite"
              >
                {errores.asunto}
              </small>

            </div>

            <div className="contacto-campo">

              <label htmlFor="contacto-mensaje">
                Consulta *
              </label>

              <textarea
                id="contacto-mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={actualizarCampo}
                maxLength="500"
                placeholder="Escribe tu consulta"
                aria-invalid={Boolean(errores.mensaje)}
                aria-describedby="contacto-error-mensaje contacto-contador"
              />

              <div className="contacto-ayuda">

                <small
                  id="contacto-error-mensaje"
                  className="contacto-error"
                  aria-live="polite"
                >
                  {errores.mensaje}
                </small>

                <small id="contacto-contador">
                  {formulario.mensaje.length}/500
                </small>

              </div>

            </div>

            <button
              type="submit"
              className="boton-principal contacto-boton"
              disabled={enviando}
            >
              {enviando
                ? "Enviando consulta..."
                : "Enviar consulta"}
            </button>

            {mensajeExito && (
              <div
                className="contacto-exito"
                role="status"
                aria-live="polite"
              >
                <span aria-hidden="true">✓</span>
                <p>{mensajeExito}</p>
              </div>
            )}

          </form>

        </div>

      </section>

      <section className="contacto-preguntas">

        <div className="contacto-contenedor">

          <h2>Preguntas frecuentes</h2>

          <div className="preguntas-lista">

            <details>
              <summary>
                ¿Necesito experiencia previa para inscribirme?
              </summary>

              <p>
                No. Contamos con opciones para principiantes, intermedios y
                personas con experiencia.
              </p>
            </details>

            <details>
              <summary>
                ¿Puedo cambiar de plan posteriormente?
              </summary>

              <p>
                Sí. Puedes solicitar el cambio de plan comunicándote con el
                personal de atención.
              </p>
            </details>

            <details>
              <summary>
                ¿Las clases grupales requieren reserva?
              </summary>

              <p>
                Algunas clases tienen capacidad limitada, por lo que se
                recomienda realizar una reserva anticipada.
              </p>
            </details>

            <details>
              <summary>
                ¿El gimnasio atiende los fines de semana?
              </summary>

              <p>
                Sí. Los sábados y domingos atendemos desde las 7:00 a. m. hasta
                las 8:00 p. m.
              </p>
            </details>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contacto;