import React from 'react';
import { Link } from 'react-router-dom';
import "./Nosotros.css";


const Nosotros = () => {

    return (
        <div>
      
      <section className="top-section">
        <div className="company-info">
          <h1>VitalCare</h1>
          <p>Cuidamos tu salud<br />Líderes en la excelencia médica</p>
          <button><Link to="/servicios" className="button-link">Nuestros servicios</Link></button>
        </div>
        <div className="button-container">
          <button><Link to="/reserva" className="button-link">Reserva una cita</Link></button>
          <button><Link to="/staff" className="button-link">Ver staff médico</Link></button>
          <button><Link to="/servicios" className="button-link">Servicios</Link></button>
        </div>
      </section>
        </div>
  
  )
}

export default Nosotros;