import './styles.css';
import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { initialUsuario, useInfoContext } from '../../components/context/PostContext';
import Layout from '../../components/Layout';
import InputMask from 'react-input-mask';
import api from '../../services/api'

const Cadastro = () => {
 
    // const {users, addUser} = useInfoContext();

    const [dados, setDados] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        telefone: ''
      })
    
      const handleChange = (e) => {
        setDados({...dados, [e.target.name]: e.target.value})
      }
      
      const handleCadastrar = (e) => {
        e.preventDefault();
        api.post('/cadastro', dados).then(data => console.log(data))
      }

  return (  
    <Layout>
        <Formik
            // initialValues={initialUsuario}
            // onSubmit={(values, actions) => {
            //     const newUser = 
            //     {
            //         id: users[users.length-1]?.id ? users[users.length-1]?.id+1 : 1,
            //         nome: values.nome,
            //         nick: values.nick,
            //         cpf: values.cpf,
            //         email: values.email,
            //         senha: values.senha,
            //         telefone: values.telefone,
            //     }

            //     addUser(newUser);

            //     actions.setValues(
            //         initialUsuario
            //     )
            // }}
        >
            {/* {({values, setValues, handleChange, handleBlur}) => ( */}
                <section className='cadastroContainer'>
                    
                    <div>
                        <h1 className='dados'>
                            Insira seus dados para realizar o cadastro
                        </h1>
                    </div>

                    <div className='formArea'>
                        <Form method='post' onSubmit={handleCadastrar} className='form'>
                            <div className='campoArea'>
                                <Field className='inputField' onChange={handleChange} value={dados.nome} type='text' name='nome' id='nome' placeHolder="Nome">
                                    {/* <label>Nome</label>
                                    <input className='inputArea' type='text' name='nome' id='nome' /> */}
                                </Field>
                            </div>
            
                            <div className='campoArea'>
                                <InputMask className='inputField' onBlur={handleBlur} onChange={handleChange} value={dados.cpf} mask="999.999.999-99" type='cpf' name='cpf' id='cpf' placeHolder='CPF'>
                                    {/* <label>CPF</label>
                                    <input className='inputArea' type='text' name='cpf' id='cpf' /> */}
                                </InputMask>
                            </div>
            
                            <div className='campoArea'>
                                <Field className='inputField' onChange={handleChange} value={dados.email} type='email' name='email' id='email' placeHolder='Email'>
                                    {/* <label>Email</label>
                                    <input className='inputArea' type='email' name='email' id='email' /> */}
                                </Field>
                            </div>
            
                            <div className='campoArea'>
                                <Field className='inputField' onChange={handleChange} value={dados.senha} type='password' name='senha' id='senha' placeHolder='Senha'>
                                    {/* <label>Senha</label>
                                    <input className='inputArea' type='password' name='password' id='password' /> */}
                                </Field>
                            </div>
            
                            <div className='campoArea'>
                                <InputMask onBlur={handleBlur} onChange={handleChange} className='inputField' value={dados.telefone} mask="(99)99999-9999" type='phone' name='telefone' id='telefone' placeHolder='Telefone'>
                                    {/* <label>Numero de telefone com WhatsApp</label>
                                    <input className='inputArea' type='number' name='number' maxLength={11} id='number' /> */}
                                </InputMask>
                            </div>
                                
                            <div className='btnAreaCadastro'>
                                <button className='btnCadastro' onClick={() => setValues(initialUsuario)} value='Limpar'>Limpar</button>
                            </div>
            
                            <div className='btnAreaCadastro'>
                                <button className='btnCadastro' type='submit' value='Cadastrar'>Cadastrar</button>
                            </div>
                        </Form>
            
                    </div>
                
                </section>
            {/* )} */}
        
        </Formik>
    </Layout>
    
  )
}

export default Cadastro