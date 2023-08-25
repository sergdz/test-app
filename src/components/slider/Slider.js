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
          <div className="1">
            <p>1</p>
            <p>2</p>
          </div>



        </div>

        <div className="app__slider-img">
          <img src={img} />
          <Buttons arrow={'right'} color={'black'} bgColor={'white'} text={'Взглянуть'} className={'slider'} />

        </div>

      </div>
    </>

  );
};

export default Slider;
