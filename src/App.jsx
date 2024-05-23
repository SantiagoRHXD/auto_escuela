// Importa la librería principal de React
import React from 'react';

// Importa componentes necesarios de 'react-router-dom' para la navegación
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes que se utilizarán como páginas en la aplicación
import CardList from './routes/CardList';
import Compra from './routes/Compra';
import SedesHorarios from './routes/SedesHorarios';
import Home from './routes/Home';
import InicioSesion from './routes/InicioSesion';
import Registro from './routes/Registro';

// Define el componente principal de la aplicación
function App() {
  return (
    // Envuelve la aplicación en un Router para manejar la navegación
    <Router>
      <div>
        {/* Define las rutas de la aplicación */}
        <Routes>
          {/* Ruta raíz que renderiza el componente InicioSesion */}
          <Route path="/" element={<InicioSesion />} />
          
          {/* Ruta para la página de inicio que renderiza el componente Home */}
          <Route path="/home" element={<Home />} />
          
          {/* Ruta para la lista de tarjetas que renderiza el componente CardList */}
          <Route path="/card" element={<CardList />} />
          
          {/* Ruta para la página de compra que renderiza el componente Compra.
              La ruta incluye un parámetro dinámico courseId */}
          <Route path="/compra/:courseId" element={<Compra />} />
          
          {/* Ruta para la página de sedes y horarios que renderiza el componente SedesHorarios */}
          <Route path="/sedes-horarios" element={<SedesHorarios />} /> 
          
          {/* Ruta para la página de registro que renderiza el componente Registro */}
          <Route path="/registro" element={<Registro />} /> 
        </Routes>
      </div>
    </Router>
  );
}

// Exporta el componente App como el componente principal de la aplicación
export default App;
