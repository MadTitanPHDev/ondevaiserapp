import React from 'react'
import './style.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footerAreaTotal'>
            <div className='footerArea'>
                <div className='footerSobre'>
                    <a href='/Sobre'><h1 className='footerSobreTxt'>Sobre</h1></a>
                </div>
                <div>
                <div className='footerRedes'>
                    <div className='footerRedesTxt'>
                        <h1 className='footerRedesTxt'>Nossas redes sociais</h1>
                    </div>
                    <ul class="footerIconRedes">
                        <li class="icon facebook">
                            <span class="tooltip">Facebook</span>
                            <span><i class="fab fa-facebook-f"><FaFacebook size='2em' /></i></span>
                        </li>
                        <li class="icon twitter">
                            <span class="tooltip">X</span>
                            <span><i class="fab fa-twitter"><FaTwitter size='2em' /></i></span>
                        </li>
                        <li class="icon instagram">
                            <span class="tooltip">Instagram</span>
                            <span><i class="fab fa-instagram"><FaInstagram size='2em' /></i></span>
                        </li>
                        <li class="icon tiktok">
                            <span class="tooltip">TikTok</span>
                            <span><i class="fab fa-tiktok"><FaTiktok size='2em' /></i></span>
                        </li>
                        <li class="icon youtube">
                            <span class="tooltip">Youtube</span>
                            <span><i class="fab fa-youtube"><FaYoutube size='2em' /></i></span>
                        </li>
                    </ul>
                    {/* <div className='footerIconRedes'>


                        <a href='https://www.facebook.com/' target="_blank"><div className='iconF'><FaFacebook size='2em' /></div></a>
                        <a href='https://www.instagram.com/' target="_blank"><div className='iconI'><FaInstagram size='2em' /></div></a>
                        <a href='https://twitter.com/' target="_blank"><div className='iconX'><FaTwitter size='2em' /></div></a>
                    </div> */}
                </div>

                <div className='footerContatos'>
                    <h3 className='faleConoscoTxt'>
                        Fale conosco:
                    </h3>
                    <h3 className='footerEmailTxt'>
                        Email: ondevaiser@gmail.com
                    </h3>
                    <h3 className='footerTelTxt'>
                        Telefone: 0800 4242 4242
                    </h3>
                </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer