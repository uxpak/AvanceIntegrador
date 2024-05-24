import React, { useState, useEffect } from 'react';
import "./Perfil.css";
import InfoPerfil from './InfoPerfil'; // Importa la información

const Perfil = () => {
  const [selectedOption, setSelectedOption] = useState("Perfil"); 
  const [showContent, setShowContent] = useState(true); 
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    genero: "",
    dni: "",
    fechaNacimiento: "",
    celular: ""
  });

  useEffect(() => {
    setShowContent(true); 
  }, []); 

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowContent(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  const contentClass = selectedOption && showContent ? 'show' : '';

  return (
      <section className="perfil-services-section">
        <div className="perfil-services-list">
          {Object.keys(InfoPerfil).map((option, index) => (
            <button key={index} className={`home-service-button ${selectedOption === option ? "selected-section" : ""}`} onClick={() => handleOptionClick(option)}>{option}</button>
          ))}
          <button className="home-view-all-button">Ver todo</button>
        </div>

        {selectedOption === "Perfil" && (
          <div className={`home-service-info ${contentClass}`}>
            <form onSubmit={handleSubmit}>
              <h1>{InfoPerfil[selectedOption].frase}</h1>
              <div className="form-group">
                <label>Nombres</label>
                <input type="text" name="nombres" value={formData.nombres} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Apellidos</label>
                <input type="text" name="apellidos" value={formData.apellidos} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Género</label>
                <input type="text" name="genero" value={formData.genero} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>DNI</label>
                <input type="text" name="dni" value={formData.dni} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Celular</label>
                <input type="text" name="celular" value={formData.celular} onChange={handleInputChange} />
              </div>
              <button type="submit">Guardar</button>
            </form>
          </div>
        )}

        {selectedOption !== "Perfil" && selectedOption && (
          <div className={`home-service-info ${contentClass}`}>
            <h1>{selectedOption}</h1>
            <h3 className="service-info-text">{InfoPerfil[selectedOption].frase}</h3>
            <ul className="service-info-list">
              {InfoPerfil[selectedOption].items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="service-info-description">{InfoPerfil[selectedOption].description}</p>
          </div>
        )}
      </section>
  );
}

export default Perfil;
