import './styles.css';
import imagem from './imagemondevaiser.png'
import { Field, Form, Formik } from 'react-router-dom';
import { initialUsuario, useInfoContext } from '../../components/context/PostContext';

const Cadastro = () => {
 
    const {users, addUser} = useInfoContext();

  return (  

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
                        <Field>
                            <label>Nome</label>
                            <input className='inputArea' type='text' name='nome' id='nome' value={formDados.nome} />
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field>
                            <label>Nome de Usuário</label>
                            <input className='inputArea' type='text' name='nick' id='nick' value={formDados.nick} />
                        </Field>
                    </div>

                    <div className='campoArea'>
                        <Field>
                            <label>CPF</label>
                            <input className='inputArea' type='text' name='cpf' id='cpf' value={formDados.cpf} />
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field>
                            <label>Email</label>
                            <input className='inputArea' type='email' name='email' id='email' value={formDados.email} />
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field>
                            <label>Senha</label>
                            <input className='inputArea' type='password' name='password' id='password' value={formDados.password} />
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field>
                            <label>Numero de telefone com WhatsApp</label>
                            <input className='inputArea' type='number' name='number' maxLength={11} id='number' value={formDados.number} />
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
  )
}

export default Cadastro
