import React from 'react'
import './style.css'

const Card = ({ imgsrc }) => {
  console.log(imgsrc)
  return (
    <div className='cardAreaAll'>
      {/* <a href='#' className='cardAreaTotal'>
        <div className='cardArea'>
          <img className='imgBox' src={imgsrc}/>
          <h1 className='cardTxt'>Exemplo de texto</h1>
        </div>
      </a> */}
        <div className='cardArea'>
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