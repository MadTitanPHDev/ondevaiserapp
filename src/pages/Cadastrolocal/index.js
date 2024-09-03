import './style.css';
import { Field, Form, Formik } from 'formik';
import { initialLocal, useInfoContext, InfoProvider } from '../../components/context/PostContext';
import Layout from '../../components/Layout';
import InputMask from 'react-input-mask';
import React, { useState } from 'react'
import api from '../../services/api';


const CadastroLocal = () => {

  // const { local, addLocal } = useInfoContext();

  // const [dados, setDados] = useState({
  //   nomeLocal: '',
  //   cep: '',
  //   endereco: '',
  //   valor: '',
  //   descr: '',
  //   img: '',
  //   // Usuarios_idUsuarios: '',
  //   TipoLocal_id_tipo: ''
  // })

  // const handleChange = (e) => {
  //     setDados({ ...dados, [e.target.name]: e.target.value })
  // }

  // const handleCadastrar = (e) => {
  //     e.preventDefault();
  //     api.post('/locals', dados).then(data => console.log(data))
  // }

  const [previewImage, setPreviewImage] = useState(null);
  const { locals, addLocals} = useInfoContext();
  const [fileKey, setFileKey] = useState(0);
  const [fileField, setFileField] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setFileField(file)
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
            // id: local[local.length - 1]?.id ? local[local.length - 1]?.id + 1 : 1,
            nomeLocal: values.nomeLocal,
            endereco: values.endereco,
            cep: values.cep,
            valor: values.valor,
            carac: values.carac,
            descr: values.descr,
            img: previewImage,
            file: fileField,
            Usuarios_idUsuarios: 1,
            TipoLocal_id_tipo: values.TipoLocal_id_tipo
          }

          // addLocal(newLocal);
          const formData = new FormData();
          formData.append('local', JSON.stringify(newLocal));
          formData.append('file', newLocal.file);
          api.post('/locals', formData).then(data => console.log(data))

         
          actions.setValues(
            initialLocal
          )
          
          setPreviewImage(null)
          setFileKey(fileKey + 1)
        }}
      >

        {({ values, setValues, handleChange, handleBlur }) => (

          <div className='formArea'>
            <Form className='form'>
              <section className='cadastroContainer'>

                <div className='imagensUpload'>

                  <label>Adicione fotos do local</label>
                  <div className='imgArea'>
                    {previewImage &&
                      <img src={previewImage} alt='preview' className='imgPreview'></img>
                    }
                  </div>
                  <input className='inputField' type="file" id="fotosLocal" name="fotosLocal"
                    onChange={(e) => { handleFileChange(e) }} key={fileKey} multiple>
                  </input>

                </div>

                <div className='opcaodeLocal'>
                  {/* inserir um menu que define a opção de local que esta sendo cadastrada */}
                  <Field as="select" className='inputField' name='TipoLocal_id_tipo' id='TipoLocal_id_tipo'>
                    <option value="">Selecione o Tipo</option>
                    <option value="1">Tipo 1 - Chácara</option>
                    <option value="2">Tipo 2 - Casa</option>
                    <option value="3">Tipo 3 - Salão</option>
                    {/* Adicione outras opções conforme necessário */}
                  </Field>
                </div>


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
                  <InputMask className='inputField' type='valor' onBlur={handleBlur} onChange={handleChange} value={values.valor} mask="R$99999" name='valor' id='valor' placeHolder="Valor">

                    {/* <label>Valor de locação</label>
                      <input className='inputArea' type='text' name='valor' id='valor'  /> */}
                  </InputMask>
                </div>

                {/* <div className='campoArea'>
                    <Field className='inputField' type='text' name='carac' id='carac' placeHolder="Características">
                      <label>Caracteristicas que o local possui</label>
                      <input className='inputArea' type='text' name='carac' id='carac'/>
                    </Field>
                  </div> */}

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
                  <button className='btnCadastroLocal' type='submit' value='Cadastrar'>Cadastrar</button>
                </div>
              </section>
            </Form>

          </div>
        )}
      </Formik>
    </Layout>
  )
}
export default CadastroLocal