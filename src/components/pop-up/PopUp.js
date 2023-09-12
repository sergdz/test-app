import './popUp.scss'
import Buttons from '../controls/Buttons'

const PopUp = () => {
    return (

        <div className="app__pop-up">
            <div className="app__pop-up-overlay">
            </div>
            <div className="app__pop-up-item">
                <p className="app__pop-up-title">Досуговый центр</p>
                <Buttons arrow={'right'} text={'ПОДРОБНЕЕ'} color={'white'} className={'pop-up'} />
            </div>
        </div>



    )
}

export default PopUp