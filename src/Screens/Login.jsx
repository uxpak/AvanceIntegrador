import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="company-photo"></div>
            <div className="login-form">
                <h1>Iniciar Sesión</h1>
                <h4>¿No tienes una cuenta? <Link to="/registro">Crea una</Link></h4> 
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit" className="login-button">INICIAR SESION</button>
                </form>
                <div className="forgot-password">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="social-login">
                    <p>O inicia sesión con:</p>
                    <div className="social-buttons">
                        <button className="google-button">Google</button>
                        <button className="facebook-button">Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
