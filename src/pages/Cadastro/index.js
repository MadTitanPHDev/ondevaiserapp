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
        setDados({ ...dados, [e.target.name]: e.target.value })
    }

    const handleCadastrar = (e) => {
        e.preventDefault();
        api.post('/users', dados).then(data => console.log(data))
    }

    return (
        <Layout>
            <Formik
                initialValues={initialUsuario}
                onSubmit={(values, actions) => {
                    const newUser =
                    {
                        nome: values.nome,
                        cpf: values.cpf,
                        email: values.email,
                        senha: values.senha,
                        telefone: values.telefone,
                    }

                    api.post('/users', newUser).then(data => console.log(data))

                    actions.setValues(
                        initialUsuario
                    )
                }}
            >
                {({ values, setValues, handleChange, handleBlur }) => (
                    <section className='cadastroContainer'>

                        
                            <h1 className='dados'>
                                Insira seus dados para realizar o cadastro
                            </h1>
                    
                        <div className='formArea'>
                            <Form method='post' className='form'>
                                <div className='campoArea'>
                                    <Field className='inputField' onBlur={handleBlur} onChange={handleChange} type='text' name='nome' id='nome' placeHolder="Nome">
                                        {/* <label>Nome</label>
                                    <input className='inputArea' type='text' name='nome' id='nome' /> */}
                                    </Field>
                                </div>

                                <div className='campoArea'>
                                    <InputMask value={values.cpf} className='inputField' onBlur={handleBlur} onChange={handleChange} mask="999.999.999-99" type='cpf' name='cpf' id='cpf' placeHolder='CPF'>
                                        {/* <label>CPF</label>
                                    <input className='inputArea' type='text' name='cpf' id='cpf' /> */}
                                    </InputMask>
                                </div>

                                <div className='campoArea'>
                                    <Field className='inputField' onBlur={handleBlur} onChange={handleChange} type='email' name='email' id='email' placeHolder='Email'>
                                        {/* <label>Email</label>
                                    <input className='inputArea' type='email' name='email' id='email' /> */}
                                    </Field>
                                </div>

                                <div className='campoArea'>
                                    <Field className='inputField' onBlur={handleBlur} onChange={handleChange} type='password' name='senha' id='senha' placeHolder='Senha'>
                                        {/* <label>Senha</label>
                                    <input className='inputArea' type='password' name='password' id='password' /> */}
                                    </Field>
                                </div>

                                <div className='campoArea'>
                                    <InputMask value={values.telefone} onBlur={handleBlur} onChange={handleChange} className='inputField' mask="(99)99999-9999" type='phone' name='telefone' id='telefone' placeHolder='Telefone'>
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
                )}

            </Formik>
        </Layout>

    )
}

export default Cadastro