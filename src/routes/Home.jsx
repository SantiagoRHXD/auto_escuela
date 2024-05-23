// Importa las librerías necesarias de React
import React from 'react';

// Importa los componentes Navbar y Footer
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define el componente funcional Home
const Home = () => {
  return (
    <div className='bienvenida'>
      {/* Renderiza el componente Navbar */}
      <Navbar />

      {/* Sección de bienvenida con un texto descriptivo */}
      <div className='textoBienvenida'>
        <h1>Bienvenido a auto escuela Tuluá</h1>
        <p>En la Auto Escuela Tuluá, nos dedicamos a ofrecer una experiencia de aprendizaje de calidad para todos aquellos que desean adquirir conocimientos y habilidades en el ámbito de la conducción. Nuestro compromiso se basa en brindar un servicio integral, seguro y eficiente que no solo prepare a nuestros estudiantes para obtener su licencia de conducir, sino que también fomente una cultura de responsabilidad y respeto en las vías.</p>
        <p>Con más de 10 años de experiencia en la formación de conductores, nos enorgullece ser reconocidos como líderes en el sector. Nuestro equipo de instructores altamente capacitados y dedicados está comprometido con el éxito de cada estudiante, proporcionando una enseñanza personalizada y adaptada a las necesidades individuales de aprendizaje.</p>
        <p>En nuestra plataforma, encontrarás una amplia variedad de cursos y servicios diseñados para cubrir todas las necesidades de formación vial. Desde cursos básicos para conductores principiantes hasta programas especializados para aquellos que desean mejorar sus habilidades de manejo, estamos aquí para acompañarte en cada paso del camino hacia la seguridad y la excelencia en la conducción.</p>
        <p>Explora nuestra página para descubrir más sobre nuestros servicios, horarios de clases, tarifas y promociones. ¡Esperamos poder ayudarte a alcanzar tus metas de conducir de manera segura y confiada!</p>
      </div>

      {/* Sección de imágenes relacionadas con la autoescuela */}
      <div className='imghome'>
        <img src="../../public/images/manEnseñando.jpeg" alt="Instructor enseñando" />
        <img src="../../public/images/parqueadero.jpeg" alt="Parqueadero" />
      </div>

      {/* Sección con información adicional sobre la autoescuela */}
      <div className="informacion">
        <h1>Auto escuela Tuluá, mejorando la calidad de vida en la vía</h1>
        <p>Mejoramos la calidad de vida de los actores en la vía, a través de cursos de conducción, seminarios, certificación de conductores y campañas de seguridad vial y cultura ciudadana.</p>
      </div>

      {/* Sección con información adicional dividida en confianza, seguridad e innovación */}
      <section className="informacion-adicional">
        {/* Bloque de información sobre confianza */}
        <div>
          <img src="../../public/images/chulito.png" alt="Confianza" />
        </div>
        <div>
          <h2>Confianza</h2>
          <ul>
            <li>Primero nuestro compromiso con la vida</li>
            <li>Más de 18 años educando personas con responsabilidad</li>
            <li>Equipo humano experto y actualizado</li>
          </ul>
        </div>

        {/* Bloque de información sobre seguridad */}
        <div>
          <img src="../../public/images/escudo.png" alt="Seguridad" />
        </div>
        <div>
          <h2>Seguridad</h2>
          <ul>
            <li>Vigilados y legalmente Certificados</li>
            <li>Más de 2,400 M2 en áreas seguras de aprendizaje</li>
            <li>Cultura de mejoramiento continuo</li>
          </ul>
        </div>

        {/* Bloque de información sobre innovación */}
        <div>
          <img src="../../public/images/luz.png" alt="Innovación" />
        </div>
        <div>
          <h2>Innovación</h2>
          <ul>
            <li>Énfasis en seguridad vial y Cultura ciudadana</li>
            <li>Parque automotor moderno y en continua renovación</li>
            <li>Amplias aulas inteligentes</li>
          </ul>
        </div>
      </section>

      {/* Renderiza el componente Footer */}
      <Footer />
    </div>
  );
}

// Exporta el componente Home para que pueda ser utilizado en otras partes de la aplicación
export default Home;
