import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  // Estado para controlar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Función para mostrar la información según la opción seleccionada
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // Aquí puedes implementar la lógica para mostrar información específica
  };

  const serviceInfo = {
    "Chequeo Gratis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    "Cardiograma": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "Test de ADN": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    "Banco de Sangre": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
  };

  const serviceImages = {
    "Chequeo Gratis": "adn.jpeg",
    "Cardiograma": "ruta/a/imagen2.jpg",
    "Test de ADN": ["adn.jpeg", "adn2.jpg"],
    "Banco de Sangre": "ruta/a/imagen4.jpg"
  };
  return (
    <div className="home-container">
      <section className="home-top-section">
        <div className="home-company-info">
          <h1>VitalCare</h1>
          <p>Cuidamos tu salud<br />Líderes en la excelencia médica</p>
          <button><Link to="/servicios" className="home-button-link">Nuestros servicios</Link></button>
        </div>
        <div className="home-button-container">
          <button><Link to="/reserva" className="home-button-link">Reserva una cita</Link></button>
          <button><Link to="/staff" className="home-button-link">Ver staff médico</Link></button>
          <button><Link to="/servicios" className="home-button-link">Servicios</Link></button>
        </div>
      </section>

      <section className="home-welcome-section">
        <h2 className="home-section-title">BIENVENIDO A</h2>
        <h1 className="home-main-title">Un gran lugar para recibir atención</h1>
        <p className="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        <button className="home-learn-more-button">Leer más</button>
        <div className="home-image-banner">
          <img src="Captura.jpg" alt="Equipo de médicos" />
        </div>
      </section>

      <section className="home-services-section">
        <div className="home-services-list">
          <button className="home-service-button" onClick={() => handleOptionClick("Chequeo Gratis")}>Chequeo Gratis</button>
          <button className="home-service-button" onClick={() => handleOptionClick("Cardiograma")}>Cardiograma</button>
          <button className="home-service-button" onClick={() => handleOptionClick("Test de ADN")}>Test de ADN</button>
          <button className="home-service-button" onClick={() => handleOptionClick("Banco de Sangre")}>Banco de Sangre</button>
          <button className="home-view-all-button">Ver todo</button>
        </div>
        

        {selectedOption && (
        <div className="home-service-info">
          <h2>{selectedOption}</h2>
          <p>{serviceInfo[selectedOption]}</p>
        </div>
     
      )}

{selectedOption && (
         <div className="home-service-img">
         <img src={serviceImages[selectedOption][0]} alt={`${selectedOption} - 1`} />
         <img src={serviceImages[selectedOption][1]} alt={`${selectedOption} - 2`} />
       </div>
      )}

      </section>

      
    </div>
  );
}

export default Home;
