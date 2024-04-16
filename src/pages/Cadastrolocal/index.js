import './style.css'
import { Field, Form, Formik } from 'formik';
import { initialLocal, useInfoContext } from '../../components/context/PostContext';
import Layout from '../../components/Layout';
import InputMask from 'react-input-mask';
import { useState } from 'react';

const CadastroLocal = () => {

  const { local, addLocal } = useInfoContext();
  const [previewImage, setPreviewImage] = useState(null);
  const [fileKey, setFileKey] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <Layout>
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
            fotosLocal: previewImage
          }

          addLocal(newLocal);

          actions.setValues(
            initialLocal
          )
          setPreviewImage(null)
          setFileKey(fileKey + 1)
        }}
      >

        {({ values, setValues, handleChange, handleBlur }) => (
          <section className='cadastroContainer'>

            <div className='imagensUpload'>
              <label>Adicione fotos do local</label>
              <div className='imgArea'>
                {previewImage &&
                  <img src={previewImage} alt='preview' className='imgPreview'></img>
                }
              </div>
              {/* <input className='fotosLocal' type="file" id="fotosLocal" name="fotosLocal" /> */}
              <input className='inputField' type="file" id="fotosLocal" name="fotosLocal"
                onChange={(e) => { handleFileChange(e) }} key={fileKey} 
              >
              </input>
            </div>

            <div className='opcaodeLocal'>
              {/* inserir um menu que define a opção de local que esta sendo cadastrada */}
            </div>

            <div className='formArea'>
              <Form className='form'>
                <div className='campoArea'>
                  <Field className='inputField' type='text' name='nomeLocal' id='nomeLocal' placeHolder="Nome do Local">
                    {/* <label>Nome do Local</label> */}
                    {/* <input className='inputArea' type='text' name='nomeLocal' id='nomeLocal' /> */}
                  </Field>
                </div>

                <div className='campoArea'>
                  <Field className='inputField' type='endereco' name='endereco' id='endereco' placeHolder="Endereço">
                    {/* <label>Nome da rua</label>
                    <input className='inputArea' type='text' name='endereco' id='endereco' /> */}
                  </Field>
                </div>

                <div className='campoArea'>
                  <InputMask className='inputField' type='cep' onBlur={handleBlur} onChange={handleChange} value={values.cep} mask="99999-999" name='cep' id='cep' placeHolder="CEP">
                    {/* <label>CEP</label>
                    <input className='inputArea' type='text' maxLength={8} name='cep' id='cep'  /> */}
                  </InputMask>
                </div>

                <div className='campoArea'>
                  <InputMask className='inputField' type='valor' onBlur={handleBlur} onChange={handleChange} value={values.valor} mask="R$9999" name='valor' id='valor' placeHolder="Valor">
                    {/* <label>Valor de locação</label>
                    <input className='inputArea' type='text' name='valor' id='valor'  /> */}
                  </InputMask>
                </div>

                <div className='campoArea'>
                  <Field className='inputField' type='text' name='carac' id='carac' placeHolder="Características">
                    {/* <label>Caracteristicas que o local possui</label>
                    <input className='inputArea' type='text' name='carac' id='carac'  /> */}
                  </Field>
                </div>

                <div className='campoArea'>
                  <Field className='inputField' type='text' name='descr' id='descr' placeHolder="Descrição">
                    {/* <label>Descrição</label>
                    <input className='inputArea' type='text' name='descr' id='descr'  /> */}
                  </Field>
                </div>

                <div className='btnAreaCadastroLocal'>
                  <button className='btnCadastroLocal' onClick={() => setValues(initialLocal)} value='Limpar'>Limpar</button>
                </div>

                <div className='btnAreaCadastroLocal'>
                  <a className='aBtnCL' href='/MaisInformacoes'>
                    <button className='btnCadastroLocal' type='submit' value='Cadastrar'>Prosseguir</button>
                  </a>
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </Layout>
  )
}

export default CadastroLocal