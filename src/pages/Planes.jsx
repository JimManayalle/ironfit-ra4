import PlanCard from "../components/PlanCard";

function Planes() {
  const planes = [
    {
      nombre: "Básico",
      precio: 79,
      descripcion:
        "Una opción adecuada para comenzar tu entrenamiento.",
      beneficios: [
        "Acceso a la sala de máquinas",
        "Uso de pesas libres",
        "Horario flexible",
        "Evaluación física básica"
      ]
    },
    {
      nombre: "Full",
      precio: 119,
      descripcion:
        "Entrenamiento completo con acceso a clases grupales.",
      beneficios: [
        "Todos los beneficios del plan Básico",
        "Acceso a clases grupales",
        "Evaluación física mensual",
        "Orientación de un entrenador",
        "Seguimiento de progreso"
      ],
      recomendado: true
    },
    {
      nombre: "Premium",
      precio: 169,
      descripcion:
        "Atención personalizada para alcanzar objetivos específicos.",
      beneficios: [
        "Todos los beneficios del plan Full",
        "Rutina personalizada",
        "Asesoría nutricional básica",
        "Seguimiento semanal",
        "Prioridad en reservas"
      ]
    }
  ];

  return (
    <main className="pagina-planes">

      <section className="planes-encabezado">
        <div className="planes-contenedor">
          <p className="planes-etiqueta">
            Membresías IronFit
          </p>

          <h1>Elige el plan adecuado para ti</h1>

          <p>
            Contamos con opciones para diferentes objetivos, niveles de
            entrenamiento y presupuestos.
          </p>
        </div>
      </section>

      <section
        className="planes-seccion"
        aria-labelledby="titulo-lista-planes"
      >
        <div className="planes-contenedor">

          <h2
            id="titulo-lista-planes"
            className="titulo-oculto"
          >
            Lista de planes disponibles
          </h2>

          <div className="planes-grid">
            {planes.map((plan) => (
              <PlanCard
                key={plan.nombre}
                nombre={plan.nombre}
                precio={plan.precio}
                descripcion={plan.descripcion}
                beneficios={plan.beneficios}
                recomendado={plan.recomendado}
              />
            ))}
          </div>

        </div>
      </section>

      <section className="planes-informacion">
        <div className="planes-contenedor">

          <h2>Todos nuestros planes incluyen</h2>

          <div className="planes-informacion-grid">

            <article>
              <h3>Instalaciones modernas</h3>
              <p>
                Equipos en buen estado, zonas de entrenamiento funcional y
                ambientes seguros.
              </p>
            </article>

            <article>
              <h3>Asistencia profesional</h3>
              <p>
                Nuestro equipo brinda orientación para que entrenes de forma
                adecuada.
              </p>
            </article>

            <article>
              <h3>Horarios flexibles</h3>
              <p>
                Puedes organizar tus sesiones según tu disponibilidad diaria.
              </p>
            </article>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Planes;