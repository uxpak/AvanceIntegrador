import React from "react";
import { Link } from "react-router-dom";
import "./Registro.css";

const Registro = () => {
    return (
        <div className="registro-container">
            <div className="company-photo"></div>
            <div className="registro-form">
                <h1>Registro</h1>
                <h4>¿Ya tienes una cuenta? <Link to="/contact">Inicia sesión</Link></h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombres:</label>
                        <input type="text" id="nombre" name="nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellidos">Apellidos:</label>
                        <input type="text" id="apellidos" name="apellidos" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" id="correo" name="correo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dni">DNI:</label>
                        <input type="text" id="dni" name="dni" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="celular">Celular:</label>
                        <input type="text" id="celular" name="celular" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genero">Género:</label>
                        <select id="genero" name="genero">
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm_password">Confirma Contraseña:</label>
                        <input type="password" id="confirm_password" name="confirm_password" />
                    </div>
                    <button type="submit" className="registro-button">REGISTRARSE</button>
                </form>
                <div className="social-login">
                    <p>O regístrate con:</p>
                    <div className="social-buttons">
                        <button className="google-button">Google</button>
                        <button className="facebook-button">Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;
