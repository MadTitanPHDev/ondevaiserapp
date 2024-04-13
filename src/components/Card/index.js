import React from 'react'
import './style.css'

const Card = ({ imgsrc }) => {
  console.log(imgsrc)
  return (
    // <div className='cardAreaAll'>

    //   <div className='cardAreaC'>
    //     <a href='/Categoria'>
    //       <img className='imgBox' src={imgsrc} />
    //     </a>
    //   </div>

    //   <div className='texto'>
    //     <h2>Exemplo de texto</h2>
    //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti porro quis.</p>
    //   </div>
    // </div>

    <div class="card">
      <div class="image-box">
        <img className='imgBox' src={imgsrc} />
      </div>
      <div class="textoCard">
        <h2>Casas de Lazer</h2>
        <p>Quer uma festa em um ambiente urbano? Essa é a sua categoria de escolha!</p>
      </div>
    </div>
  )
}

export default Card