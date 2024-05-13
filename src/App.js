import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // Importa el Footer
import Home from "./Screens/Home";
import Registro from "./Screens/Registro";
import Contact from "./Screens/Contact"; // Importa el componente Contact desde la carpeta correcta

function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/registro" element={<Registro/>} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
