import img from '../img/Rectangle9.jpg';
import img1 from '../img/Rectangle8.jpg';
import img2 from '../img/Rectangle10.jpg';
import Buttons from '../controls/Buttons.js';
import { textColor } from '../style/variables.scss'

import './aboutCompany.scss';

const AboutCompany = () => {
    return (
        <div className="app__about">
            <div className="app__about-img">
                <div className="app__about-img-first">
                    <img className="app__about-img" src={img} alt="" />

                </div>
                <div className="app__about-img-second ">
                    <img className="app__about-img" src={img1} alt="" />
                    <img className="app__about-img" src={img2} alt="" />

                </div>
            </div>


            <div className="app__about-text">
                <h2 className="app__about-text-title"> О компании</h2>
                <p className="app__about-text-subtext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <Buttons link={'/about-company'} arrow={'right'} bgColor={'white'} className={'about'} color={'#333333'} text={'Читать'} />
            </div>



        </div>
    )
}

export default AboutCompany