import { Link } from "react-router-dom";

function PaginaNoEncontrada() {
  return (
    <main className="pagina-404">
      <section className="contenido-404">
        <p className="codigo-404" aria-hidden="true">
          404
        </p>

        <h1>Página no encontrada</h1>

        <p className="descripcion-404">
          La dirección que intentaste visitar no existe o fue modificada.
        </p>

        <div className="acciones-404">
          <Link to="/" className="boton-principal">
            Regresar al inicio
          </Link>

          <Link to="/contacto" className="boton-secundario">
            Ir a contacto
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PaginaNoEncontrada;