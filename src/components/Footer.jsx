// Importa la librería principal de React
import React from 'react';

// Define el componente funcional Footer
const Footer = () => {
  return (
    // Contenedor principal del footer con clase CSS 'footer'
    <div className='footer'>
      {/* Contenedor para las columnas del footer */}
      <div className='columnasFooter'>
        
        {/* Primera columna: Nuestro respaldo */}
        <div>
          <h3>Nuestro respaldo</h3>
          {/* Imágenes de respaldo */}
          <img src="../../public/images/icontec.png" alt="imagen1" />
          <img src="../../public/images/vigilado-superTransporte.png" alt="imagen2" />
          <div>
            <img src="../../public/images/Colombia potencia de la vida.png" alt="imagen3" />
          </div>
        </div>
        
        {/* Segunda columna: Horario de admisiones */}
        <div>
          <h3>Horario de admisiones</h3>
          <span>Lunes a viernes de 8:00 am a 7:00 pm</span>
          <hr />
          <span>Sábados 8:00 am a 5:00 pm</span>
          <hr />
        </div>
        
        {/* Tercera columna: Medio de pago */}
        <div>
          <h3>Medio de pago</h3>
          {/* Imágenes de los medios de pago aceptados */}
          <img src="../../public/images/visa.png" alt="Visa" />
          <img src="../../public/images/masterCard.png" alt="MasterCard" />
          <img src="../../public/images/american.png" alt="American Express" />
          <img src="../../public/images/pse.png" alt="PSE" />
        </div>
      </div>
      
      {/* Separador horizontal */}
      <hr />
      
      {/* Pie de página */}
      <div className='foot'>
        <span>
          2024 Copyright: autoEscuela.com
        </span>
      </div>
    </div>
  );
}

// Exporta el componente Footer para que pueda ser usado en otras partes de la aplicación
export default Footer;
