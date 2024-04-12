import React from 'react'
import './style.css'
import LogoOndeVaiSer from '../../assets/images/LogoOndeVaiSer.png'
import { FaUser } from 'react-icons/fa';


const Header = () => {
    return (
        <header className='headerAreaTotal'>
            <div className='logoHeader'>
                <a href='/'><img className='logoHeaderImg' src={LogoOndeVaiSer}></img></a>
            </div>

            <div className='btnCadastroArea'>
                <ol>
                    <li>
                        <a href='/Cadastro'>Cadastro</a>
                    </li>
                </ol>
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

            <div className='userArea'>

                <div className='obilongo'>
                    <a href='/Login'>Login</a>
                </div>
            </div>


        </header>

        // <header>
        //     <nav class="navbar">
        //         <div class="logo">
        //             <i class="fa-solid fa-font-awesome"></i>
        //             <a className='logoHeaderImg' href="../../assets/images/LogoOndeVaiSer.png"></a>
        //         </div>
        //         <div class="menu">
        //             <div class="menu-links">
        //                 <a href="#">Home</a>
        //                 <a href="#">About</a>
        //                 <a href="#">Contact</a>
        //                 <a href="#">Blog</a>
        //             </div>
        //             <button class="log-in">Log In</button>
        //         </div>
        //         <div class="menu-btn">
        //             <i class="fa-solid fa-bars"></i>
        //         </div>
        //     </nav>
        // </header>
    )
}

export default Header