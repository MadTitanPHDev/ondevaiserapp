import React from 'react'
import '../Sobre/style.css'
import Layout from '../../components/Layout'
import empresaImage from '../../assets/images/IAimage1_0.jpg1.jpg' // Certifique-se de que a imagem esteja nesse caminho

const Sobre = () => {
  return (

    <Layout>
      <div className='containerSobre'>
        <div className='sobreArea'>
          <h1>Sobre Nós</h1>
          <p>Onde vai ser?</p>
        </div>

        <div className='sobreSalon'>
          <img id="salon" src={empresaImage} alt="Nossa Empresa" className="empresaImage" /> {/* Exibindo a imagem */}
          <p>
            É a maior empresa de espaços para festas do Brasil.
          </p>
        </div>
      </div>
    </Layout>

  )
}

export default Sobre
