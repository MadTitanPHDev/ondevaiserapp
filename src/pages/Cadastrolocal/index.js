import React, { useState } from 'react'
import './style.css'
import { Field, Form, Formik } from 'formik';
import { initialLocal, useInfoContext } from '../../components/context/PostContext';
 
const CadastroLocal = () => {
 
  const [formLocal, setFormLocal] = useState({ nomeLocal: '', endereco: '', cep: '', valor: '', carac: '', descr: '' });
 
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
            <Field 
            className='inputArea' 
            type='text' 
            name='nomeLocal' 
            id='nomeLocal'
            placeHolder="Insira o nome do local"
            >
            </Field>
          </div>
 
          <div className='campoArea'>
            <Field   
            className='inputArea' 
            type='text' 
            name='endereco' 
            id='endereco'
            placeHolder="Endedeço">
            </Field>
          </div>
 
          <div className='campoArea'>
            <Field  
            className='inputArea' 
            type='text' 
            maxLength={8} 
            name='cep' 
            id='cep'
            placeHolder="CEP"> 
            </Field>
          </div>
 
          <div className='campoArea'>
            <Field 
            className='inputArea' 
            type='text' 
            name='valor' 
            id='valor' 
            placeHolder="Qual o valor da diaria?">
            </Field>
          </div>
 
          <div className='campoArea'>
            <Field 
            className='inputArea' 
            type='text' 
            name='carac'
            id='carac' 
            placeHolder="Insira as caracteristicas do local.">
            </Field>
          </div>
 
          <div className='campoArea'>
            <Field 
            className='inputArea' 
            type='text' 
            name='descr' 
            id='descr' 
            placeHolder="Descreva o local"/>
            
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