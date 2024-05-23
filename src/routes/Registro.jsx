// src/Registro.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log(form);
  };

  return (
   /*  <div>
      <div className="header">
          <Link to="/home" className="btn">Inicio</Link>
          <Link to="/" className="btn">Inicio sesion</Link>
      </div>
    <div className="registro-container">
      
      <form className="registro-form" onSubmit={handleSubmit}>
        <img src="../../public/images/autoescuela logo 2.png" alt="Autoescuela Logo" className="logo" />
        <div>
          <label>Nombre</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
        </div>
        <div>
          <label>Usuario</label>
          <input type="text" name="usuario" value={form.usuario} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" name="contraseña" value={form.contraseña} onChange={handleChange} />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
    </div> */


    <div className="login-container">
    <div className="header">
        <Link to="/home" className="btn">Inicio</Link>
        <Link to="/" className="btn">Iniciar sesion</Link>
    </div>
    <div className="login-form">
      <img src="../../public/images/autoescuela logo 2.png" alt="Auto Escuela" className="logo" />
      <form  onSubmit={handleSubmit}>
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
        <button type="submit" className="btn-submit">Registrarse</button>
      </form>
    </div>
  </div>
  );
};

export default Registro;
/* className="form-group" */