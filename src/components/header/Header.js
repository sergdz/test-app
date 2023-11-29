import './header.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../img/logo.jpg';

const menuItems = [
    { label: 'Главная', link: '/' },
    { label: 'Галерея', link: '/gallery' },
    { label: 'Проекты', link: '/projects' },
    { label: 'Сертификаты', link: '/certificates' },
    { label: 'Контакты', link: '/contact' },
  ];

const Header = () => {
    const [activeTab, setActiveTab] = useState(() => {
      const storedActiveTab = localStorage.getItem('activeTab');
      return storedActiveTab !== null ? parseInt(storedActiveTab, 10) : 0;
    });

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    useEffect(() => {
      localStorage.setItem('activeTab', activeTab.toString());
    }, [activeTab]);

    return (
      <header className='app__header'>
        <img className='app__logo' src={logo} alt="Логотип" />

        <ul className='app__menu'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`app__menu_item ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </header>
    );
  };

  export default Header;
