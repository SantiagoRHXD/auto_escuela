// SedesHorarios.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
; // Archivo CSS opcional para estilos

const SedesHorarios = () => {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default SedesHorarios;
