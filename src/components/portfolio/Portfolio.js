import imgPortfolioPage from '../img/image15.jpg'
import imgPortfolioPage1 from '../img/image16.png'
import imgPortfolioPage2 from '../img/image17.png'
import imgPortfolioPage3 from '../img/image18.png'
import PopUp from '../pop-up/PopUp'

import Buttons from '../controls/Buttons'
import './Portfolio.scss'
const Portfolio = () => {
    return (

        <div className="app__portfolio">
            <p className='app__portfolio-title'>Наши проекты</p>
            <div className="app__portfolio-block">
                <div className="app__portfolio-block-item">
                    <img src={imgPortfolioPage} alt="" />
                    <PopUp />

                </div>
                <div className="app__portfolio-block-item">
                    <img src={imgPortfolioPage} alt="" />
                    <PopUp title={'центр'}/>

                </div>

            </div>

            <div className="app__portfolio-block  ">
                <div className="app__portfolio-block size-small">

                    <PopUp />
                    <img src={imgPortfolioPage1} alt="" />
                </div>
                <div className="app__portfolio-block size-small">
                    <img src={imgPortfolioPage2} alt="" />

                    <PopUp />
                </div>
                <div className="aapp__portfolio-block size-small">
                    <img src={imgPortfolioPage3} alt="" />
                    <PopUp />
                </div>

            </div>
            <div className="app__portfolio-button-wrapper">
                <Buttons color={'white'} bgColor={'black'} arrow={'right'} text={'Все проекты'} className={'portfolio'} />
            </div>

        </div>

    )
}
export default Portfolio
