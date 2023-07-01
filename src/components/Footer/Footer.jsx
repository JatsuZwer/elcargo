import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__body">
        <div className="footer__row">
          <div className="footer__column">
            <div className="item-footer">
              <div className="item-footer__title">Документация</div>
              <div className="item-footer__text">
                О нас
                <br /> Договор на перевозку грузов автомобильным транспортом
                <br />
                Договор поручительства
                <br /> Договор на оказание услуг (Публичная оферта) <br />{' '}
                Договор на транспортно-экспедиционное обслуживание <br />
                Пользовательское соглашение Политика в отношении обработки
                персональных данных
              </div>
            </div>
          </div>
          <div className="footer__column">
            <div className="item-footer">
              <div className="item-footer__title">Контакты</div>
              <div className="item-footer__text">
                Телефон
                <span className="black">8-800-900-00-99 </span>
                Сотрудничество
                <span className="green">svetofore@mail.com</span>
                Техническая поддержка
                <span className="green">support@svetofore.ru</span>© Любое
                использование либо копирование материалов или подборки
                материалов сайта, элементов дизайна и оформления допускается
                только с разрешения правообладателя и только со ссылкой на
                источник: www.svetofore.com.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
