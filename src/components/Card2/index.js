import React from 'react'
import './style.css'

const Card = ({ imgsrc }) => {
  console.log(imgsrc)
  return (


    <a href='/Categoria3' class="cardH" id='cardH2'> 
        <div class="image-box">
          <img className='imgBox' src={imgsrc} />
        </div>
        <div class="textoCard">
          <h2>Salões de festa</h2>
          <p>Quer uma festa em um ambiente urbano? Essa é a sua categoria de escolha!</p>
        </div>
      
    </a>
  )
}

export default Card