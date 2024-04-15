import './style.css'
import React from 'react'
import Layout from '../../components/Layout'

const Login = () => {
    return (
        <Layout>
            <div className='loginBody'>

                <div className='loginBodyArea'>
                    <div className='loginTxtArea'>
                        <h1 className='loginTxt'>Boas vindas novamente!</h1>
                    </div>
                    <div className='loginInputArea'>
                        <input className='inputLogin' required autocomplete="off" type="text" name="username" id="username" />
                        <label className='loginLabel' for='username'>Email</label>
                    </div>

                    <div className='passArea'>
                        <input className='inputSenha' required autocomplete="off" type="password" name="senha" id="senha" />
                        <label className='senhaLabel' for='senha'>Senha</label>
                    </div>

                    <div class="esqSenhaArea">
                        {/* <label class="checkbox-container"> 
                            <input type='checkbox' checked="" className='custom-checkbox'></input>
                            <span class="checkmark"></span>
                            Lembre de mim.
                        </label> */}
                        <div class="checkbox-wrapper-46">
                            <input type="checkbox" id="cbx-46" class="inp-cbx" />
                            <label for="cbx-46" class="cbx"
                            ><span>
                                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
                                ><span>Lembre de mim.</span>
                            </label>
                        </div>



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

