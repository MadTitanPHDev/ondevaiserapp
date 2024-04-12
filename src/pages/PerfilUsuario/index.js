import React from 'react'
import './style.css'
import Layout from '../../components/Layout'
import pessoa from '../../assets/images/pessoa.png'
import chácara1 from '../../assets/images/Chácara 1.jpg'
import chácara3 from '../../assets/images/Chácara 3.jpg'

const PerfilUsuario = () => {
  return (
    <div className='perfilArea'>
        <Layout>
            <section className='section'>

                <div className='content2'>

                    <div className='areaSair'>
                        <p>Área Exclusiva de Eloisa.</p>
                    </div>
                    
                    <a href='http://localhost:3000'><button className='buttonSair' id='buttonSair'>Sair</button></a>
                    
                    <div class="fotodesc">

                        <div class="foto">
                            <img className='pessoa' src={pessoa} alt="Imagem do usuário do perfil"/>
                        </div>

                        <div class="descricao">
                            <h1>Eloisa Salomão dos Santos Favareto</h1>
                            <p><strong>Email:</strong> eloisassf4@gmail.com</p>
                            <p><strong>Idade:</strong> 26 anos</p>
                            <p><strong>Cidade:</strong> Presidente Prudente</p>
                            <p><strong>Contato:</strong> (18)99000-0000</p>
                        </div>

                    </div>

                    <div class="informacoesadicionais">

                        <h1>Lugares Cadastrados</h1>

                        <img className='chacara1' src={chácara1} alt="Imagem de uma chácara"/>

                        <div className='textoLugar1'>
                            <strong className='titulo'><p>Chácara São Francisco</p></strong>
                            <p><strong>Capacidade:</strong> 200 pessoas</p>
                            <p><strong>Cidade:</strong> Presidente Prudente</p>
                            <p><strong>Endereço:</strong> Av. Joaquim Constantino, 6600</p>
                            <p><strong>Bairro:</strong> Vila Nova Prudente</p>
                            <p><strong>CEP:</strong> 19021-203</p>
                            <p><strong>Valor:</strong> R$900,00</p>
                            <p><strong>Características:</strong> Cozinha, Acessibilidade, Churrascaria, Espaço aberto, Estacionamento.</p>
                            <p><strong>Descrição:</strong> Um lugar para qualquer tipo de festa, com área para churrasco com piscina contendo degrau para crianças.</p>
                            <p><strong>Avaliação:</strong>4.8</p>
                        </div>

                        <img className='chacara3' src={chácara3} alt="Imagem de uma chácara"/>

                        <div className='textoLugar2'>
                            <strong className='titulo'><p>Casa de festas K.O.</p></strong>
                            <p><strong>Capacidade:</strong> 170 pessoas</p>
                            <p><strong>Cidade:</strong> Álvares Machado</p>
                            <p><strong>Endereço:</strong> Av. São Gabriel, 2001</p>
                            <p><strong>Bairro:</strong> Jardim Industrial</p>
                            <p><strong>CEP:</strong> 19020-100</p>
                            <p><strong>Valor:</strong> R$1200,00</p>
                            <p><strong>Características:</strong> Cozinha, Acessibilidade, Churrascaria, Espaço aberto, Piscina.</p>
                            <p><strong>Descrição:</strong> Um espaço amplo, com uma vista de tirar o fôlego, contendo um espaço com playground</p>
                            <p><strong>Avaliação:</strong>5.0</p>
                        </div>

                        <a href='http://localhost:3000/categoria'><button className='button' id='button'>Editar</button></a>

                        <div className='avaliacaoComent'>

                            <h1>Avaliação</h1>

                            <div className='avaliacao'>
                                <img className='pessoa' src={pessoa} alt="Imagem do usuário do perfil"/>
                                <img className='pessoa' src={pessoa} alt="Imagem do usuário do perfil"/>
                                <img className='pessoa' src={pessoa} alt="Imagem do usuário do perfil"/>
                            </div>

                            <div className='avaliacao'>
                                <p>Este lugar é incrível, vou recomendar com certeza.</p>
                                <p>Que festa maravilhosa e tudo lindo, estão de parabéns.</p>
                                <p>O estacionamento podia ser maior, mas estava tudo lindo.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </Layout>
    </div>
  )
}

export default PerfilUsuario