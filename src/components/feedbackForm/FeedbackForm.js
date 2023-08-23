import Buttons from "../controls/Buttons"
import imgForm from '../img/image12.jpg'
const FeedbackForm = () => {
    return (
        <>
            <form className="app_feedback-form">
                <fieldset className="app_feedback-form__fieldset">
                    <legend className="app_feedback-form__legend">Связаться с нами</legend>
                    <input className="app_feedback-form__input" type='text' name='name' placeholder="Имя" value='' />
                    <input className="app_feedback-form__input app_feedback-form__input--required" type='text' name='phone' placeholder="Номер телефона" value='' />
                    <input className="app_feedback-form__input app_feedback-form__input--required" type='text' name='email' placeholder="E-mail" value='' />
                    <input className="app_feedback-form__input" type='text' name='product' placeholder="Интересующий товар/услуга" value='' />
                    <input className="app_feedback-form__input app_feedback-form__input--required" type='text' name='message' placeholder="Сообщение" value='' />
                </fieldset>
            </form>
            <input className="privacy-policy-checkbox" type="checkbox" name="privacy-policy" />
            <label htmlFor="privacy-policy-checkbox">
                Отправляя заявку Вы соглашаетесь
                с политикой
                конфиденциальности
            </label>
            <Buttons color={'white'} bgColor={'black'} arrow={'right'} text={'Отправить'} />
            <div className="app__feedback-form-img">
                <img src={imgForm} alt="Мужчина с телефоном" />
            </div>

        </>

    )
}
export default FeedbackForm