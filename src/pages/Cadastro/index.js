import './styles.css';
import imagem from './imagemondevaiser.png'
import { Field, Form, Formik } from 'formik';
import { initialUsuario, useInfoContext } from '../../components/context/PostContext';
import Layout from '../../components/Layout';
import InputMask from 'react-input-mask';

const Cadastro = () => {
 
    const {users, addUser} = useInfoContext();

  return (  
    <Layout>
        <Formik
            initialValues={initialUsuario}
            onSubmit={(values, actions) => {
                const newUser = 
                {
                    id: users[users.length-1]?.id ? users[users.length-1]?.id+1 : 1,
                    nome: values.nome,
                    nick: values.nick,
                    cpf: values.cpf,
                    email: values.email,
                    senha: values.senha,
                    telefone: values.telefone,
                }

                addUser(newUser);

                actions.setValues(
                    initialUsuario
                )
            }}
        >
            {({values, setValues, handleChange, handleBlur}) => (
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
                            <Field className='inputField' type='text' name='nome' id='nome' placeHolder="Nome">
                                {/* <label>Nome</label>
                                <input className='inputArea' type='text' name='nome' id='nome' /> */}
                            </Field>
                        </div>
        
                        <div className='campoArea'>
                            <Field className='inputField' type='text' name='nick' id='nick' placeHolder='Nome de Usuário'>
                                {/* <label>Nome de Usuário</label>
                                <input className='inputArea' type='text' name='nick' id='nick' /> */}
                            </Field>
                        </div>

                        <div className='campoArea'>
                            <InputMask className='inputField' onBlur={handleBlur} onChange={handleChange} value={values.cpf} mask="999.999.999-99" type='cpf' name='cpf' id='cpf' placeHolder='CPF'>
                                {/* <label>CPF</label>
                                <input className='inputArea' type='text' name='cpf' id='cpf' /> */}
                            </InputMask>
                        </div>
        
                        <div className='campoArea'>
                            <Field className='inputField' type='email' name='email' id='email' placeHolder='Email'>
                                {/* <label>Email</label>
                                <input className='inputArea' type='email' name='email' id='email' /> */}
                            </Field>
                        </div>
        
                        <div className='campoArea'>
                            <Field className='inputField' type='password' name='senha' id='senha' placeHolder='Senha'>
                                {/* <label>Senha</label>
                                <input className='inputArea' type='password' name='password' id='password' /> */}
                            </Field>
                        </div>
        
                        <div className='campoArea'>
                            <InputMask onBlur={handleBlur} onChange={handleChange} className='inputField' value={values.telefone} mask="(99)99999-9999" type='phone' name='telefone' id='telefone' placeHolder='Telefone'>
                                {/* <label>Numero de telefone com WhatsApp</label>
                                <input className='inputArea' type='number' name='number' maxLength={11} id='number' /> */}
                            </InputMask>
                        </div>
                            
                        <div className='btncampos'>
                            <button className='buttonCampo' onClick={() => setValues(initialUsuario)} value='Limpar campos'></button>
                        </div>
        
                        <div className='btnArea'>
                            <input className='buttonArea' type='submit' value='Cadastrar' />
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