import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Planes from "./pages/Planes";
import Clases from "./pages/Clases";
import Ejercicios from "./pages/Ejercicios";
import Inscripcion from "./pages/Inscripcion";
import Contacto from "./pages/Contacto";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import GestionRuta from "./components/GestionRuta";

function App() {
  return (
    <div className="aplicacion">
      <GestionRuta />

      <a
        href="#contenido-principal"
        className="saltar-contenido"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <div id="contenido-principal" className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/ejercicios" element={<Ejercicios />} />
          <Route path="/inscripcion" element={<Inscripcion />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route
            path="*"
            element={<PaginaNoEncontrada />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;