import React, { useState } from 'react'; // Importa useState desde React
import { Link } from "react-router-dom";
import "./Registro.css";

const Registro = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
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
                        <select id="genero" name="genero" className="registro-button">
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="password-toggle-button"
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>

                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm_password">Confirmar Contraseña:</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirm_password"
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        /> <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="password-toggle-button"
                        >
                            {showConfirmPassword ? '🙈' : '👁️'}
                        </button>

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
