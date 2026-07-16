import { NavLink } from "react-router-dom";

function Navbar() {
  const obtenerClase = ({ isActive }) =>
    isActive ? "nav-link activo" : "nav-link";

  return (
    <header className="encabezado-principal">
      <nav
        className="navbar"
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          className="logo"
          aria-label="Ir a la página de inicio de IronFit Gym"
        >
          IronFit Gym
        </NavLink>

        <ul className="menu">
          <li>
            <NavLink to="/" className={obtenerClase}>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/planes" className={obtenerClase}>
              Planes
            </NavLink>
          </li>

          <li>
            <NavLink to="/clases" className={obtenerClase}>
              Clases
            </NavLink>
          </li>

          <li>
            <NavLink to="/ejercicios" className={obtenerClase}>
              Ejercicios
            </NavLink>
          </li>

          <li>
            <NavLink to="/inscripcion" className={obtenerClase}>
              Inscripción
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacto" className={obtenerClase}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;