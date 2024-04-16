import React from 'react'
import './style.css'
import LogoOndeVaiSer from '../../assets/images/LogoOndeVaiSer.png'
import { FaUser, FaBars } from 'react-icons/fa';


const Header = () => {
    return (
        // <header className='headerAreaTotal'>
        //     <div className='logoHeader'>
        //         <a href='/'><img className='logoHeaderImg' src={LogoOndeVaiSer}></img></a>
        //     </div>

        //     <div className='btnCadastroArea'>
        //         <ol>
        //             <li>
        //                 <a href='/Cadastro'>Cadastro</a>
        //             </li>
        //         </ol>
        //     </div>

        //     <div className='ondeAreaHeaderAll'>
        //         <div className='ondeAreaHeader'>
        //             <h1 className='ondeTxtHeader'>Onde?</h1>
        //         </div>
        //         <select className='cidadesAreaHeader'>
        //             <option value="0">SELECIONE A CIDADE</option>
        //             <option value="1">SP - PRESIDENTE PRUDENTE</option>
        //             <option value="2">SP - SANTO EXPEDITO</option>
        //             <option value="3">SP - PIRAPOZINHO</option>
        //             <option value="4">SP - INDIANA</option>
        //         </select>
        //     </div>

        //     <div className='userArea'>

        //     <a href='/Login'> <div className='obilongo'>
        //             Login
        //         </div></a>
        //     </div>


        // </header>

        <header>
            <nav class="navbarHeader">
                <div class="logo">
                    <i class="fa-solid fa-font-awesome"></i>
                    <a href='/'><img className='logoHeaderImg' src={LogoOndeVaiSer}></img></a>
                    {/* <a className='logoHeaderImg' href="../../assets/images/LogoOndeVaiSer.png"></a> */}
                </div>
                <div class="menuHeader">
                    <div class="menu-links-Header">
                        <a className='aHeader' href="/">Home</a>
                        <a className='aHeader' href="/Cadastro">Cadastre-se</a>
                        <a className='aHeader' href="/CadastroLocal">Cadastre seu espaço</a>
                        <a className='aHeader' href="/Sobre">Sobre nós</a>
                        <a className='aHeader' href="/">Contato</a>
                    </div>
                    <a href='/Login'>
                    <button class="btnLoginHeader">Entrar</button>
                    </a>
                </div>
                <div class="menu-btn">
                    <i class="fa-solid fa-bars"><FaBars size='2em' /></i>
                </div>
            </nav>
        </header>
    )
}

export default Header