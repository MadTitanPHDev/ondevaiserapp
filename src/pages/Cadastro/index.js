import './styles.css';
import imagem from './imagemondevaiser.png'
import { Field, Form, Formik } from 'formik';
import { initialUsuario, useInfoContext } from '../../components/context/PostContext';
import Layout from '../../components/Layout';

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
        {({setValues}) => (
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
                        <Field className='inputField' type='text' name='nome' id='nome' placeHolder="Digite o nome">
                            {/* <label>Nome</label>
                            <input className='inputArea' type='text' name='nome' id='nome' /> */}
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field className='inputField' type='text' name='nick' id='nick' placeHolder='Digite um nome de usuário'>
                            {/* <label>Nome de Usuário</label>
                            <input className='inputArea' type='text' name='nick' id='nick' /> */}
                        </Field>
                    </div>

                    <div className='campoArea'>
                        <Field className='inputField' mask="999.999.999-99" type='cpf' name='cpf' id='cpf' placeHolder='Digite o CPF'>
                            {/* <label>CPF</label>
                            <input className='inputArea' type='text' name='cpf' id='cpf' /> */}
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field className='inputField' type='email' name='email' id='email' placeHolder='Digite o email'>
                            {/* <label>Email</label>
                            <input className='inputArea' type='email' name='email' id='email' /> */}
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field className='inputField' type='password' name='senha' id='senha' placeHolder='Digite uma senha'>
                            {/* <label>Senha</label>
                            <input className='inputArea' type='password' name='password' id='password' /> */}
                        </Field>
                    </div>
    
                    <div className='campoArea'>
                        <Field className='inputField' mask="(99)99999-9999" type='phone' name='telefone' maxLength={11} id='telefone' placeHolder='Digite o telefone'>
                            {/* <label>Numero de telefone com WhatsApp</label>
                            <input className='inputArea' type='number' name='number' maxLength={11} id='number' /> */}
                        </Field>
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