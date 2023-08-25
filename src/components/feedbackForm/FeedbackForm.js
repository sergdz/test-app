import { useState } from "react"
import Buttons from "../controls/Buttons"
import imgForm from '../img/image12.jpg'
const FeedbackForm = () => {
    let [inputValue, setInputValue] = useState()

    inputValue = (e) => {
        console.log();
        switch (e.target.name) {
            case 'name':
                setInputValue((state) => ({
                    ...state,
                     name: e.target.value
                }))
                break;
            case 'phone':
                setInputValue((state) => ({
                    ...state,
                     phone: e.target.value
                }))
                break;
            case 'email':
                setInputValue((state) => ({
                    ...state,
                    email: e.target.value
                }))
                break;
            case 'product':
                setInputValue((state) => ({
                    ...state,
                    product: e.target.value
                }))
                break;
            case 'message':
                setInputValue((state) => ({
                    ...state,
                    message: e.target.value
                }))
                break;


        }

    }

    return (
        <>
            <form className="app_feedback-form" onChange={inputValue}>
                <fieldset className="app_feedback-form__fieldset">
                    <legend className="app_feedback-form__legend">Связаться с нами</legend>
                    <input className="app_feedback-form__input" type='text' name='name' placeholder="Имя"   />
                    <input className="app_feedback-form__input app_feedback-form__input--required" type='text' name='phone' placeholder="Номер телефона"  />
                    <input className="app_feedback-form__input app_feedback-form__input--required" type='text' name='email' placeholder="E-mail"  />
                    <input className="app_feedback-form__input" type='text' name='product' placeholder="Интересующий товар/услуга" />
                    <input className="app_feedback-form__input app_feedback-form__input--required" type='text' name='message' placeholder="Сообщение"  />
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