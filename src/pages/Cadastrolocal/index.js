import React, { useState } from 'react'
import './style.css'

const CadastroLocal = () => {

  const [formLocal, setFormLocal] = useState({ nomeLocal: '', endereco: '', cep: '', valor: '', carac: '', descr: '' });
  //{} objeto JSON

  function handleChange(event) {//toda funcao recebe argumentos(arg1, arg2)
    console.log(event.target.value);
    setFormLocal({ ...formLocal, [event.target.name]: event.target.value })
  }

  return (

    <div className='formArea'>
      <form>

        <div className='imagensUpload'>
          <label>Adicione fotos do local</label>
          {/* <input className='fotosLocal' type="file" id="fotosLocal" name="fotosLocal" /> */}
          <input className='fotosLocal' type="file" id="fotosLocal" name="fotosLocal" multiple />

        </div>

        <div className='opcaodeLocal'>
          {/* inserir um menu que define a opção de local que esta sendo cadastrada */}
        </div>

        <div className='campoArea'>
          <label>Nome do Local</label>
          <input className='inputArea' type='text' name='nomeLocal' id='nomeLocal' onChange={event => handleChange(event)} value={setFormLocal.nomeLocal} />
        </div>

        <div className='campoArea'>
          <label>Nome da rua</label>
          <input className='inputArea' type='text' name='endereco' id='endereco' onChange={event => handleChange(event)} value={setFormLocal.endereco} />
        </div>

        <div className='campoArea'>
          <label>CEP</label>
          <input className='inputArea' type='text' maxLength={8} name='cep' id='cep' onChange={event => handleChange(event)} value={setFormLocal.cep} />
        </div>

        <div className='campoArea'>
          <label>Valor de locação</label>
          <input className='inputArea' type='text' name='valor' id='valor' onChange={event => handleChange(event)} value={setFormLocal.valor} />
        </div>

        <div className='campoArea'>
          <label>Caracteristicas que o local possui</label>
          <input className='inputArea' type='text' name='carac' id='carac' onChange={event => handleChange(event)} value={setFormLocal.carac} />
        </div>

        <div className='campoArea'>
          <label>Descrição</label>
          <input className='inputArea' type='text' name='descr' id='descr' onChange={event => handleChange(event)} value={setFormLocal.descr} />
        </div>

        <div className='btnArea'>
          <input className='buttonSubmit' type='submit' value='Concluir' />
        </div>

      </form>

    </div>


  )
}

export default CadastroLocal