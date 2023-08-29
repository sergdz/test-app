import img from '../img/Rectangle.png'
import Buttons from '../controls/Buttons';

import Arrows from '../controls/Arrows';

import './slider.scss'
const Slider = () => {
  return (
    <>

      <div className="app__slider">
        <div className='app__slider-item'>
          <div>
            <h1 className="app__slider-title">Project Home</h1>
          </div>

          <div className='app__slider-arrow'>
            <div className="app__slider-arrow-right">
              <Arrows arrow={'left'} />
            </div>
            <div className="app__slider-arrow-left">
              <Arrows arrow={'right'} />
            </div>

          </div>
          <div className="app__slider-number">
            <p className='app__slider-number-item'>01</p>

              <svg width="60" height="50">
                <rect x="56" y="60" width="2" height="150 " fill="#E0E0E0" transform="rotate(45 100 0)" />
              </svg>



            <p className='app__slider-number-item'>02</p>
          </div>



        </div>

        <div className="app__slider-img">
          <img src={img} />
          <Buttons arrow={'right'} bgColor={'white'} text={'Взглянуть'} className={'slider'} />

        </div>

      </div>
    </>

  );
};

export default Slider;