// Importa la librería principal de React
import React from 'react';

// Importa el componente Link de react-router-dom para la navegación
import { Link } from 'react-router-dom';

// Define el componente funcional Navbar
const Navbar = () => {
  return (
    // Contenedor principal de la barra de navegación con clase CSS 'nav'
    <div className='nav'>
      
      {/* Contenedor para el logo */}
      <div>
        <img src="../../public/images/autoescuela logo 2.png" alt="Logo de Autoescuela" />
      </div>
      
      {/* Contenedor de la barra de navegación */}
      <nav className='navbar'>
        {/* Lista de elementos de navegación */}
        <ul className='prueba'>
          {/* Elemento de la lista: Enlace a la página de inicio */}
          <li className='lista'>
            <Link to="/home">Inicio</Link>
          </li>
          {/* Elemento de la lista: Enlace a la página de cursos de conducción */}
          <li className='lista'>
            <Link to="/card">Cursos de conducción</Link>
          </li>
          {/* Elemento de la lista: Enlace a la página de sedes y horarios */}
          <li className='lista'>
            <Link to="/sedes-horarios">Sedes y Horarios</Link>
          </li>
          {/* Elemento de la lista: Enlace a la página de inicio de sesión */}
          <li className='lista'>
            <Link to="/">Iniciar sesión</Link>
          </li>
          {/* Elemento de la lista: Enlace a la página de registro */}
          <li className='lista'>
            <Link to="/registro">Registrarse</Link>
          </li>
        </ul> 
      </nav> 
      
    </div>
  );
}

// Exporta el componente Navbar para que pueda ser usado en otras partes de la aplicación
export default Navbar;
