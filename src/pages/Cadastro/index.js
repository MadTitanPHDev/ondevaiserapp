import './styles.css';
import imagem from './imagemondevaiser.png'
import { useState } from 'react';
import { initialUsuario, useInfoContext } from '../../components/context/PostContext';
import { Field, Form, Formik } from 'formik';
import Layout from '../../components/Layout';

const Cadastro = () => {

    // const [formDados, setFormDados] = useState({ nome: '', nick: '', cpf: '', email: '', senha: '', telefone: '' });

    const { users, addUser } = useInfoContext();

    return (
        <Layout>
            <Formik
                initialValues={initialUsuario}
                onSubmit={(values, actions) => {
                    const newUser =
                    {
                        id: users[users.length - 1]?.id ? users[users.length - 1]?.id + 1 : 1,
                        nome: values.nome,
                        nick: values.nick,
                        cpf: values.cpf,
                        email: values.email,
                        senha: values.senha,
                        telefone: values.telefone
                    }

                    addUser(newUser);

                    actions.setValues(
                        initialUsuario
                    )
                }}
            >

                <section className='container'>
                    <img src={imagem}></img>

                    <div>
                        <h1 className='dados'>
                            Insira seus dados para realizar o cadastro
                        </h1>
                    </div>

                    <div className='formArea'>
                        <Form>
                            <div className='campoArea'>
                                <Field
                                    className='inputArea' type='text' name='nome' id='nome' placeHolder="Insira seu nome">

                                </Field>
                            </div>

                            <div className='campoArea'>
                                <Field className='inputArea' type='text' name='nick' id='nick'>

                                </Field>
                            </div>

                            <div className='campoArea'>
                                <Field className='inputArea' type='text' name='cpf' id='cpf'>

                                </Field>
                            </div>

                            <div className='campoArea'>
                                <Field className='inputArea' type='email' name='email' id='email' >

                                </Field>
                            </div>

                            <div className='campoArea'>
                                <Field className='inputArea' type='password' name='password' id='password'>

                                </Field>
                            </div>

                            <div className='campoArea'>
                                <Field className='inputArea' type='number' name='number' maxLength={11} id='number'>

                                </Field>
                            </div>

                            <div className='btncampos'>
                                <input className='buttonCampo' type='submit' value='Limpar campos' />
                            </div>

                            <div className='btnArea'>
                                <input className='buttonArea' type='submit' value='Cadastrar' />
                            </div>
                        </Form>

                    </div>

                </section>
            </Formik>
        </Layout>
    )
}

export default Cadastro