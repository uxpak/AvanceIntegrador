import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Sección superior con imagen */}
      
      
      <section className="top-section">

      <div className="company-info">
          <h1>VitalCare</h1>
          <p>Cuidamos tu salud<br></br>Lideres en la excelencia medica</p>
          <button>Nuestros servicios</button>
        </div>


        <div className="button-container">
          <button>Reservar una cita</button>
          <button>Ver staff médicos</button>
          <button>Servicios</button>
        </div>
      </section>

      

      {/* Sección de información y servicios */}
      <section className="info-services-section">
        <h2>Un gran lugar para recibir atencion</h2>
        <p>Aquí puedes encontrar información sobre nuestros servicios médicos y lo que ofrecemos.</p>
        {/* Lista de servicios */}
        <ul>
          <li>Servicio 1</li>
          <li>Servicio 2</li>
          <li>Servicio 3</li>
          {/* Añade más servicios según sea necesario */}
        </ul>
      </section>

      {/* Sección de especialidades */}
      <section className="specialties-section">
        <h2>Nuestras Especialidades</h2>
        <p>Descubre nuestras especialidades médicas y cómo podemos ayudarte.</p>
        {/* Lista de especialidades */}
        <ul>
          <li>Especialidad 1</li>
          <li>Especialidad 2</li>
          <li>Especialidad 3</li>
          {/* Añade más especialidades según sea necesario */}
        </ul>
      </section>
    </div>
  );
}

export default Home;