function EjercicioCard({
  nombre,
  descripcion,
  categoria,
  musculos,
  equipamiento,
  imagen
}) {
  return (
    <article className="ejercicio-tarjeta">

      <img
        src={imagen}
        alt=""
        className="ejercicio-imagen"
        loading="lazy"
        onError={(evento) => {
          evento.currentTarget.src =
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80";
        }}
      />

      <div className="ejercicio-contenido">

        <span className="ejercicio-categoria">
          {categoria}
        </span>

        <h2>{nombre}</h2>

        <p className="ejercicio-descripcion">
          {descripcion}
        </p>

        <dl className="ejercicio-datos">

          <div>
            <dt>Músculos</dt>
            <dd>{musculos}</dd>
          </div>

          <div>
            <dt>Equipamiento</dt>
            <dd>{equipamiento}</dd>
          </div>

        </dl>

      </div>

    </article>
  );
}

export default EjercicioCard;