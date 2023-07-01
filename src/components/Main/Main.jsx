import mainPhoto from '../../assets/img/main.png'
import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className="mainblock">
      <div className="mainblock__body">
        <div className="mainblock__image">
          <img src={mainPhoto} />
        </div>

        <div className="mainblock__title">
          Платформа для грузоотправителей и владельцев транспорта
        </div>
        <div className="mainblock__row">
          <div className="mainblock__column">
            <div className="item-mainblock">
              <div className="item-mainblock__title">3000+</div>
              <div className="item-mainblock__text">рейсов в месяц</div>
            </div>
          </div>
          <div className="mainblock__column">
            <div className="item-mainblock">
              <div className="item-mainblock__title">15000+</div>
              <div className="item-mainblock__text">перевозчиков</div>
            </div>
          </div>
          <div className="mainblock__column">
            <div className="item-mainblock">
              <div className="item-mainblock__square">
                <div className="item-mainblock__text">
                  Только проверенные грузовладельцы и перевозчики
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
