import React from 'react';
import './style.css';
import Layout from '../../components/Layout';
import { FaMugHot, FaSearch, FaStar, FaTree, FaWarehouse } from 'react-icons/fa';
import { getCategoria } from '../Request/show';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';


const Categoria = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const { data: locaisCategoria, isLoading, handleClickDetails } = useQuery(['getCategoria', { id }], getCategoria, {
        enabled: !!id
    })
    if (isLoading) {
        return <div>carregando...</div>
    }
    console.log(id)
    console.log(locaisCategoria)
    return (
        <Layout>
            <div className='contentCat'>
                <div className='centralizeArea'>

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

                    <ul className='categoriaContainer'>

                        {locaisCategoria.map((item, index) => (
                            <li onClick={() => handleClickDetails(item.id)} className='categoriaContent' key={index}>
                                <div className="cardAreaCat">
                                    <a className="cardContentCat" href='/MaisInformacoes' target="_blank" rel="noopener noreferrer">
                                    <img src={item?.img} alt='local' className='infoImg'  />
                                    </a>
                                    <div className="cardtexto">
                                        <div className="cardtextoHeader">
                                            <a href='../../pages/Categoria' target="_blank" rel="noopener noreferrer">
                                                <p className='letraMaior'>{item.nomeLocal}</p>
                                            </a>
                                            <FaStar className='star' />
                                        </div>
                                        <div className='letraMenor'>
                                            <p>2km de distância</p>
                                            <p>10 de dez</p>
                                            <p>R${item.valor}</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        ))}


                    </ul>


                </div>
            </div>


        </Layout>
    );
}

export default Categoria;