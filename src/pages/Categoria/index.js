import React from 'react'
import './style.css'
import Layout from '../../components/Layout'
import { FaMugHot, FaRegHeart, FaSearch, FaStar, FaTree, FaWarehouse } from 'react-icons/fa';

const Categoria = () => {
    return (

        <Layout>
            <div className='contentCat'>
                <div className='buscaArea'>
                    <div className='buscaAreaIcone'>
                        <FaSearch className='searchCat' />
                    </div>

                    <input type='search' id='barradebusca' placeholder='Procura algo especifico?'></input>
                </div>

                <div className='rowArea'>
                    <FaTree className='tree' />
                    <FaMugHot className='mughot' />
                    <FaWarehouse className='warehouse' />
                </div>

                <div className='rowArea'>
                    <a href='../../pages/Categoria' className='titulo'><p>Chácara/Sítio</p></a>
                    <a href='../../pages/Categoria' className='titulo'><p>Salão de Festas</p></a>
                    <a href='../../pages/Categoria' className='titulo'><p>Casa de Festas</p></a>
                </div>

                <div className='categoriaContent'>

                    <div className="cardAreaCat">

                        <a className="cardContentCat" href='/MaisInformacoes'></a>
                        <div className="cardtexto">
                            <FaStar className='star' /> <p className='nota'>4,8</p>
                            <a href='../../pages/Categoria'>
                                <p className='letraMaior'>Casa de laser</p>
                            </a>
                            <div className='letraMenor'>
                                <p>2 km de disntância</p>
                                <p>10 de dez</p>
                                <p>R$350,00</p>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>

        </Layout>

    )
}

export default Categoria 