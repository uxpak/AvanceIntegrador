import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Chequeo Gratis"); 
  const [showContent, setShowContent] = useState(true); 
  const [specialties, setSpecialties] = useState([]); // Definición de especialidades
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar la apertura y el cierre del popup

  useEffect(() => {
    setShowContent(true); 
    // Aquí deberías cargar las especialidades desde una fuente de datos
    // Supongamos que fetchedSpecialties es una lista de especialidades obtenidas de alguna fuente
    const fetchedSpecialties = [
      { title: "Especialidad 1", image: "especialidad1.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
      { title: "Especialidad 2", image: "especialidad2.jpg" },
    ]; 
    setSpecialties(fetchedSpecialties);
  }, []); 

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowContent(true);
  };
  
  const handleSpecialtyClick = (specialty) => {
    // Aquí puedes manejar el clic en una especialidad
    // Por ejemplo, podrías abrir el popup con información sobre la especialidad
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Cambia setIsPopOpen por setIsPopupOpen
  }
  
  const contentClass = selectedOption && showContent ? 'show' : '';

  return (
    <div className="home-container">
      <section className="home-top-section">
        <div className="home-company-info">
          <div className="company-info-container">
            <h1>VitalCare</h1>
            <p>Cuidamos tu salud<br />Líderes en la excelencia médica</p>
          </div>
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
          <button className={`home-service-button ${selectedOption === "Chequeo Gratis" ? "selected-section" : ""}`} onClick={() => handleOptionClick("Chequeo Gratis")}>Chequeo Gratis</button>
          <button className={`home-service-button ${selectedOption === "Cardiograma" ? "selected-section" : ""}`} onClick={() => handleOptionClick("Cardiograma")}>Cardiograma</button>
          <button className={`home-service-button ${selectedOption === "Test de ADN" ? "selected-section" : ""}`} onClick={() => handleOptionClick("Test de ADN")}>Test de ADN</button>
          <button className={`home-service-button ${selectedOption === "Banco de Sangre" ? "selected-section" : ""}`} onClick={() => handleOptionClick("Banco de Sangre")}>Banco de Sangre</button>
          <button className="home-view-all-button">Ver todo</button>
        </div>

        {selectedOption && (
          <div className={`home-service-info ${contentClass} home-service-info-container`}>
            <h1>{selectedOption}</h1>
            <h3 className="service-info-text">{serviceInfo[selectedOption].frase}</h3>
            <ul className="service-info-list">
              {serviceInfo[selectedOption].items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="service-info-description">{serviceInfo[selectedOption].description}</p>
          </div>
        )}

        {selectedOption && (
          <div className={`home-service-img ${contentClass}`}>
            <img src={serviceImages[selectedOption][0]} alt={`${selectedOption} - 1`} />
            <img src={serviceImages[selectedOption][1]} alt={`${selectedOption} - 2`} />
          </div>
        )}
    
      </section>
        
      <section className="home-specialties-section">
        <div className="home-specialties-title">
          <h2>Siempre cuidando</h2>
          <h1>Nuestras especialidades</h1>
        </div>
                <div className="home-specialties-container">
          {/* Crear los botones con imágenes y descripciones */}
          {/* Ejemplo: */}
          {specialties.map((specialty, index) => (
            <button key={index} onClick={() => handleSpecialtyClick(specialty)}>
              <img src={specialty.image} alt={specialty.title} />
            </button>
          ))}
        </div>
      </section>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup Content</h2>
            <p>This is some popup content.</p>
            <button onClick={handleClosePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

