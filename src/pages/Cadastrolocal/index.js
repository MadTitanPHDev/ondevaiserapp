import './style.css'
import { Field, Form, Formik } from 'react-router-dom';
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
            <Field>
              <label>Nome do Local</label>
              <input className='inputArea' type='text' name='nomeLocal' id='nomeLocal' value={setFormLocal.nomeLocal} />
            </Field>
          </div>

          <div className='campoArea'>
            <Field>
              <label>Nome da rua</label>
              <input className='inputArea' type='text' name='endereco' id='endereco' value={setFormLocal.endereco} />
            </Field>
          </div>

          <div className='campoArea'>
            <Field>
              <label>CEP</label>
              <input className='inputArea' type='text' maxLength={8} name='cep' id='cep' value={setFormLocal.cep} />
            </Field>
          </div>

          <div className='campoArea'>
            <Field>
              <label>Valor de locação</label>
              <input className='inputArea' type='text' name='valor' id='valor' value={setFormLocal.valor} />
            </Field>
          </div>

          <div className='campoArea'>
            <Field>
              <label>Caracteristicas que o local possui</label>
              <input className='inputArea' type='text' name='carac' id='carac' value={setFormLocal.carac} />
            </Field>
          </div>

          <div className='campoArea'>
            <Field>
              <label>Descrição</label>
              <input className='inputArea' type='text' name='descr' id='descr' value={setFormLocal.descr} />
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