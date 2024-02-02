import React from 'react'
import './style.css'
import LogoOndeVaiSer from '../../assets/images/LogoOndeVaiSer.png'

const Header = () => {
  return (
    <header className='headerAreaTotal'>
            <div className='logoHeader'>
            <img className='logoHeaderImg' src={LogoOndeVaiSer}></img>
            </div>

            <div className='ondeAreaHeaderAll'>
                <div className='ondeAreaHeader'>
                    <h1 className='ondeTxtHeader'>Onde?</h1>
                </div>
                <select className='cidadesAreaHeader'>
                    <option value="0">SELECIONE A CIDADE</option>
                    <option value="1">SP - PRESIDENTE PRUDENTE</option>
                    <option value="2">SP - SANTO EXPEDITO</option>
                    <option value="3">SP - PIRAPOZINHO</option>
                    <option value="4">SP - INDIANA</option>
                </select>
            </div>


        </header>
  )
}

export default Header