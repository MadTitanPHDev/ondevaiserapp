import './style.css'
import React, { useState } from 'react'
import api from '../../services/api'
import Layout from '../../components/Layout'
import { useInfoContext } from '../../components/context/PostContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    
    const [dados, setDados] = useState({
        email: '',
        senha: ''
      })
      const {logado, setLogado} = useInfoContext()
      const [erroLogin, setErroLogin] = useState(
        false
      )
    
      const handleChange = (e) => {
        setDados({...dados, [e.target.name]: e.target.value})
      }
    
      console.log(logado)
      
      const handleCadastrar = (e) => {
        e.preventDefault();
        api.post('/login', dados).then(data => 
        {
          console.log(data)
          if(!data.data) {
            setErroLogin(true)
            setLogado(false)
            return
          } 
          setErroLogin(false)
          setLogado(true)
          navigate('/PerfilUsuario')
          return
          
        }
        )
      }

    return (
        <Layout>
            <div className='loginBody'>

                <form method='post' onSubmit={handleCadastrar} className='loginBodyArea'>
                    <div className='loginTxtArea'>
                        <h1 className='loginTxt'>Boas vindas novamente!</h1>
                    </div>
                    <div className='loginInputArea'>
                        <input onChange={handleChange} value={dados.email} className='inputLogin' required autocomplete="off" type="text" name="email" id="email" />
                        <label className='loginLabel' for='email'>Email</label>
                    </div>

                    <div className='passArea'>
                        <input onChange={handleChange} value={dados.senha} className='inputSenha' required autocomplete="off" type="password" name="senha" id="senha" />
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
                            <label for="cbx-46" class="cbx">
                                <span>
                                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                                <span>Lembre de mim.</span>
                            </label>
                        </div>

                        <label>
                            <a href="#">Esqueceu a senha?</a>
                        </label>

                    </div>
                    <div className='btnAreaLogin'>
                        {erroLogin && <span>usuario e senha invalido</span>}
                        <a href='/'>
                            {/* <button className='btnLogin'>
                                Entrar
                            </button> */}
                            <button type='submit' className='btnLogin' onclick="history.back()">Entrar</button>
                        </a>
                    </div>
                </form>

            </div>
        </Layout>
    )
}

export default Login