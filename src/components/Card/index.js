import React from 'react'
import './style.css'

const Card = ({ imgsrc }) => {
  console.log(imgsrc)
  return (
    <div className='cardAreaAll'>
      
        <div className='cardAreaC'>
          <img className='imgBox' src={imgsrc} />
        </div>

        <div className='texto'>
          <h2>Exemplo de texto</h2>
        </div>
    </div>
  )
}

export default Card