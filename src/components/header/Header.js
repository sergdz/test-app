import './header.scss';

import logo from '../img/logo.jpg';
const Header = () => {
    return (
        <header className='app__header'>
            <img className='app__logo' src={logo} alt="Логотип" />
            <ul className='app__menu'>
                <li className="app__menu_item">
                    <a href="">
                        Главная
                    </a>
                </li>
                <li className="app__menu_item">
                    <a className="app__menu_item-link" href="">
                        Галерея
                    </a>
                </li>
                <li className="app__menu_item">
                    <a href="">
                        Проекты</a>
                </li>
                <li className="app__menu_item"><
                    a href="">
                    Сертификаты</a>
                </li>
                <li className="app__menu_item">
                    <a href="">
                        Контакты</a>
                </li>
            </ul>
        </header>
    )
}
export default Header