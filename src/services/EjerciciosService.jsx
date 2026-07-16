const API_URL =
  "https://wger.de/api/v2/exerciseinfo/?limit=30&status=2";

/**
 * Elimina etiquetas HTML de una cadena.
 */
function limpiarHtml(texto = "") {
  const elementoTemporal = document.createElement("div");

  elementoTemporal.innerHTML = texto;

  return elementoTemporal.textContent || "";
}

/**
 * Obtiene una traducción válida del ejercicio.
 */
function obtenerTraduccion(traducciones = []) {
  const traduccionEspanol = traducciones.find(
    (traduccion) =>
      traduccion.language === 4 &&
      traduccion.name
  );

  return (
    traduccionEspanol ||
    traducciones.find((traduccion) => traduccion.name) ||
    null
  );
}

/**
 * Transforma la respuesta de la API en datos más sencillos
 * para utilizar dentro de React.
 */
function transformarEjercicio(ejercicio) {
  const traduccion = obtenerTraduccion(
    ejercicio.translations || []
  );

  const imagenPrincipal =
    ejercicio.images?.find((imagen) => imagen.is_main) ||
    ejercicio.images?.[0];

  const musculos = (ejercicio.muscles || [])
    .map((musculo) => musculo.name_en || musculo.name)
    .filter(Boolean);

  const equipamiento = (ejercicio.equipment || [])
    .map((equipo) => equipo.name)
    .filter(Boolean);

  return {
    id: ejercicio.id,
    nombre: traduccion?.name || "Ejercicio sin nombre",
    descripcion:
      limpiarHtml(traduccion?.description) ||
      "Este ejercicio no cuenta con una descripción disponible.",
    categoria:
      ejercicio.category?.name || "Entrenamiento general",
    musculos:
      musculos.length > 0
        ? musculos.join(", ")
        : "No especificado",
    equipamiento:
      equipamiento.length > 0
        ? equipamiento.join(", ")
        : "Sin equipamiento especificado",
    imagen:
      imagenPrincipal?.image ||
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80"
  };
}

/**
 * Consulta los ejercicios de la API.
 */
export async function obtenerEjercicios() {
  const respuesta = await fetch(API_URL, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!respuesta.ok) {
    throw new Error(
      `No se pudieron obtener los ejercicios. Código: ${respuesta.status}`
    );
  }

  const datos = await respuesta.json();

  if (!Array.isArray(datos.results)) {
    throw new Error(
      "La API devolvió una estructura de datos inesperada."
    );
  }

  return datos.results
    .map(transformarEjercicio)
    .filter((ejercicio) => ejercicio.nombre !== "Ejercicio sin nombre");
}