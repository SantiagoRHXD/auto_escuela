import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './routes/CardList';
import Compra from './routes/Compra';
import SedesHorarios from './routes/SedesHorarios';
import Home from './routes/Home';
import InicioSesion from './routes/InicioSesion';
import Registro from './routes/Registro';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<InicioSesion />} />
          <Route path="/home" element={<Home />} />
          <Route path="/card" element={<CardList />} />
          <Route path="/compra/:courseId" element={<Compra />} />
          <Route path="/sedes-horarios" element={<SedesHorarios />} /> 
          <Route path="/registro" element={<Registro />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
