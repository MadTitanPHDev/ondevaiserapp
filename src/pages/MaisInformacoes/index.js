import React, { useEffect } from 'react'
import './styles.css'
import { FaComment, FaLocationArrow, FaMandalorian, FaMap, FaMapPin, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaPinterest, FaPinterestP, FaPrescriptionBottle, FaSearchLocation, FaSnowman, FaStar, FaWhatsapp } from 'react-icons/fa'
import mapa from './images/mapa.png'
import comentarios from './images/comentarios.jpg'
import img1 from '../../assets/images/casaF/Capa.jpeg'
import img2 from '../../assets/images/casaF/2.jpeg'
import img3 from '../../assets/images/casaF/3.jpeg'
import img4 from '../../assets/images/casaF/6.jpeg'
import Layout from '../../components/Layout'
import bootstrap from 'bootstrap'




const MaisInformacoes = () => {


    return (
        <Layout>
            <div className='bodyMaisInf'>
                <div className='imgMaisInf'>
                    <img src={img1}></img>
                    <img src={img2}></img>
                    <img src={img3}></img>
                    <img src={img4}></img>
                </div>
                <h1 className='tituloMaisInf'>Casa de laser do Fernando</h1>
                <div className='basicInfo'>
                    <div className='pBasifInfo'>
                        <p>A partir de: R$350,00 a diaria</p>
                        <p>Converse com o proprietario</p>
                    </div>
                    <button className='btnMaisInfo'>Whatsapp</button>
                </div>

                <span></span>

                <div className='descrInfoArea'>
                    <div className='descrInfo'>
                        <div className='descrTxtArea'>
                            <p>
                                <strong>Descrição</strong>: Num dia quente de verão, a casa com piscina é um convite ao relaxamento e à diversão. A piscina brilha ao sol, convidando a um mergulho refrescante.
                                Em volta, cadeiras confortáveis oferecem o lugar perfeito para descansar e aproveitar o momento. Com um churrasco na varanda e amigos ao redor,
                                cada instante se torna uma memória alegre e inesquecível.</p>
                        </div>
                        <div className='caracInfoArea'>
                            <h4>Possui:</h4>
                            <ol>
                                <li>Churrasqueira</li>
                                <li>Piscina com cascata</li>
                                <li>1 quarto</li>
                                <li>Ar condicionado</li>
                                <li>Geladeira</li>
                                <li>Ventilador de chão</li>
                                <li>2 banheiros</li>

                            </ol>
                        </div>
                    </div>

                    <div className='ondeInfoArea'>
                        <h4>Endereço: Avenida Washington Luiz, 1934</h4>
                        <div className='mapaInfoArea'>
                            <img src={mapa}></img>
                        </div>
                    </div>
                </div>

                <span></span>

                <div className='comentariosMaisInf'>
                    <img src={comentarios}></img>
                </div>


            </div>
        </Layout>

    )
}

export default MaisInformacoes




