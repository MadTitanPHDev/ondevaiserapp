import './style.css'
import React from 'react'
import Layout from '../../components/Layout'

const Login = () => {
    return (
        <Layout>
            <div className='loginBody'>

                <div className='loginBodyArea'>
                    <diiv className='loginTxtArea'>
                        <h1 className='loginTxt'>Boas vindas novamente!</h1>
                    </diiv>
                    <div className='loginInputArea'>
                        <input className='inputLogin' required autocomplete="off" type="text" name="username" id="username" />
                        <label className='loginLabel' for='username'>Email</label>
                    </div>

                    <div className='passArea'>
                        <input className='inputSenha' required autocomplete="off" type="password" name="senha" id="senha" />
                        <label className='senhaLabel' for='senha'>Senha</label>
                    </div>

                    <div class="esqSenhaArea">
                        <label>
                            <input type='checkbox'></input>
                            Lembre de mim.
                        </label>
                        <label>
                            <a href="#">Esqueceu a senha?</a>
                        </label>
                    </div>

                    <div className='btnAreaLogin'>
                        <a href='/'>
                        {/* <button className='btnLogin'>
                            Entrar
                        </button> */}
                        <button className='btnLogin' onclick="history.back()">Entrar</button>
                        </a>
                        
                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default Login

