import React from 'react'
import './style.css'
import logoImg from '../../assets/images/LogoOndeVaiSer.png'
import { FaComment, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMandalorian, FaMap, FaMapPin, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaPinterest, FaPinterestP, FaPrescriptionBottle, FaSearchLocation, FaSnowman, FaStar, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import mapa from '../../assets/images/ONDE.png'
import comentarios from '../../assets/images/LogoOndeVaiSer.png'
import logo from "../../assets/images/LogoOndeVaiSer.png"


const SOBRE = () => {
    return (

        <div>
            <div class="responsive-container-block bigContainer">
                <div class="responsive-container-block Container">
                    <div className='logoondevaiser'> 
                        <img className='logoondevaiserimg' src={logo}/>
                    </div>
                    <p class="text-blk heading">

                        SOBRE
                    </p>
                    <p class="text-blk subHeading">
                    "Bem-vindo à nossa página 'Sobre'! Aqui, queremos compartilhar um pouco sobre quem somos e o que nos motiva. 
                    O "onde vai ser?" é a maior empresa de locação de espaços para festas do Brasil.
                        Tratando diretamente com o propietario ou se cadastrando no site gratuitamente.
                    Somos uma equipe dedicada, apaixonada em te ajudar a encontrar o melhor ambiente e localização para seu evento. 
                    Nossa jornada começou no ano de 2023.
                    E desde então temos trabalhado incansavelmente para satisfazer nossos assinantes. 
                    Estamos comprometidos com a excelência, a inovação e, acima de tudo, com a satisfação dos nossos usuários. 
                    Explore nossa página 'Sobre' para saber mais sobre nossa equipe, nossa história e nossa visão para o futuro. 
                    Obrigado por nos visitar e fazer parte da nossa comunidade!"
                       </p>
                    
                    <p>Encontre-nos nas nossas redes sociais abaixo:</p>
                    <div class="social-icons-container">

                        <a class="social-icon">

                            <FaFacebook />
                        </a>
                        <a class="social-icon">

                            <FaLinkedin />
                        </a>
                        <a class="social-icon">

                            <FaInstagram />
                        </a>
                        <a class="social-icon">

                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SOBRE;