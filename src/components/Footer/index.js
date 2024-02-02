import React from 'react'
import './style.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footerAreaTotal'>
            <div className='footerArea'>
                <div className='footerSobre'>
                    <a><h1 className='footerSobreTxt'>Sobre</h1></a>
                </div>

                <div className='footerRedes'>
                    <div className='footerRedesTxt'>
                        <h1 className='footerRedesTxt'>Nossas redes sociais</h1>
                    </div>

                    <div className='footerIconRedes'>
                        <div className='iconF'><FaFacebook size='2em' /></div>
                        <div className='iconI'><FaInstagram size='2em' /></div>
                        <div className='iconX'><FaTwitter size='2em' /></div>
                    </div>
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
        </footer>
    )
}

export default Footer