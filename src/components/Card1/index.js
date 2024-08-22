import React from 'react'
import './style.css'


const Card = ({ imgsrc }) => {
  console.log(imgsrc)
  return (
    <a href='/Categoria2' class="cardH" id='cardH1'> 
        <div class="image-box">
          <img className='imgBox' src={imgsrc} />
        </div>
        <div class="textoCard" >
          <h2 id='h2Card'>Chacaras e sitios</h2>
          <p id='pCard'>Quer uma festa em um ambiente urbano? Essa é a sua categoria de escolha!</p>
        </div>
    </a>
  )
}

export default Card