import { useState } from "react"
import Buttons from "../controls/Buttons"
import imgForm from '../img/image12.jpg'
import './feedBackForm.scss'
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
            default: { }


        }

    }

    return (
        <div className="app__feedback-form">
            <form className="app__feedback-form_form" onChange={inputValue}>
                <p className="app__feedback-form__title">Связаться с нами</p>
                <div className="app__feedback-form_block">

                    <fieldset className="app__feedback-form__fieldset">
                        <textarea className="app__feedback-form__textarea" type='text' name='name' placeholder="Имя" />
                        <textarea className="app__feedback-form__textarea app__feedback-form__textarea--required" type='text' name='phone' placeholder="Номер телефона" />
                        <textarea className="app__feedback-form__textarea app__feedback-form__textarea--required" type='text' name='email' placeholder="E-mail" />
                        <textarea className="app__feedback-form__textarea" type='text' name='product' placeholder="Интересующий товар/услуга" />
                        <textarea className="app__feedback-form__textarea app__feedback-form__textarea--required" type='text' name='message' placeholder="Сообщение" />
                    </fieldset>
                    <div className="app__feedback-form-img">
                        <img src={imgForm} alt="Мужчина с телефоном" />
                    </div>
                </div>
            </form>
            <div className="app__feedback-form_checkbox">

            <input className="app__feedback-form privacy-policy-checkbox" type="checkbox" name="privacy-policy" id="privacy-policy-checkbox" />
            <label htmlFor="privacy-policy-checkbox">
                Отправляя заявку Вы соглашаетесь
                с политикой
                конфиденциальности
            </label>
            </div>
            <Buttons color={'white'} bgColor={'black'} arrow={'right'} className={'feedback-form'} text={'Отправить'} />

        </div>

    )

}
export default FeedbackForm