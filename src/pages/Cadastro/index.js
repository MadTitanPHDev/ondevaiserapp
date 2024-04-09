import './styles.css';
import imagem from './imagemondevaiser.png'
import React, { useState } from 'react'

const Cadastro = () => {
    //retorna elementos visuais e componentes(pagina)
    const [formDados, setFormDados] = useState({ nome: '', apelido: '', email: '', password: '', number: '' });
    //{} objeto JSON
 
    function handleChange(event) {//toda funcao recebe argumentos(arg1, arg2)
        console.log(event.target.value);
        setFormDados({ ...formDados, [event.target.name]: event.target.value })
    }
  return (  
       
    <section className='container'>
  <img src={imagem}/>
            
            <div>
                <h1 className='dados'>
                    Insira seus dados para realizar o cadastro
                </h1>
            </div>
            <div className='formArea'>
                <form>
                    <div className='campoArea'>
                        <label>Nome</label>
                        <input className='inputArea' type='text' name='nome' id='nome' onChange={event => handleChange(event)} value={formDados.nome} />
                    </div>
 
                    <div className='campoArea'>
                        <label>Apelido</label>
                        <input className='inputArea' type='text' name='nick' id='nick' onChange={event => handleChange(event)} value={formDados.nick} />
                    </div>
 
                    <div className='campoArea'>
                        <label>Email</label>
                        <input className='inputArea' type='email' name='email' id='email' onChange={event => handleChange(event)} value={formDados.email} />
                    </div>
 
                    <div className='campoArea'>
                        <label>Senha</label>
                        <input className='inputArea' type='password' name='password' id='password' onChange={event => handleChange(event)} value={formDados.password} />
                    </div>
 
                    <div className='campoArea'>
                        <label>Numero de telefone com WhatsApp</label>
                        <input className='inputArea' type='number' name='number' maxLength={11} id='number' onChange={event => handleChange(event)} value={formDados.number} />
                    </div>
                    
                    <div className='btncampos'>
                        <input className='buttonCampo' type='submit' value='Limpar campos' />
                    </div>
 
                    <div className='btnArea'>
                        <input className='buttonArea' type='submit' value='Cadastrar' />
                    </div>
 
                </form>
 
 
            </div>
        </section>
  )
}

export default Cadastro
