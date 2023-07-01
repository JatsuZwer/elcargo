import React from 'react'
import logo from '../../assets/img/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__row">
            <div className="header__column">
              <a href="" className="item-header__logo">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="header__column">
              <div className="item-header__title">8-800-888-88-88</div>
              <div className="item-header__text">Поддержка клиентов</div>
            </div>
            <div className="header__column">
              <button className="item-header__button">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
