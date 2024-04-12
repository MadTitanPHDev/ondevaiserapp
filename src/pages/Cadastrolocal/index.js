import './style.css'
import { Field, Form, Formik } from 'formik';
import { initialLocal, useInfoContext } from '../../components/context/PostContext';

const CadastroLocal = () => {

  const { local, addLocal } = useInfoContext();

  return (

    <div className='formArea'>

      <Formik

        initialValues={initialLocal}
        onSubmit={(values, actions) => {
          const newLocal =
          {
            id: local[local.length - 1]?.id ? local[local.length - 1]?.id + 1 : 1,
            nomeLocal: values.nomeLocal,
            endereco: values.endereco,
            cep: values.cep,
            valor: values.valor,
            carac: values.carac,
            descr: values.descr,
          }

          addLocal(newLocal);

          actions.setValues(
            initialLocal
          )
        }}
      >

        <Form className='form'>

          <div className='imagensUpload'>
            <label>Adicione fotos do local</label>
            {/* <input className='fotosLocal' type="file" id="fotosLocal" name="fotosLocal" /> */}
            <input className='fotosLocal' type="file" id="fotosLocal" name="fotosLocal" multiple />
          </div>

          <div className='opcaodeLocal'>
            {/* inserir um menu que define a opção de local que esta sendo cadastrada */}
          </div>

          <div className='campoArea'>
            <Field className='inputField' type='text' name='nomeLocal' id='nomeLocal' placeHolder="Digite o nome do local">
              {/* <label>Nome do Local</label> */}
              {/* <input className='inputArea' type='text' name='nomeLocal' id='nomeLocal' /> */}
            </Field>
          </div>

          <div className='campoArea'>
            <Field className='inputField' type='endereco' name='endereco' id='endereco' placeHolder="Digite o endereço do local">
              {/* <label>Nome da rua</label>
              <input className='inputArea' type='text' name='endereco' id='endereco' /> */}
            </Field>
          </div>

          <div className='campoArea'>
            <Field className='inputField' type='text' maxLength={8} name='cep' id='cep' placeHolder="Digite o CEP do local">
              {/* <label>CEP</label>
              <input className='inputArea' type='text' maxLength={8} name='cep' id='cep'  /> */}
            </Field>
          </div>

          <div className='campoArea'>
            <Field className='inputField' type='text' name='valor' id='valor' placeHolder="Digite o valor do local">
              {/* <label>Valor de locação</label>
              <input className='inputArea' type='text' name='valor' id='valor'  /> */}
            </Field>
          </div>

          <div className='campoArea'>
            <Field className='inputField' type='text' name='carac' id='carac' placeHolder="Digite as características do local">
              {/* <label>Caracteristicas que o local possui</label>
              <input className='inputArea' type='text' name='carac' id='carac'  /> */}
            </Field>
          </div>

          <div className='campoArea'>
            <Field className='inputField' type='text' name='descr' id='descr' placeHolder="Digite a descrição do local">
              {/* <label>Descrição</label>
              <input className='inputArea' type='text' name='descr' id='descr'  /> */}
            </Field>
          </div>

          <div className='submitArea'>
            <button type='submit' className='btnSumit'>Cadastrar</button>
          </div>

        </Form>

      </Formik>

    </div>
  )
}

export default CadastroLocal