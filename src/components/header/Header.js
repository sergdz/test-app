import './header.scss';

import logo from '../img/logo.jpg';
const Header = () => {
    return (
        <header className='app__header'>
            <img className='app__logo'  src={logo} alt="Логотип" />
            <ul className='app__menu'>
                <li className="app__menu_item">Главная</li>
                <li className="app__menu_item">Галерея</li>
                <li className="app__menu_item">Проекты</li>
                <li className="app__menu_item">Сертификаты</li>
                <li className="app__menu_item">Контакты</li>
            </ul>
        </header>
    )
}
export default Header