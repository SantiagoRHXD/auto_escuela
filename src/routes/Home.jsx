import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    
    <div className='bienvenida'>
        <Navbar />
      <div className='textoBienvenida'>
      <h1>Bienvenido a auto escuela Tuluá</h1>
      <p>En la Auto Escuela Tuluá, nos dedicamos a ofrecer una experiencia de aprendizaje de calidad para todos aquellos que desean adquirir conocimientos y habilidades en el ámbito de la conducción. Nuestro compromiso se basa en brindar un servicio integral, seguro y eficiente que no solo prepare a nuestros estudiantes para obtener su licencia de conducir, sino que también fomente una cultura de responsabilidad y respeto en las vías.</p>
      <p>Con más de 10 años de experiencia en la formación de conductores, nos enorgullece ser reconocidos como líderes en el sector. Nuestro equipo de instructores altamente capacitados y dedicados está comprometido con el éxito de cada estudiante, proporcionando una enseñanza personalizada y adaptada a las necesidades individuales de aprendizaje.</p>
      <p>En nuestra plataforma, encontrarás una amplia variedad de cursos y servicios diseñados para cubrir todas las necesidades de formación vial. Desde cursos básicos para conductores principiantes hasta programas especializados para aquellos que desean mejorar sus habilidades de manejo, estamos aquí para acompañarte en cada paso del camino hacia la seguridad y la excelencia en la conducción.</p>
      <p>Explora nuestra página para descubrir más sobre nuestros servicios, horarios de clases, tarifas y promociones. ¡Esperamos poder ayudarte a alcanzar tus metas de conducir de manera segura y confiada! </p>
      </div >
      <div className='imghome'>
      <img src="../prueba jeje.jpeg" alt="" />{/* ../../public/images/manEnseñando.jpeg */}
      <img  src="../../public/images/parqueadero.jpeg" alt="" />
      </div>
      <div className="informacion">
        <h1>Auto escuela Tuluá, mejorando la calidad de vida en la vía</h1>
        <p>Mejoramos la calidad de vida de los actores en la vía, a través de cursos de conducción, seminarios, certificación de conductores y campañas de seguridad vial y cultura ciudadana.</p>
      </div>

      <section className="informacion-adicional">
        <div>
          <img src="../../public/images/chulito.png" alt="" />
        </div>
        <div>
          <h2>Confianza</h2>
          <ul>
            <li>Primero nuestro compromiso con la vida</li>
            <li>Mas de 18 años educando personas con responsabilidad</li>
            <li>Equipo humano experto y actualizado</li>
          </ul>
        </div>
        <div>
          <img src="../../public/images/escudo.png" alt="" />
        </div>
        <div>
          <h2>Seguridad</h2>
          <ul>
            <li>Vigilados y legalmente Certificados</li>
            <li>Mas de 2,400 M2 en áreas seguras de aprendizaje</li>
            <li>Cultura de Mejoramiento continuo</li>
          </ul>
        </div>
        <div>
          <img src="../../public/images/luz.png" alt="" />
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
      <Footer />

    </div>
  )
}

export default Home
