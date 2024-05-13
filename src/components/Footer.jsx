import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>------------------------------------</h4>
          <p>Liderando el camino en medicina<br></br>Excelencia, atención confiable</p>
        </div>
        <div className="footer-column">
          <h4>Enlaces<br></br>Relevantes</h4>
          <ul>
            <li>Cita</li>
            <li>Doctores</li>
            <li>Servicios</li>
            <li>Nosotros</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contáctanos</h4>
          <p><br></br>Dirección: Calle Principal, Ciudad</p>
          <p>Teléfono: +123 456 789</p>
          <p>Email: info@tuempresa.com</p>
        </div>
        <div className="footer-column">
          <h4>Noticias</h4>
          {/* Aquí puedes agregar noticias o enlaces relacionados */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
