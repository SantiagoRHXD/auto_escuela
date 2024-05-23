// src/Registro.js

// Importa React y el hook useState
import React, { useState } from 'react';
// Importa el componente Link de react-router-dom para crear enlaces dentro de la aplicación
import { Link } from 'react-router-dom';

// Define el componente funcional Registro
const Registro = () => {
  // Define el estado inicial del formulario utilizando el hook useState
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    contraseña: ''
  });

  // Función para manejar el cambio de valores en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log(form);
  };

  return (
    // Estructura del formulario de registro
    <div className="login-container">
      <div className="header">
        {/* Enlaces de navegación */}
        <Link to="/home" className="btn">Inicio</Link>
        <Link to="/" className="btn">Iniciar sesión</Link>
      </div>
      <div className="login-form">
        {/* Logo de la autoescuela */}
        <img src="../../public/images/autoescuela logo 2.png" alt="Auto Escuela" className="logo" />
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" name="usuario" value={form.usuario} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" name="contraseña" value={form.contraseña} onChange={handleChange} />
          </div>
          {/* Botón de registro */}
          <button type="submit" className="btn-submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

// Exporta el componente Registro para que pueda ser utilizado en otras partes de la aplicación
export default Registro;
