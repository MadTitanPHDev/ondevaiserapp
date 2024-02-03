import React from 'react'
import imgBox from '../../assets/images/chacara00.jpg'
import '../Card/style.css'

const Card = () => {
  return (
    <div className='cardAreaAll'>

      <a href='#' className='cardAreaTotal'>
        <div className='cardArea'>
          {/* <img className='imgBox' src={imgBox}></img> */}
          <h1 className='cardTxt'>Exemplo de texto</h1>
        </div>
      </a>
    </div>
  )
}

export default Card