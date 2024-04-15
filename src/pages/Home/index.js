import './style.css'
import Layout from '../../components/Layout'
import React from 'react'
import img1Card from '../../assets/images/chacara00.jpg';
import img2Card from '../../assets/images/Firefly events 92575.jpg';
import img3Card from '../../assets/images/Firefly places to party 78540.jpg';
import imgBg from '../../assets/images/fundopaisagem.jpg';
import Card from '../../components/Card';

const Home = () => {
  return (
    <div className='containerHome'>
    <Layout>
      <div className='homeArea'>
        <Card imgsrc={img1Card} />
      </div>
    </Layout>

    </div>

  )
}

export default Home
