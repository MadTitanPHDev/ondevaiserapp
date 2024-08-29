import React from 'react';
import './style.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footerAreaTotal'>
            <div className='footerArea'>
                
                <div>
                    <div className='footerRedes'>
                        <div className='footerRedesTxt'>
                            <h1 className='footerRedesTxt'>Nossas redes sociais</h1>
                        </div>
                        <ul className="footerIconRedes">
                            <li className="icon facebook">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <span className="tooltip">Facebook</span>
                                    <span><FaFacebook size='2em' /></span>
                                </a>
                            </li>
                            <li className="icon twitter">
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <span className="tooltip">X</span>
                                    <span><FaTwitter size='2em' /></span>
                                </a>
                            </li>
                            <li className="icon instagram">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <span className="tooltip">Instagram</span>
                                    <span><FaInstagram size='2em' /></span>
                                </a>
                            </li>
                            <li className="icon tiktok">
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                    <span className="tooltip">TikTok</span>
                                    <span><FaTiktok size='2em' /></span>
                                </a>
                            </li>
                            <li className="icon youtube">
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <span className="tooltip">Youtube</span>
                                    <span><FaYoutube size='2em' /></span>
                                </a>
                            </li>
                        </ul>
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
    );
}

export default Footer;
