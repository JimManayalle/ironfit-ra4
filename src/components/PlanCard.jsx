import { useNavigate } from "react-router-dom";

function PlanCard({
  nombre,
  precio,
  descripcion,
  beneficios,
  recomendado = false
}) {
  const navigate = useNavigate();

  function seleccionarPlan() {
    localStorage.setItem("planSeleccionado", nombre);
    navigate("/inscripcion");
  }

  return (
    <article
      className={
        recomendado
          ? "plan-tarjeta plan-destacado"
          : "plan-tarjeta"
      }
    >
      {recomendado && (
        <span className="plan-etiqueta">
          Más elegido
        </span>
      )}

      <h2>{nombre}</h2>

      <p className="plan-precio">
        S/ {precio}
        <span>/mes</span>
      </p>

      <p className="plan-descripcion">
        {descripcion}
      </p>

      <ul className="plan-beneficios">
        {beneficios.map((beneficio) => (
          <li key={beneficio}>
            <span aria-hidden="true">✓</span>
            {beneficio}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="boton-principal plan-boton"
        onClick={seleccionarPlan}
        aria-label={`Seleccionar el plan ${nombre}`}
      >
        Elegir plan
      </button>
    </article>
  );
}

export default PlanCard;