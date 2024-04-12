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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corrupti porro quis.</p>
        </div>
    </div>
  )
}

export default Card