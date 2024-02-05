import React from 'react'
import './style.css'
import LogoOndeVaiSer from '../../assets/images/LogoOndeVaiSer.png'
import { FaUser } from 'react-icons/fa';


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

            <div className='usarArea'>
                <div className='obilongo'>
                    <div className='risco'></div>
                    <div className='userIco'>
                        <div className='iconU'><FaUser size='2em' /></div>
                        <div className='iconU'><FaUser size='2em' /></div>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header