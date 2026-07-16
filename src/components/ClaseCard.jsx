function ClaseCard({
  nombre,
  descripcion,
  nivel,
  duracion,
  horario,
  entrenador,
  imagen
}) {
  return (
    <article className="clase-tarjeta">

      <img
        src={imagen}
        alt={`Clase de ${nombre}`}
        className="clase-imagen"
        loading="lazy"
      />

      <div className="clase-contenido">

        <span className={`clase-nivel nivel-${nivel.toLowerCase()}`}>
          {nivel}
        </span>

        <h2>{nombre}</h2>

        <p className="clase-descripcion">
          {descripcion}
        </p>

        <dl className="clase-detalles">

          <div>
            <dt>Duración</dt>
            <dd>{duracion}</dd>
          </div>

          <div>
            <dt>Horario</dt>
            <dd>{horario}</dd>
          </div>

          <div>
            <dt>Entrenador</dt>
            <dd>{entrenador}</dd>
          </div>

        </dl>

      </div>

    </article>
  );
}

export default ClaseCard;