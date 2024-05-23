// Importa React y el componente Link de react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

// Define el componente funcional InicioSesion
const InicioSesion = () => {
  return (
    <div className="login-container">
      {/* Encabezado con enlaces a Inicio y Registrarse */}
      <div className="header">
        <Link to="/home" className="btn">Inicio</Link>
        <Link to="/registro" className="btn">Registrarse</Link>
      </div>
      {/* Formulario de inicio de sesión */}
      <div className="login-form">
        {/* Logo de la autoescuela */}
        <img src="../../public/images/autoescuela logo 2.png" alt="Auto Escuela" className="logo" />
        {/* Formulario para ingresar usuario y contraseña */}
        <form>
          {/* Campo para el nombre de usuario */}
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username" />
          </div>
          {/* Campo para la contraseña */}
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          {/* Enlace para recuperar contraseña */}
          <a href="#" className="forgot-password">Olvidé mi contraseña</a>
          {/* Botón para enviar el formulario de inicio de sesión */}
          <button type="submit" className="btn-submit">Iniciar sesión</button>
        </form>
        {/* Botones para iniciar sesión con redes sociales */}
        <div className="social-login">
          <p>O conectate con</p>
          <button className="btn-social google">G</button>
          <button className="btn-social twitter">X</button>
          <button className="btn-social facebook">f</button>
        </div>
      </div>
    </div>
  );
}

// Exporta el componente InicioSesion para que pueda ser utilizado en otras partes de la aplicación
export default InicioSesion;
