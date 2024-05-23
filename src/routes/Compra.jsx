import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Compra = () => {
  const { courseId } = useParams();
  const [addMedicalExams, setAddMedicalExams] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Automóvil y/o camioneta particular",
      description: "La alternativa cómoda y segura para compartir con tu familia",
      price: 1138000,
      imageUrl: "../../public/images/automovil.jpeg"
    },
    {
      id: 2,
      title: "Moto - A2",
      description: "El vehículo que te llevará a tus nuevas aventuras",
      price: 650000,
      imageUrl: "../../public/images/moto.jpeg"
    },
    {
      id: 3,
      title: "Moto - A1",
      description: "El vehículo que te llevará a tus nuevas aventuras",
      price: 450000,
      imageUrl: "../../public/images/moto1.jpeg"
    },
    {
      id: 4,
      title: "Automovil y moto - B1 y A1 o B1 y A2",
      description: "El vehículo que te llevará a tus nuevas aventuras",
      price: 1588000,
      imageUrl: "../../public/images/automovil y moto.jpeg"
    },
    {
      id: 5,
      title: "Autoservicio Publico - C1",
      description: "Vehículo al servicio de tu negocio y comunidad",
      price: 1452000,
      imageUrl: "../../public/images/bus12.jpeg"
    },
    {
      id: 6,
      title: "Camiones Buses y Busetas -C2",
      description: "El vehículo que te llevará a tus nuevas aventuras",
      price: 1450000,
      imageUrl: "../../public/images/imagenCamion.jpeg"
    },
    {
      id: 7,
      title: "Recategorización de Licencia - B1 A C1",
      description: "El vehículo que te llevará a tus nuevas aventuras",
      price: 1000000,
      imageUrl: "../../public/images/automovil12.jpeg"
    }
  ];

  const course = courses.find(course => course.id === parseInt(courseId));
  const examPrice = 215000;
  const totalPrice = course ? (addMedicalExams ? course.price + examPrice : course.price) : 0;

  return (
    <div className="compra-container">
      <Navbar />
      {course ? (
        <>
          <h2>Finaliza tu compra</h2>
          <div className="compra-content">
            <div className="compra-form">
              <h3>Datos del comprador</h3>
              <form>
                <label>
                  Nombre:
                  <input type="text" name="nombre" required />
                </label>
                <label>
                  Apellidos:
                  <input type="text" name="apellidos" required />
                </label>
                <label>
                  Tipo de Documento:
                  <input type="text" name="tipoDocumento" required />
                </label>
                <label>
                  Número de Documento:
                  <input type="text" name="numeroDocumento" required />
                </label>
                <label>
                  Teléfono:
                  <input type="tel" name="telefono" required />
                </label>
                <label>
                  Correo Electrónico:
                  <input type="email" name="correoElectronico" required />
                </label>
              </form>
            </div>
            <div className="compra-summary">
              <h3>Resumen de tu compra</h3>
              <hr />
              <br />
              
              <img src={course.imageUrl} alt={course.title} className="summary-image" />
              <h4 >{course.title}</h4>
              <p>{course.description}</p>
              <p className='precio'> ${course.price.toLocaleString()}</p>
              <hr />
              <label>
                <input
                  type="checkbox"
                  checked={addMedicalExams}
                  onChange={() => setAddMedicalExams(!addMedicalExams)}
                />
                Agrega exámenes médicos - ${examPrice.toLocaleString()}
              </label>
              <h4 className='precio'>Total: ${totalPrice.toLocaleString()}</h4>
              <div className='buttons-summary'>
              <button className="compra-button">Comprar ahora</button>
              <button className="compra-button" onClick={() => window.history.back()}>Regresar</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Curso no encontrado</p>
      )}
      <Footer />
    </div>
  );
};

export default Compra;
