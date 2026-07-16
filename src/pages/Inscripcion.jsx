import { useEffect, useState } from "react";

import ModalConfirmacion from "../components/ModalConfirmacion";

const valoresIniciales = {
  nombre: "",
  correo: "",
  telefono: "",
  edad: "",
  plan: "",
  objetivo: "",
  terminos: false
};

function Inscripcion() {
  const [formulario, setFormulario] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [modalAbierto, setModalAbierto] = useState(false);
  const [registroConfirmado, setRegistroConfirmado] = useState(null);

  useEffect(() => {
    const planGuardado = localStorage.getItem("planSeleccionado");

    if (
      planGuardado === "Básico" ||
      planGuardado === "Full" ||
      planGuardado === "Premium"
    ) {
      setFormulario((formularioActual) => ({
        ...formularioActual,
        plan: planGuardado
      }));
    }
  }, []);

  function actualizarCampo(evento) {
    const { name, value, type, checked } = evento.target;

    let nuevoValor = type === "checkbox" ? checked : value;

    if (name === "telefono") {
      nuevoValor = value
        .replace(/\D/g, "")
        .slice(0, 9);
    }

    setFormulario((formularioActual) => ({
      ...formularioActual,
      [name]: nuevoValor
    }));

    setErrores((erroresActuales) => ({
      ...erroresActuales,
      [name]: ""
    }));
  }

  function validarFormulario() {
    const nuevosErrores = {};

    const regexNombre =
      /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/;

    const regexCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexTelefono =
      /^[0-9]{9}$/;

    const nombreLimpio = formulario.nombre.trim();
    const correoLimpio = formulario.correo.trim();
    const objetivoLimpio = formulario.objetivo.trim();
    const edadNumerica = Number(formulario.edad);

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

    if (formulario.telefono === "") {
      nuevosErrores.telefono =
        "Ingrese su número de teléfono.";
    } else if (!regexTelefono.test(formulario.telefono)) {
      nuevosErrores.telefono =
        "El teléfono debe contener exactamente 9 dígitos.";
    }

    if (formulario.edad === "") {
      nuevosErrores.edad = "Ingrese su edad.";
    } else if (edadNumerica < 14 || edadNumerica > 80) {
      nuevosErrores.edad =
        "La edad permitida está entre 14 y 80 años.";
    }

    if (formulario.plan === "") {
      nuevosErrores.plan = "Seleccione un plan.";
    }

    if (objetivoLimpio === "") {
      nuevosErrores.objetivo =
        "Ingrese su objetivo de entrenamiento.";
    } else if (objetivoLimpio.length < 10) {
      nuevosErrores.objetivo =
        "El objetivo debe tener al menos 10 caracteres.";
    }

    if (!formulario.terminos) {
      nuevosErrores.terminos =
        "Debe aceptar los términos y condiciones.";
    }

    return nuevosErrores;
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    const nuevosErrores = validarFormulario();

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      const primerCampoIncorrecto =
        Object.keys(nuevosErrores)[0];

      document
        .getElementById(primerCampoIncorrecto)
        ?.focus();

      return;
    }

    const datosRegistro = {
      nombre: formulario.nombre.trim(),
      correo: formulario.correo.trim(),
      telefono: formulario.telefono,
      edad: Number(formulario.edad),
      plan: formulario.plan,
      objetivo: formulario.objetivo.trim(),
      fecha: new Date().toISOString()
    };

    localStorage.setItem(
      "ultimaInscripcion",
      JSON.stringify(datosRegistro)
    );

    setRegistroConfirmado(datosRegistro);
    setModalAbierto(true);
  }

  function cerrarModal() {
    setModalAbierto(false);

    setFormulario(valoresIniciales);
    setErrores({});
    localStorage.removeItem("planSeleccionado");
  }

  return (
    <main className="pagina-inscripcion">

      <section className="inscripcion-encabezado">
        <div className="inscripcion-contenedor">

          <p className="inscripcion-etiqueta">
            Únete a IronFit
          </p>

          <h1>Comienza tu entrenamiento</h1>

          <p>
            Completa el formulario y nuestro equipo se comunicará contigo para
            confirmar tu inscripción.
          </p>

        </div>
      </section>

      <section className="inscripcion-seccion">
        <div className="inscripcion-contenedor inscripcion-distribucion">

          <div className="inscripcion-informacion">

            <h2>Transforma tus objetivos en resultados</h2>

            <p>
              Selecciona un plan, registra tus datos y recibe orientación para
              comenzar tu entrenamiento.
            </p>

            <ul>
              <li>
                <span aria-hidden="true">✓</span>
                Evaluación inicial
              </li>

              <li>
                <span aria-hidden="true">✓</span>
                Orientación profesional
              </li>

              <li>
                <span aria-hidden="true">✓</span>
                Instalaciones modernas
              </li>

              <li>
                <span aria-hidden="true">✓</span>
                Horarios flexibles
              </li>
            </ul>

            {formulario.plan && (
              <div
                className="plan-seleccionado-aviso"
                aria-live="polite"
              >
                <span>Plan seleccionado</span>
                <strong>{formulario.plan}</strong>
              </div>
            )}

          </div>

          <form
            className="formulario-inscripcion"
            onSubmit={enviarFormulario}
            noValidate
          >
            <h2>Formulario de inscripción</h2>

            <p className="formulario-indicacion">
              Los campos marcados con * son obligatorios.
            </p>

            <div className="formulario-campo">
              <label htmlFor="nombre">
                Nombre completo *
              </label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={actualizarCampo}
                autoComplete="name"
                aria-invalid={Boolean(errores.nombre)}
                aria-describedby="error-nombre"
              />

              <small
                id="error-nombre"
                className="formulario-error"
                aria-live="polite"
              >
                {errores.nombre}
              </small>
            </div>

            <div className="formulario-campo">
              <label htmlFor="correo">
                Correo electrónico *
              </label>

              <input
                type="email"
                id="correo"
                name="correo"
                value={formulario.correo}
                onChange={actualizarCampo}
                autoComplete="email"
                aria-invalid={Boolean(errores.correo)}
                aria-describedby="error-correo"
              />

              <small
                id="error-correo"
                className="formulario-error"
                aria-live="polite"
              >
                {errores.correo}
              </small>
            </div>

            <div className="formulario-dos-columnas">

              <div className="formulario-campo">
                <label htmlFor="telefono">
                  Teléfono *
                </label>

                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={actualizarCampo}
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength="9"
                  aria-invalid={Boolean(errores.telefono)}
                  aria-describedby="error-telefono"
                />

                <small
                  id="error-telefono"
                  className="formulario-error"
                  aria-live="polite"
                >
                  {errores.telefono}
                </small>
              </div>

              <div className="formulario-campo">
                <label htmlFor="edad">
                  Edad *
                </label>

                <input
                  type="number"
                  id="edad"
                  name="edad"
                  value={formulario.edad}
                  onChange={actualizarCampo}
                  min="14"
                  max="80"
                  aria-invalid={Boolean(errores.edad)}
                  aria-describedby="error-edad"
                />

                <small
                  id="error-edad"
                  className="formulario-error"
                  aria-live="polite"
                >
                  {errores.edad}
                </small>
              </div>

            </div>

            <div className="formulario-campo">
              <label htmlFor="plan">
                Plan *
              </label>

              <select
                id="plan"
                name="plan"
                value={formulario.plan}
                onChange={actualizarCampo}
                aria-invalid={Boolean(errores.plan)}
                aria-describedby="error-plan"
              >
                <option value="">
                  Seleccione un plan
                </option>

                <option value="Básico">
                  Básico
                </option>

                <option value="Full">
                  Full
                </option>

                <option value="Premium">
                  Premium
                </option>
              </select>

              <small
                id="error-plan"
                className="formulario-error"
                aria-live="polite"
              >
                {errores.plan}
              </small>
            </div>

            <div className="formulario-campo">
              <label htmlFor="objetivo">
                Objetivo de entrenamiento *
              </label>

              <textarea
                id="objetivo"
                name="objetivo"
                value={formulario.objetivo}
                onChange={actualizarCampo}
                placeholder="Ejemplo: mejorar mi resistencia y aumentar masa muscular"
                aria-invalid={Boolean(errores.objetivo)}
                aria-describedby="error-objetivo"
              />

              <small
                id="error-objetivo"
                className="formulario-error"
                aria-live="polite"
              >
                {errores.objetivo}
              </small>
            </div>

            <div className="formulario-campo formulario-terminos">

              <label htmlFor="terminos">
                <input
                  type="checkbox"
                  id="terminos"
                  name="terminos"
                  checked={formulario.terminos}
                  onChange={actualizarCampo}
                  aria-invalid={Boolean(errores.terminos)}
                  aria-describedby="error-terminos"
                />

                <span>
                  Acepto los términos y condiciones *
                </span>
              </label>

              <small
                id="error-terminos"
                className="formulario-error"
                aria-live="polite"
              >
                {errores.terminos}
              </small>

            </div>

            <button
              type="submit"
              className="boton-principal formulario-boton"
            >
              Registrar inscripción
            </button>

          </form>

        </div>
      </section>

      <ModalConfirmacion
        abierto={modalAbierto}
        nombre={registroConfirmado?.nombre || ""}
        plan={registroConfirmado?.plan || ""}
        onCerrar={cerrarModal}
      />

    </main>
  );
}

export default Inscripcion;