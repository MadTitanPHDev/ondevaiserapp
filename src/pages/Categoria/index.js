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
                       
                        <input type='search' id='barradebusca' 
                        placeholder= 'Qualquer lugar Qualquer semana - Hospedes?'>
                        </input>
                    </div>    
                    
                    <div className='rowArea'>
                        <FaTree className='tree'/>
                        <FaMugHot className='mughot'/>
                        <FaWarehouse className='warehouse'/>
                    </div>

                    <div className='rowArea'>
                        <h4 className="titulo">Chácara/Sítio</h4>
                        <h4 className="titulo">Salão de Festas</h4>
                        <h4 className="titulo">Casa de Festas</h4>
                    </div>

                    <div className="cardArea">
                        <a  className="cardContent">
                            <div className='cardCoracao'>
                                <FaRegHeart className='heart'/>
                            </div>
                        </a>
                        
                        <div className="cardtexto">
                            <FaStar className='star'/> <p className='nota'>4,8</p>
                            <p className='letraMaior'>Praia de São Francisco, Brasil.</p>

                            <div className='letraMenor'>
                                <p>126km de disntância</p>
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
                        
                        <div className="cardtexto">
                            <FaStar className='star'/> <p className='nota'>4,8</p>
                            <p className='letraMaior'>Praia de São Francisco, Brasil.</p>

                            <div className='letraMenor'>
                                <p>126km de disntância</p>
                                <p>10 de dez</p>

                                <p>R$2.476</p>
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