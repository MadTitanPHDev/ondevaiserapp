import React, { useState } from 'react';
import './styles.css';
import { FaComment, FaLocationArrow, FaMandalorian, FaMap, FaMapPin, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaPinterest, FaPinterestP, FaPrescriptionBottle, FaSearchLocation, FaSnowman, FaStar, FaWhatsapp } from 'react-icons/fa';
import mapa from './images/mapa.png';
import comentarios from './images/comentarios.jpg';
import img1 from '../../assets/images/casaF/Capa.jpeg';
import img2 from '../../assets/images/casaF/2.jpeg';
import img3 from '../../assets/images/casaF/3.jpeg';
import img4 from '../../assets/images/casaF/6.jpeg';
import pessoa from '../../assets/images/pessoa.png';
import Layout from '../../components/Layout';

const MaisInformacoes = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img1, img2, img3, img4];

    const openModal = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const whatsappNumber = '5518996154442'; // substitua pelo número de telefone desejado
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <Layout>
            <div className='bodyMaisInf'>
                <div className='imgMaisInf'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            onClick={() => openModal(index)}
                            className='thumbnail'
                        />
                    ))}
                </div>
                <h1 className='tituloMaisInf'>Casa de Laser do Fernando</h1>
                <div className='basicInfo'>
                    <div className='pBasifInfo'>
                        <p>A partir de: R$350,00 a diaria</p>
                        <p>Converse com o proprietario</p>
                    </div>
                    <a href={whatsappLink} className='btnMaisInfo' target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp /> Whatsapp
                    </a>
                </div>

                <span></span>

                <div className='descrInfoArea'>
                    <div className='descrInfo'>
                        <div className='descrTxtArea'>
                            <p>
                                <strong>Descrição</strong>: Num dia quente de verão, a casa com piscina é um convite ao relaxamento e à diversão. A piscina brilha ao sol, convidando a um mergulho refrescante.
                                Em volta, cadeiras confortáveis oferecem o lugar perfeito para descansar e aproveitar o momento. Com um churrasco na varanda e amigos ao redor,
                                cada instante se torna uma memória alegre e inesquecível.
                            </p>
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
                        <div className='mapaInfoArea'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.2627406964016!2d-51.40201432379984!3d-22.115955910088786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f439e48a5dcd%3A0xd07349af4543341f!2sAv.%20Washington%20Luiz%2C%201934%20-%20Jardim%20Paulista%2C%20Pres.%20Prudente%20-%20SP%2C%2019023-450!5e0!3m2!1spt-BR!2sbr!4v1722558338666!5m2!1spt-BR!2sbr"
                                width="400"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa do local"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className='avaliacaoComent'>
                    <h1>Avaliações</h1>
                    <div className='avaliacao'>
                        <img className='pessoa' src={pessoa} alt="Imagem do usuário do perfil" />
                        <img className='pessoa' src={pessoa} alt="Imagem do usuário do perfil" />
                        <img className='pessoa' src={pessoa} alt="Imagem do usuário do perfil" />
                    </div>
                    <div className='avaliacao'>
                        <p>Este lugar é incrível, vou recomendar com certeza.</p>
                        <p>Que festa maravilhosa e tudo lindo, estão de parabéns.</p>
                        <p>O estacionamento podia ser maior, mas estava tudo lindo.</p>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='modal'>
                    <span className='close' onClick={closeModal}>&times;</span>
                    <span className='prev' onClick={prevImage}>&#10094;</span>
                    <img className='modal-content' src={images[currentImage]} />
                    <span className='next' onClick={nextImage}>&#10095;</span>
                </div>
            )}
        </Layout>
    );
}

export default MaisInformacoes;
