import React from 'react'
import '../Card/style.css'

const Card = ({imgsrc}) => {
  console.log(imgsrc)
  return (
    <div className='cardAreaAll'>

      <a href='#' className='cardAreaTotal'>
        <div className='cardArea'>
          <img className='imgBox' src={imgsrc}/>
          <h1 className='cardTxt'>Exemplo de texto</h1>
        </div>
      </a>
    </div>
  )
}

export default Card