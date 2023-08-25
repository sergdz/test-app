import logo from '../img/logo.jpg';
import './Footer.scss'

const Footer = () => {
    return (
            <div className="footer">
                <img src={logo} alt="" />
                <ul className="footer-list">
                    <li><strong>Информация</strong></li>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Галерея</a></li>
                    <li><a href="#">Проекты</a></li>
                    <li><a href="#">Сертификаты</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <ul className="footer-list">
                    <li><strong>Контакты</strong></li>
                    <li>100000, Республика Казахстан,</li>
                    <li>г. Караганда, ул. Телевизионная 10</li>
                    <li>+38 (000) 000 00 00</li>
                    <li>mail@gmail.com</li>
                </ul>
                <ul className="footer-list">
                    <li><strong>Социальные сети</strong></li>
                    <li><a href="#">F</a></li>
                    <li><a href="#">T</a></li>
                    <li><a href="#">IN</a></li>
                    <li><a href="#">PI</a></li>
                </ul>
            </div>


    )
}
export default Footer;