import { useState } from "react";

import ClaseCard from "../components/ClaseCard";

function Clases() {
  const [filtroNivel, setFiltroNivel] = useState("Todos");

  const clases = [
    {
      id: 1,
      nombre: "Entrenamiento funcional",
      descripcion:
        "Sesión dinámica que combina fuerza, resistencia, equilibrio y coordinación.",
      nivel: "Principiante",
      duracion: "50 minutos",
      horario: "Lunes y miércoles - 7:00 p. m.",
      entrenador: "Carlos Mendoza",
      imagen:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      nombre: "Spinning",
      descripcion:
        "Entrenamiento cardiovascular sobre bicicleta estática acompañado de música.",
      nivel: "Intermedio",
      duracion: "45 minutos",
      horario: "Martes y jueves - 6:30 p. m.",
      entrenador: "Andrea Torres",
      imagen:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      nombre: "Musculación",
      descripcion:
        "Rutinas orientadas al desarrollo de fuerza, técnica y masa muscular.",
      nivel: "Intermedio",
      duracion: "60 minutos",
      horario: "Lunes a viernes - 5:00 p. m.",
      entrenador: "Luis Ramírez",
      imagen:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      nombre: "HIIT",
      descripcion:
        "Ejercicios de alta intensidad realizados en intervalos cortos con descansos controlados.",
      nivel: "Avanzado",
      duracion: "35 minutos",
      horario: "Sábados - 9:00 a. m.",
      entrenador: "María López",
      imagen:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 5,
      nombre: "Yoga y movilidad",
      descripcion:
        "Sesión enfocada en flexibilidad, respiración, postura y recuperación física.",
      nivel: "Principiante",
      duracion: "50 minutos",
      horario: "Martes y viernes - 8:00 a. m.",
      entrenador: "Sofía Castillo",
      imagen:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 6,
      nombre: "Cross Training",
      descripcion:
        "Entrenamiento completo con ejercicios funcionales, fuerza y resistencia.",
      nivel: "Avanzado",
      duracion: "55 minutos",
      horario: "Miércoles y viernes - 7:30 p. m.",
      entrenador: "Diego Sánchez",
      imagen:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const clasesFiltradas =
    filtroNivel === "Todos"
      ? clases
      : clases.filter((clase) => clase.nivel === filtroNivel);

  return (
    <main className="pagina-clases">

      <section className="clases-encabezado">

        <div className="clases-contenedor">

          <p className="clases-etiqueta">
            Actividades IronFit
          </p>

          <h1>Encuentra una clase para tu nivel</h1>

          <p>
            Participa en sesiones dirigidas por entrenadores y mejora tu
            fuerza, resistencia, movilidad y bienestar.
          </p>

        </div>

      </section>

      <section
        className="clases-listado"
        aria-labelledby="titulo-clases"
      >

        <div className="clases-contenedor">

          <div className="clases-cabecera">

            <div>
              <h2 id="titulo-clases">
                Clases disponibles
              </h2>

              <p>
                Selecciona un nivel para encontrar la actividad más adecuada.
              </p>
            </div>

            <div className="clases-filtro">

              <label htmlFor="filtroNivel">
                Filtrar por nivel
              </label>

              <select
                id="filtroNivel"
                value={filtroNivel}
                onChange={(evento) =>
                  setFiltroNivel(evento.target.value)
                }
              >
                <option value="Todos">Todos</option>
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>

            </div>

          </div>

          <p
            className="clases-resultado"
            aria-live="polite"
          >
            Se encontraron {clasesFiltradas.length} clases.
          </p>

          <div className="clases-grid">

            {clasesFiltradas.map((clase) => (
              <ClaseCard
                key={clase.id}
                nombre={clase.nombre}
                descripcion={clase.descripcion}
                nivel={clase.nivel}
                duracion={clase.duracion}
                horario={clase.horario}
                entrenador={clase.entrenador}
                imagen={clase.imagen}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Clases;