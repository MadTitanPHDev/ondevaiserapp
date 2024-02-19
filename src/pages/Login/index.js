import './style.css'
import React from 'react'

const Login = () => {
    return (
        <div className='loginBody'>




            <div className='loginInputArea'>
                <input className='inputLogin' required autocomplete="off" type="text" name="username" id="username" />
                <label className='loginLabel' for='username'>Email</label>
            </div>
            <div className='passArea'>
                <input className='inputSenha' required autocomplete="off" type="password" name="senha" id="senha" />
                <label className='senhaLabel' for='senha'>Senha</label>
            </div>

            {/* <div class="esqPass">
                <label>
                    <input type="checkbox">Lembrar de mim.</input>
                </label>
                <label>
                    <a href="#">Esqueceu sua senha?</a>
                </label>
            </div> */}

            <div className='btnArea'>
                <button className='btnLogin'>
                    Entrar
                </button>
            </div>

        </div>

    )
}

export default Login

