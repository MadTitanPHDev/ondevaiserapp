import React from 'react'
import './style.css'
import LogoOndeVaiSer from '../../assets/images/LogoOndeVaiSer.png'
import { FaUser, FaBars } from 'react-icons/fa';


const Header = () => {
    return (
       
        <header>
            <nav class="navbarHeader">
                <div class="logo">
                    <i class="fa-solid fa-font-awesome"></i>
                    <a href='/'><img className='logoHeaderImg' src={LogoOndeVaiSer}></img></a>
                    {/* <a className='logoHeaderImg' href="../../assets/images/LogoOndeVaiSer.png"></a> */}
                </div>
                <div class="menuHeader">
                    <div class="menu-links-Header">
                        <a className='aHeader' href="/">
                            <button class="cta">
                                <span>Home</span>
                                
                            </button>
                        </a>
                        <a className='aHeader' href="/Sobre">
                        <button class="cta">
                                <span>Sobre nós</span>
                                
                            </button>
                            </a>
                        <a className='aHeader' href="/Categoria">
                        <button class="cta">
                                <span>Categoria</span>
                                
                            </button>
                            </a>
                        <a className='aHeader' href="/Cadastro">
                        <button class="cta">
                                <span>Cadastre-se</span>
                                
                            </button>
                        </a>
                        <a className='aHeader' href="/CadastroLocal">
                        <button class="cta">
                                <span>Cadastre seu espaço</span>
                                
                            </button>
                        </a>
                        <a className='aHeader' href="/PerfilUsuario">
                        <button class="cta">
                                <span>Perfil de Usuario</span>
                                
                            </button>
                        </a>
                        {/* <a className='aHeader' href="/">Contato</a> */}
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