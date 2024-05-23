// SedesHorarios.js

// Importa React y los componentes Navbar y Footer
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Archivo CSS opcional para estilos

// Define el componente funcional SedesHorarios
const SedesHorarios = () => {
  return (
    <div>
      {/* Componente Navbar para la barra de navegación */}
      <Navbar />
      {/* Contenido de la página */}
      <div className="sedes-horarios">
        <h1>Sede Calle 63:</h1>
        <p>Calle 63 24-28</p>
        <h1>Sede Cedritos:</h1>
        <p>Autopista Norte 146-48 Local 253</p>
        <p>Secretaria Educación Resolución 12-0348</p>
        <p>Mintrasporte Resolución 006436 | Vigilados Superintendencia</p>
        <h1>Teléfonos:</h1>
        <p>Sede calle 63: (601) 914449</p>
        <p>Sede Cedritos: (601) 9144499</p>
      </div>
      {/* Componente Footer para el pie de página */}
      <Footer />
    </div>
  );
};

// Exporta el componente SedesHorarios para que pueda ser utilizado en otras partes de la aplicación
export default SedesHorarios;
