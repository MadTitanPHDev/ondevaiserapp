import React from 'react'
import './style.css'
import Layout from '../../components/Layout'
import { FaMugHot, FaRegHeart, FaSearch, FaStar, FaTree, FaWarehouse } from 'react-icons/fa';

const Categoria = () => {
  return (
    <div className='container'>
        <Layout>
            <section>
                <div className='content'>
                    <div className='buscaArea'>
                        <div className='buscaAreaIcone'>
                            <FaSearch className='search'/>
                        </div>
                       
                        <input type='search' id='barradebusca' placeholder= 'Procure qualquer lugar - Hospedes?'></input>
                    </div>    
                
                    <div className='rowArea'>
                        <FaTree className='tree'/>
                        <FaMugHot className='mughot'/>
                        <FaWarehouse className='warehouse'/>
                    </div>

                    <div className='rowArea'>
                        <a href='../../pages/Categoria' className='titulo'><p>Chácara/Sítio</p></a>
                        <a href='../../pages/Categoria' className='titulo'><p>Salão de Festas</p></a>
                        <a href='../../pages/Categoria' className='titulo'><p>Casa de Festas</p></a>
                    </div>

                    <div className="cardArea">
                        <a  className="cardContent">
                            <div className='cardCoracao'>
                                <FaRegHeart className='heart'/>
                            </div>
                        </a>

                        <div className="cardtexto">
                            
                            <FaStar className='star'/> <p className='nota'>4,8</p>
                            <a href='../../pages/Categoria'><p className='letraMaior'>Praia de São Francisco</p></a>
                            
                            <div className='letraMenor'>
                                <p>126 km de disntância</p>
                                <p>10 de dez</p>
                                <p>R$2.476</p>
                            </div>
                        </div>
                    </div>

                    <div className="cardArea">
                        <a  className="cardContent2">
                            <div className='cardCoracao'>
                                <FaRegHeart className='heart'/>
                            </div>
                        </a>
                        
                        <div className="cardtexto2">
                            <FaStar className='star'/> <p className='nota'>5,0</p>
                            <a href='../../pages/Categoria'><p className='letraMaior'>Chácara Recanto das Palmeiras</p></a>

                            <div className='letraMenor'>
                                <p>100 km de disntância</p>
                                <p>05 de jan</p>
                                <p>R$1.200</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cardArea">
                        <a  className="cardContent3">
                            <div className='cardCoracao'>
                                <FaRegHeart className='heart'/>
                            </div>
                        </a>
                        
                        <div className="cardtexto3">
                            <FaStar className='star'/> <p className='nota'>4,9</p>
                            <a href='../../pages/Categoria'><p className='letraMaior'>Chácara Renascer</p></a>

                            <div className='letraMenor'>
                                <p>80 km de disntância</p>
                                <p>01 de fev</p>
                                <p>R$3.000</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    </div>
  )
}

export default Categoria