import './style.css'
import Layout from '../../components/Layout'
import React from 'react'
import img1Card from '../../assets/images/chacara00.jpg';
import img2Card from '../../assets/images/Firefly events 92575.jpg';
import img3Card from '../../assets/images/Firefly places to party 78540.jpg';
import imgBg from '../../assets/images/cmapo.jpeg';
import Card from '../../components/Card';
import Card1 from '../../components/Card1';
import Card2 from '../../components/Card2';
// import '../../pages/Home/comands'


const Home = () => {
  return (
    <div className='containerHome'>
      <Layout>
        <div className='homeArea'>
          <Card imgsrc={img1Card} />
          <Card1 imgsrc={img2Card} />
          <Card2 imgsrc={img3Card} />
        </div>

        

      </Layout>

    </div>

  )
}


export default Home
