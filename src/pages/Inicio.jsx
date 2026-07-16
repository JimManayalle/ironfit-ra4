import { Link } from "react-router-dom";

function Inicio() {
  return (
    <main className="pagina-inicio">

      {/* Portada */}
      <section className="inicio-hero">
        <div className="inicio-hero-contenido">
          <p className="inicio-etiqueta">
            Entrenamiento y bienestar
          </p>

          <h1>Entrena fuerte. Vive mejor.</h1>

          <p className="inicio-descripcion">
            En IronFit Gym encuentras entrenadores expertos, equipos modernos
            y clases para transformar tu energía en resultados reales.
          </p>

          <div className="inicio-botones">
            <Link className="boton-principal" to="/planes">
              Ver planes
            </Link>

            <Link className="boton-secundario" to="/inscripcion">
              Inscribirme
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="inicio-seccion">
        <div className="inicio-contenedor">
          <h2 className="inicio-titulo">Beneficios</h2>

          <p className="inicio-texto">
            Creamos un espacio pensado para que avances a tu ritmo, con
            motivación, seguridad y acompañamiento profesional.
          </p>

          <div className="inicio-grid">
            <article className="inicio-tarjeta">
              <span className="inicio-icono" aria-hidden="true">
                🏋️
              </span>

              <h3>Entrenadores certificados</h3>

              <p>
                Recibe rutinas personalizadas y correcciones para entrenar de
                forma segura y eficiente.
              </p>
            </article>

            <article className="inicio-tarjeta">
              <span className="inicio-icono" aria-hidden="true">
                💪
              </span>

              <h3>Equipos modernos</h3>

              <p>
                Máquinas, pesas libres y zonas funcionales para diferentes
                objetivos de entrenamiento.
              </p>
            </article>

            <article className="inicio-tarjeta">
              <span className="inicio-icono" aria-hidden="true">
                🕒
              </span>

              <h3>Horarios flexibles</h3>

              <p>
                Entrena temprano, por la tarde o durante la noche según tu
                disponibilidad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Planes destacados */}
      <section className="inicio-seccion inicio-fondo-alternativo">
        <div className="inicio-contenedor">
          <h2 className="inicio-titulo">Planes destacados</h2>

          <p className="inicio-texto">
            Elige una opción adecuada para tus metas y nivel de entrenamiento.
          </p>

          <div className="inicio-grid">
            <article className="inicio-tarjeta">
              <h3>Básico</h3>

              <p className="inicio-precio">S/ 79</p>

              <p>
                Acceso mensual a la sala de máquinas y pesas.
              </p>
            </article>

            <article className="inicio-tarjeta inicio-tarjeta-destacada">
              <span className="inicio-recomendado">
                Recomendado
              </span>

              <h3>Full</h3>

              <p className="inicio-precio">S/ 119</p>

              <p>
                Máquinas, pesas, clases grupales y evaluación inicial.
              </p>
            </article>

            <article className="inicio-tarjeta">
              <h3>Premium</h3>

              <p className="inicio-precio">S/ 169</p>

              <p>
                Plan personalizado, clases, nutrición básica y seguimiento.
              </p>
            </article>
          </div>

          <div className="inicio-enlace-central">
            <Link className="boton-principal" to="/planes">
              Comparar todos los planes
            </Link>
          </div>
        </div>
      </section>

      {/* Clases */}
      <section className="inicio-seccion inicio-clases">
        <div className="inicio-contenedor">
          <h2 className="inicio-titulo">Nuestras clases</h2>

          <p className="inicio-texto">
            Mejora tu fuerza, resistencia y bienestar mediante sesiones
            dirigidas por profesionales.
          </p>

          <div className="inicio-grid">
            <article className="inicio-tarjeta">
              <h3>Funcional</h3>

              <p>
                Ejercicios dinámicos para mejorar fuerza, equilibrio y
                agilidad.
              </p>
            </article>

            <article className="inicio-tarjeta">
              <h3>Spinning</h3>

              <p>
                Entrenamiento cardiovascular intenso acompañado de música.
              </p>
            </article>

            <article className="inicio-tarjeta">
              <h3>Musculación</h3>

              <p>
                Rutinas guiadas para aumentar masa muscular y mejorar la
                técnica.
              </p>
            </article>
          </div>

          <div className="inicio-enlace-central">
            <Link className="boton-secundario" to="/clases">
              Conocer las clases
            </Link>
          </div>
        </div>
      </section>

      {/* Llamado final */}
      <section className="inicio-cta">
        <div className="inicio-contenedor">
          <h2>Comienza tu transformación hoy</h2>

          <p>
            Registra tus datos y selecciona el plan que mejor se adapte a tus
            objetivos.
          </p>

          <Link className="boton-principal" to="/inscripcion">
            Inscribirme ahora
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Inicio;