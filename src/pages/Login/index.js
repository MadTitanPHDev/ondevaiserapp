import './style.css'
import React from 'react'

const Login = () => {
    return (
        <div className='loginBody'>
            <div className='inputArea'>
                <input className='inputLogin' required autocomplete="off" type="text" name="username" id="username" />
                <label className='loginLabel' for='username'>Nome de usuario</label>
            </div>
            <div className='passArea'>
                <input className='inputSenha' type="password" name="senha" id="senha" />
                <label className='senhaLabel' for='senha'>Senha</label>
            </div>
        </div>
    )
}

export default Login

