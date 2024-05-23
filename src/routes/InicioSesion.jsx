import React from 'react'
import { Link } from 'react-router-dom';

const InicioSesion = () => {
  return (
    <div className="login-container">
      <div className="header">
          <Link to="/home" className="btn">Inicio</Link>
          <Link to="/registro" className="btn">Registrarse</Link>
      </div>
      <div className="login-form">
        <img src="../../public/images/autoescuela logo 2.png" alt="Auto Escuela" className="logo" />
        <form>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          <a href="#" className="forgot-password">Olvide mi contraseña</a>
          <button type="submit" className="btn-submit">Iniciar sesión</button>
        </form>
        <div className="social-login">
          <p>O conéctate con</p>
          <button className="btn-social google">G</button>
          <button className="btn-social twitter">X</button>
          <button className="btn-social facebook">f</button>
        </div>
      </div>
    </div>
  )
}

export default InicioSesion
