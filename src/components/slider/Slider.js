import img from '../img/Rectangle.png'
import Buttons from '../controls/Buttons';

import Arrows from '../controls/Arrows';
const Slider = () => {
  return (
    <div className="app__slider">
      <h1 className="app__slider-title">Project Home</h1>

      <div className="app__slider-img">
        <img src={img} />
        <Buttons arrow={'right'} color={'white'} text={'Взглянуть'} />

      </div>

      <div className="app__slider-arrow app__slider-arrow-right">
        <Arrows arrow={'left'} />
      </div>
      <div className="app__slider-arrow app__slider-arrow-left">
        <Arrows arrow={'right'} />

      </div>
    </div>
  );
};

export default Slider;
