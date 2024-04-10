import React from 'react'
import './styles.css'
import imagem from './images/recantodospassaros.jpeg'
import { FaComment, FaLocationArrow, FaMandalorian, FaMap, FaMapPin, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaPinterest, FaPinterestP, FaPrescriptionBottle, FaSearchLocation, FaSnowman, FaStar, FaWhatsapp } from 'react-icons/fa'
import mapa from './images/mapa.png'
import comentarios from './images/comentarios.jpg'
import Layout from '../../components/Layout'

const Recantodospassaros = () => {
    return (
        <section className='container'>
            <Layout>
                <h1>Recanto dos Pássaros</h1>
                <img src={imagem} className='foto' />

                <div >
                    <div className='map'>
                        <FaStar />
                        <p>4.8</p>
                    </div>
                    <div className='map'>
                        <FaPeopleCarry />
                        <p>Capacidade: 200 pessoas</p>
                        <p>Categoria: Chácara</p>
                    </div>

                    <div className='map'>
                        <FaMap />
                        <p>Estado: São Paulo</p>
                    </div>

                    <div className='map'>
                        <FaSearchLocation />
                        <p>Cidade: Presidente Prudente</p>
                    </div>

                    <div className='map'>
                        <FaMapPin />
                        <p>Bairro: Vila Nova</p>
                    </div>


                    <div className='map'>
                        <FaWhatsapp />
                        <p>Entre em contato: (18)988521421</p>
                    </div>
                    <div className='map'>
                        <FaLocationArrow />
                        <p>Endereço: Manoel José nº654</p>
                    </div>
                    <img className='localiza' src={mapa} />

                    <div className='map'>
                        <FaStar />
                        <p>4.8 Avaliaçao</p>
                    </div>
                    <div className='avalia'>
                        <FaComment />
                        <p>378 Comentários</p>
                    </div>

                    <div>
                        <img src={comentarios} className='comentarios' />
                    </div>
                </div>

            </Layout>
        </section>


    )
}

export default Recantodospassaros




