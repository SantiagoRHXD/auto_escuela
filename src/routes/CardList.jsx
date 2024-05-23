import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const CardList = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Automóvil y/o camioneta particular",
      description: "Curso para aprender a manejar automóviles particulares.",
      price: "$1.138.000",
      imageUrl: "../../public/images/automovil.jpeg"
    },
    {
      id: 2,
      title: "Moto - A2",
      description: "Curso para obtener licencia de moto A2.",
      price: "$650.000",
      imageUrl: "../../public/images/moto.jpeg"
    },
    {
      id: 3,
      title: "Moto - A1",
      description: "Curso para obtener licencia de moto A1.",
      price: "$450.000",
      imageUrl: "../../public/images/moto1.jpeg"
    },
    {
      id: 4,
      title: "Automóvil y moto - B1 y A1",
      description: "Curso para obtener licencias B1 y A1.",
      price: "$1.858.000",
      imageUrl: "../../public/images/automovil y moto.jpeg"
    },
    {
      id: 5,
      title: "Servicio Público - C1",
      description: "Curso para obtener licencia de servicio público C1.",
      price: "$1.452.000",
      imageUrl: "../../public/images/bus12.jpeg"
    },
    {
      id: 6,
      title: "Camiones, Buses y Busetas - C2",
      description: "Curso para obtener licencia de C2.",
      price: "$1.450.000",
      imageUrl: "../../public/images/imagenCamion.jpeg"
    },
    {
      id: 7,
      title: "Recategorización de Licencia - B1 a C1",
      description: "Curso para recategorizar de B1 a C1.",
      price: "$1.000.000",
      imageUrl: "../../public/images/automovil12.jpeg"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="card-inicio">
        <h1>Aprende a conducir</h1>
        <h3>Elije tu curso hoy</h3>
      </div>
      <div className="card-container">
        {courses.map(course => (
          <div key={course.id} className="card">
            <img src={course.imageUrl} alt={course.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{course.title}</h2>
              <p className="card-description">{course.description}</p>
              <p className="card-price">{course.price}</p>
              <button
                className="card-button"
                onClick={() => navigate(`/compra/${course.id}`)}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CardList;
