import React from 'react';
import './style.css';
import Layout from '../../components/Layout';
import { FaMugHot, FaSearch, FaStar, FaTree, FaWarehouse } from 'react-icons/fa';

const Categoria = () => {
    return (
        <Layout>
            <div className='contentCat'>
                <div className='centralizeArea'>
                    <div className='buscaArea'>
                        <div className='buscaAreaIcone'>
                            <FaSearch className='searchCat' />
                        </div>
                        <input type='search' id='barradebusca' placeholder='Procura algo especifico?' />
                    </div>

                    <div className='rowArea'>
                        <FaTree className='tree' />
                        <FaMugHot className='mughot' />
                        <FaWarehouse className='warehouse' />
                    </div>

                    <div className='rowArea'>
                        <a href="http://localhost:3000/Categoria" className='titulo' target="_blank" rel="noopener noreferrer"><p>Chácara/Sítio</p></a>
                        <a href="http://localhost:3000/Categoria" className='titulo' target="_blank" rel="noopener noreferrer"><p>Salão de Festas</p></a>
                        <a href="http://localhost:3000/Categoria" className='titulo' target="_blank" rel="noopener noreferrer"><p>Casa de Festas</p></a>
                    </div>

                    <div className='categoriaContent'>
                        <div className="cardAreaCat">
                            <a className="cardContentCat" href='/MaisInformacoes' target="_blank" rel="noopener noreferrer"></a>
                            <div className="cardtexto">
                                <div className="cardtextoHeader">
                                    <a href='../../pages/Categoria' target="_blank" rel="noopener noreferrer">
                                        <p className='letraMaior'>Casa de lazer</p>
                                    </a>
                                    <FaStar className='star' />
                                </div>
                                <div className='letraMenor'>
                                    <p>2km de distância</p>
                                    <p>10 de dez</p>
                                    <p>R$350,00</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            

        </Layout>
    );
}

export default Categoria;