import { useEffect, useMemo, useState } from "react";

import EjercicioCard from "../components/EjercicioCard";
import { obtenerEjercicios } from "../services/ejerciciosService.js";

function Ejercicios() {
  const [ejercicios, setEjercicios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  async function cargarEjercicios() {
    try {
      setCargando(true);
      setError("");

      const resultados = await obtenerEjercicios();

      setEjercicios(resultados);
    } catch (errorCapturado) {
      setError(
        errorCapturado.message ||
        "Ocurrió un error al cargar los ejercicios."
      );
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarEjercicios();
  }, []);

  const categorias = useMemo(() => {
    const categoriasEncontradas = ejercicios.map(
      (ejercicio) => ejercicio.categoria
    );

    return [
      "Todas",
      ...new Set(categoriasEncontradas)
    ];
  }, [ejercicios]);

  const ejerciciosFiltrados = useMemo(() => {
    const textoBuscado = busqueda
      .trim()
      .toLowerCase();

    return ejercicios.filter((ejercicio) => {
      const coincideBusqueda =
        ejercicio.nombre
          .toLowerCase()
          .includes(textoBuscado) ||
        ejercicio.musculos
          .toLowerCase()
          .includes(textoBuscado) ||
        ejercicio.equipamiento
          .toLowerCase()
          .includes(textoBuscado);

      const coincideCategoria =
        categoria === "Todas" ||
        ejercicio.categoria === categoria;

      return coincideBusqueda && coincideCategoria;
    });
  }, [ejercicios, busqueda, categoria]);

  return (
    <main className="pagina-ejercicios">

      <section className="ejercicios-encabezado">

        <div className="ejercicios-contenedor">

          <p className="ejercicios-etiqueta">
            Biblioteca de entrenamiento
          </p>

          <h1>Aprende nuevos ejercicios</h1>

          <p>
            Consulta información obtenida desde un servicio externo y
            encuentra ejercicios según su nombre, grupo muscular o
            equipamiento.
          </p>

        </div>

      </section>

      <section
        className="ejercicios-listado"
        aria-labelledby="titulo-ejercicios"
      >

        <div className="ejercicios-contenedor">

          <div className="ejercicios-cabecera">

            <div>
              <h2 id="titulo-ejercicios">
                Ejercicios disponibles
              </h2>

              <p>
                Utiliza los filtros para encontrar una actividad.
              </p>
            </div>

            <div className="ejercicios-filtros">

              <div className="ejercicio-campo-filtro">

                <label htmlFor="buscarEjercicio">
                  Buscar ejercicio
                </label>

                <input
                  type="search"
                  id="buscarEjercicio"
                  value={busqueda}
                  placeholder="Ejemplo: press, brazo..."
                  onChange={(evento) =>
                    setBusqueda(evento.target.value)
                  }
                />

              </div>

              <div className="ejercicio-campo-filtro">

                <label htmlFor="categoriaEjercicio">
                  Categoría
                </label>

                <select
                  id="categoriaEjercicio"
                  value={categoria}
                  onChange={(evento) =>
                    setCategoria(evento.target.value)
                  }
                >
                  {categorias.map((nombreCategoria) => (
                    <option
                      key={nombreCategoria}
                      value={nombreCategoria}
                    >
                      {nombreCategoria}
                    </option>
                  ))}
                </select>

              </div>

            </div>

          </div>

          {cargando && (
            <div
              className="estado-carga"
              role="status"
              aria-live="polite"
            >
              <div
                className="cargador"
                aria-hidden="true"
              ></div>

              <p>Cargando ejercicios desde la API...</p>
            </div>
          )}

          {!cargando && error && (
            <div
              className="estado-error"
              role="alert"
            >
              <h2>No se pudieron cargar los ejercicios</h2>

              <p>{error}</p>

              <button
                type="button"
                className="boton-principal"
                onClick={cargarEjercicios}
              >
                Intentar nuevamente
              </button>
            </div>
          )}

          {!cargando && !error && (
            <>
              <p
                className="ejercicios-resultado"
                aria-live="polite"
              >
                Se encontraron {ejerciciosFiltrados.length} ejercicios.
              </p>

              {ejerciciosFiltrados.length > 0 ? (
                <div className="ejercicios-grid">

                  {ejerciciosFiltrados.map((ejercicio) => (
                    <EjercicioCard
                      key={ejercicio.id}
                      nombre={ejercicio.nombre}
                      descripcion={ejercicio.descripcion}
                      categoria={ejercicio.categoria}
                      musculos={ejercicio.musculos}
                      equipamiento={ejercicio.equipamiento}
                      imagen={ejercicio.imagen}
                    />
                  ))}

                </div>
              ) : (
                <div className="estado-vacio">
                  <h2>No encontramos resultados</h2>

                  <p>
                    Prueba con otro nombre o selecciona una categoría
                    diferente.
                  </p>
                </div>
              )}
            </>
          )}

        </div>

      </section>

    </main>
  );
}

export default Ejercicios;