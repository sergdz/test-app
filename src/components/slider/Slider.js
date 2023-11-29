import img from '../img/Rectangle.png'
import Buttons from '../controls/Buttons';

import Arrows from '../controls/Arrows';

import { createContext, useEffect, useState } from 'react';
import request from '../service/request';
import './slider.scss'

const Slider = ({setSlide}) => {

  const [quantitySliderItems, setQuantitySliderItems] = useState(6)
  const [sliderImg, setSliderImg] = useState([])
  const [sliderIndexActive, setSliderIndexActive] = useState(1)
  const [sliderActive, setSliderActive] = useState([])
  const [offset, setOffset] = useState(0)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request(`https://api.pexels.com/v1/search?query=buildings&&size=medium&per_page=${quantitySliderItems}`);
        setSliderImg(response.photos);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [quantitySliderItems]);




  const renderSlide = (arr) => {


    const items = arr.map((item, i) => {
      return (
        <div style={{ transform: `translateX(-${offset}%)` }} key={i}>
          <img src={item.src.original} alt={`Слайд ${i}`} />
          <Buttons link={`slide-${item.id}`} arrow={'right'} bgColor={'white'} text={'Взглянуть'} className={'slider'} />
        </div>
      )
    });

    return (
      <div className="app__slider-img">
        <div className="app__slider-img wrapper">

          {items}
        </div>

      </div>
    )
  }

  const slider = renderSlide(sliderImg)


  const slide = (e) => {
    if (e.target.className === 'app__slider-arrow-right' || e.target.className.baseVal === 'svg-inline--fa fa-arrow-right-long ') {
      setOffset((state) => state + 100);
      setSliderIndexActive((state) => state + 1);
    } else {
      setOffset((state) => state - 100);
      setSliderIndexActive((state) => state - 1);
    }
  }

  useEffect(() => {
    if (sliderIndexActive > 0 && sliderIndexActive <= sliderImg.length) {
      setSliderActive(sliderImg[sliderIndexActive - 1]);
      setSlide(sliderImg[sliderIndexActive - 1]);
    }
  }, [sliderIndexActive, sliderImg, setSlide]);



  useEffect(() => {
    if (sliderIndexActive > quantitySliderItems) {
      setSliderIndexActive(1);
      setOffset(0);
    }
    if (sliderIndexActive < 1) {
      setSliderIndexActive(quantitySliderItems);
      setOffset((quantitySliderItems - 1) * 100);
    }
  }, [sliderIndexActive, quantitySliderItems]);

  return (
    <>

      <div className="app__slider">
        <div className='app__slider-item'>
          <div>
            <h1 className="app__slider-title">Project Home</h1>
          </div>

          <div className='app__slider-arrow' onClick={slide}>
            <div className="app__slider-arrow-left">
              <Arrows arrow={'left'} />
            </div>
            <div className="app__slider-arrow-right">
              <Arrows arrow={'right'} />
            </div>

          </div>
          <div className="app__slider-number">
            <p className='app__slider-number-item'>{sliderIndexActive}</p>

            <svg width="60" height="50">
              <rect x="56" y="60" width="2" height="150 " fill="#E0E0E0" transform="rotate(45 100 0)" />
            </svg>



            <p className='app__slider-number-item'>{quantitySliderItems}</p>
          </div>



        </div>

        {slider}

      </div>
    </>

  );
};

export default Slider;