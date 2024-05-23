import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
        <div>
      <img src="../../public/images/autoescuela logo 2.png" alt="" />
      </div>
      
        <nav className='navbar'>
        <ul className='prueba'>
            <li className='lista'>
                <Link  to="/home" >Inicio</Link>
            </li>
            <li className='lista'>
            
                <Link to="/card">Cursos de conducción</Link>
            </li>
            <li className='lista'>
            <Link to="/sedes-horarios">Sedes y Horarios</Link>
            </li>
            <li className='lista'>
            <Link to="/">Iniciar sesion</Link>
            </li>
        </ul> 
      </nav> 
      
    </div>
    
  )
}

export default Navbar
