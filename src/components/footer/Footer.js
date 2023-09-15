import logo from '../img/footerLogo.png';
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import LinkedIn from '../img/LinkedIn.svg'
import pininterest from '../img/pininterest.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss'

const Footer = () => {
    return (
        <div className="app__footer">
            <div className="app__footer__block">
                <img src={logo} className='app__footer__block-logo' alt="" />

            </div>
            <ul className="app__footer-list info">
                <li><strong>Информация</strong></li>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Галерея</a></li>
                <li><a href="#">Проекты</a></li>
                <li><a href="#">Сертификаты</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <ul className="app__footer-list contact">
                <li><strong>Контакты</strong></li>
                <li > <FontAwesomeIcon icon={faLocationDot} className='app__footer-icon icon' />100000, Республика Казахстан,</li>
                <li className='app__footer-list-address offset'>г. Караганда, ул. Телевизионная 10</li>
                <li className='app__footer-list-phone offset'> <FontAwesomeIcon icon={faPhone} className='app__footer-icon icon' />+38 (000) 000 00 00</li>
                <li> <FontAwesomeIcon icon={faEnvelope} className='app__footer-icon icon' style={{ color: "#ffffff", }} />mail@gmail.com</li>
            </ul>
            <div className="app__footer-list media">
                <p><strong>Социальные сети</strong></p>
                <ul >
                    <li><a href="#"> <img src={facebook} alt="" /> </a></li>
                    <li><a href="#"><img src={twitter} alt="" /> </a></li>
                    <li><a href="#"><img src={LinkedIn} alt="" /></a></li>
                    <li><a href="#"><img src={pininterest} alt="" /></a></li>
                </ul>

            </div>
        </div>


    )
}
export default Footer;