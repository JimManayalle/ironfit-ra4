import { useEffect, useRef } from "react";

function ModalConfirmacion({
  abierto,
  nombre,
  plan,
  onCerrar
}) {
  const botonCerrar = useRef(null);

  useEffect(() => {
    if (!abierto) {
      return undefined;
    }

    botonCerrar.current?.focus();
    document.body.style.overflow = "hidden";

    function cerrarConEscape(evento) {
      if (evento.key === "Escape") {
        onCerrar();
      }
    }

    document.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", cerrarConEscape);
    };
  }, [abierto, onCerrar]);

  if (!abierto) {
    return null;
  }

  function cerrarDesdeFondo(evento) {
    if (evento.target === evento.currentTarget) {
      onCerrar();
    }
  }

  return (
    <div
      className="modal-fondo"
      role="presentation"
      onClick={cerrarDesdeFondo}
    >
      <section
        className="modal-confirmacion"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-confirmacion"
        aria-describedby="descripcion-confirmacion"
      >
        <span
          className="modal-icono"
          aria-hidden="true"
        >
          ✓
        </span>

        <h2 id="titulo-confirmacion">
          ¡Inscripción registrada!
        </h2>

        <p id="descripcion-confirmacion">
          Gracias, <strong>{nombre}</strong>. Tu solicitud para el plan{" "}
          <strong>{plan}</strong> fue registrada correctamente.
        </p>

        <p>
          Nuestro equipo se comunicará contigo para completar el proceso.
        </p>

        <button
          ref={botonCerrar}
          type="button"
          className="boton-principal modal-boton"
          onClick={onCerrar}
        >
          Cerrar
        </button>
      </section>
    </div>
  );
}

export default ModalConfirmacion;