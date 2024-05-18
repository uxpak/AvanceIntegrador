import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // Importa el Footer
import Home from "./Screens/Home";
import Staff from './Screens/Staff';
import Registro from "./Screens/Registro";
import Login from './Screens/Login';
import Contact from "./Screens/Contact"; // Importa el componente Contact desde la carpeta correcta

function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/staff" element={<Staff/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
