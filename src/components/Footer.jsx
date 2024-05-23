import React from 'react'

const Footer = () => {
  return (
    <div className='footer' >
        <div className='columnasFooter'>
            <div>
                <h3>Nuestro respaldo</h3>
                <img src="../../public/images/icontec.png" alt="imagen1" />
                <img src="../../public/images/vigilado-superTransporte.png" alt="imagen2" />
                <div>
                    <img src="../../public/images/Colombia potencia de la vida.png" alt="imagen3" />
                </div>
            </div>
            <div>
                <h3>Horario de admisiones</h3>
                <span>Lunes a viernes de 8:00 am a 7:00 pm</span>
                <hr />
                <span>Sábados                  8:00 am a 5:00 pm</span>
                <hr />
            </div>
            <div>
                <h3>Medio de pago</h3>
                <img src="../../public/images/visa.png" alt="" />
                <img src="../../public/images/masterCard.png" alt="" />
                <img src="../../public/images/american.png" alt="" />
                <img src="../../public/images/pse.png" alt="" />
            </div>
          
        </div>
       <hr />
        <div className='foot'>
            <span>
            2024 Copyright: autoEscuela.com
            </span>
        </div>
       {/*  <div>
        <p>AUTO ESCUELA centro de enseñanza automovilistica | Sede Calle 63: Calle 63 24-28 | Sede Cedritos: Autopista Norte 146-48 Local 253
        Secretaria Educación Resolución 12-0348 | Mintrasporte Resolución 006436 | Vigilados Superintendencia
        </p>
        <p>
        Teléfonos :
        </p>
        <p>
        Sede calle 63: (601) 9144499 | Sede Cedritos: (601) 9144499
        </p>
        </div> */}
    </div>
  )
}

export default Footer
