import React from 'react'
import './styles.css'
import imagem from './images/recantodospassaros.jpeg'
import { FaComment, FaLocationArrow, FaMandalorian, FaMap, FaMapPin, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaPinterest, FaPinterestP, FaPrescriptionBottle, FaSearchLocation, FaSnowman, FaStar, FaWhatsapp } from 'react-icons/fa'
import mapa from './images/mapa.png'
import comentarios from './images/comentarios.jpg'
import Layout from '../../components/Layout'
import Swiper from 'swiper'

import ImageCarousel from '../../components/Carrousel/carousel'

const MaisInformacoes = () => {

    return (

        <section className='maisInfoArea'>
            <Layout>
                
                <div className='carrossel1'>
                    <h1>Meu Carrossel de Imagens</h1>
                    <ImageCarousel />
                </div>

            </Layout>
        </section>


    )
}

export default MaisInformacoes




