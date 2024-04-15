import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/images/casaF/1.jpeg'
import img2 from '../../assets/images/casaF/2.jpeg'
import img3 from '../../assets/images/casaF/3.jpeg'
import img4 from '../../assets/images/casaF/4.jpeg'
import img5 from '../../assets/images/casaF/5.jpeg'
import img6 from '../../assets/images/casaF/6.jpeg'
import './style.css'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div  className='slider-container'>
      <Slider {...settings}>
      <div>
        <img src={img1} alt="Imagem 1" className="slider-image" />
      </div>
      <div>
        <img src={img2} alt="Imagem 2" className="slider-image"/>
      </div>
      <div>
        <img src={img3} alt="Imagem 3" className="slider-image"/>
      </div>
      <div>
        <img src={img4} alt="Imagem 4" className="slider-image"/>
      </div>
      <div>
        <img src={img5} alt="Imagem 5" className="slider-image"/>
      </div>
      <div>
        <img src={img6} alt="Imagem 6" className="slider-image"/>
      </div>
    </Slider>

    </div>
    
  );
};

export default ImageCarousel;
