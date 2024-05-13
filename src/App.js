import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // Importa el Footer
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
