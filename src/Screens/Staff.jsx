import React from 'react';
import "./Staff.css";

const Staff = () => {
  // Supongamos que tienes información de médicos en un array
  const medicalStaff = [
    { id: 1, name: "Dr. Juan Pérez", specialization: "Cardiología", photo: "https://st3.depositphotos.com/1743476/32257/i/450/depositphotos_322579018-stock-photo-smiling-doctor-standing-on-grey.jpg" },
    { id: 2, name: "Dra. María González", specialization: "Pediatría", photo: "https://media.istockphoto.com/id/1530248128/photo/portrait-of-cheerful-female-doctor-with-digital-tablet-beside-window-in-corridor.webp?b=1&s=170667a&w=0&k=20&c=lr9kQSJFSMXao-_XHEyTjca6fhzdoIg9lDdOL8j-kHE=" },
    { id: 3, name: "Dr. José Rodríguez", specialization: "Dermatología", photo: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg" },
    { id: 4, name: "Dra. Ana Martínez", specialization: "Ginecología", photo: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg" },
    { id: 5, name: "Dr. Carlos Sánchez", specialization: "Oftalmología", photo: "https://st2.depositphotos.com/4431055/11852/i/450/depositphotos_118522306-stock-photo-handsome-doctor-portrait.jpg" },
    { id: 6, name: "Dra. Laura López", specialization: "Neurología", photo: "https://img.freepik.com/foto-gratis/doctora-vistiendo-bata-laboratorio-estetoscopio-aislado_1303-29791.jpg" },
    { id: 7, name: "Dr. Carlos Sánchez", specialization: "Cirugia", photo: "https://st2.depositphotos.com/4431055/11852/i/450/depositphotos_118522306-stock-photo-handsome-doctor-portrait.jpg" },
    { id: 8, name: "Dra. Laura López", specialization: "Geriatria", photo: "https://img.freepik.com/foto-gratis/doctora-vistiendo-bata-laboratorio-estetoscopio-aislado_1303-29791.jpg" },
    { id: 9, name: "Dr. Carlos Sánchez", specialization: "Otorrino", photo: "https://st2.depositphotos.com/4431055/11852/i/450/depositphotos_118522306-stock-photo-handsome-doctor-portrait.jpg" },
    
  ];

  return (
    <div>
      <section className="top-section">
        <div className="company-info">
          <h1>VitalCare</h1>
          <p>Cuidamos tu salud<br />Líderes en la excelencia médica</p>
          <button>Nuestros servicios</button>
        </div>
        <div className="button-container">
          <button>Reservar una cita</button>
          <button>Ver staff médicos</button>
          <button>Servicios</button>
        </div>
      </section>

      {/* Contenedor de staff médico */}
      <div className="staff-container">
        <h2>Nuestro Equipo Médico</h2>
        <div className="staff-list">
          {medicalStaff.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <img src={doctor.photo} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>Especialización: {doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Staff;
