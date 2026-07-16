import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GestionRuta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const titulos = {
      "/": "Inicio | IronFit Gym",
      "/planes": "Planes | IronFit Gym",
      "/clases": "Clases | IronFit Gym",
      "/ejercicios": "Ejercicios | IronFit Gym",
      "/inscripcion": "Inscripción | IronFit Gym",
      "/contacto": "Contacto | IronFit Gym"
    };

    document.title =
      titulos[pathname] || "Página no encontrada | IronFit Gym";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }, [pathname]);

  return null;
}

export default GestionRuta;