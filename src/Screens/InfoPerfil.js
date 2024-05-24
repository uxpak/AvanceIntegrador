// InfoPerfil.js
const InfoPerfil = {
  "Perfil": {
    frase: "Información del Perfil",
    items: [
      { label: "Nombres", name: "nombres", type: "text" },
      { label: "Apellidos", name: "apellidos", type: "text" },
      { label: "Email", name: "email", type: "email" },
      { label: "Género", name: "genero", type: "text" },
      { label: "DNI", name: "dni", type: "text" },
      { label: "Fecha de Nacimiento", name: "fechaNacimiento", type: "date" },
      { label: "Celular", name: "celular", type: "text" }
    ],
    description: "Aquí puede ver y editar la información de su perfil."
  },
  "Citas": {
    frase: "Tus próximas citas",
    items: ["Cita 1", "Cita 2", "Cita 3"],
    description: "Lista de tus próximas citas médicas."
  },
  "Archivos": {
    frase: "Tus archivos",
    items: ["Archivo 1", "Archivo 2", "Archivo 3"],
    description: "Documentos y archivos médicos subidos."
  },
  "Recetas": {
    frase: "Tus recetas",
    items: ["Receta 1", "Receta 2", "Receta 3"],
    description: "Lista de recetas médicas."
  },
  "Resultados": {
    frase: "Resultados de pruebas",
    items: ["Prueba 1", "Prueba 2", "Prueba 3"],
    description: "Resultados de tus pruebas médicas."
  },
  "Historial médico": {
    frase: "Historial Médico",
    items: ["Consulta 1", "Consulta 2", "Consulta 3"],
    description: "Historial completo de tus consultas médicas."
  }
};

export default InfoPerfil;
