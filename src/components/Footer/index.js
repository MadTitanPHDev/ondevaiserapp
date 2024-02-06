import React from 'react'
import './style.css'
import {FaInstagram} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="rodapeArea">
            <div className="sectionRodapeTitulo">
                <h1>Sobre</h1>
                <h1>Nossas redes sociais</h1>
            </div>
            
            <div className="iconArea">
                <FaInstagram />
                <FaFacebookF />
                <FaTwitter />
            </div>

            <div className="sectionRodapeTexto">
                <h3>Fale conosco:</h3>
                <h3>Email: ondevaiser@gmail.com</h3>
                <h3>Telefone: 0800 4242 4242</h3>
            </div>

        </footer>
  )
}

export default Footer