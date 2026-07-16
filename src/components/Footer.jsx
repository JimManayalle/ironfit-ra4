function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer-principal">
      <p>
        IronFit Gym | Av. Energía 123, Chiclayo
      </p>

      <p>
        © {anioActual} Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;