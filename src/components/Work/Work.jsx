import React from 'react'
import reg from '../../assets/img/reg.png'
import ur from '../../assets/img/ur.png'
import doc from '../../assets/img/doc.png'
import agent from '../../assets/img/agent.png'
import './Work.css'

const Work = () => {
  return (
    <div className="work">
      <div className="work__title">Как мы <span>работаем</span></div>
      <div className="work__row">
        <div className="work__column">
          <div className="item-work">
            <div className="item-work__icon">
              <img src={reg} alt="" />
            </div>
            <div className="item-work__title">Шаг 1</div>
            <div className="item-work__text">Регистрация</div>
          </div>
        </div>
        <div className="work__column">
          <div className="item-work">
            <div className="item-work__icon">
              <img src={ur} alt="" />
            </div>
            <div className="item-work__title">Шаг 2</div>
            <div className="item-work__text">
              Добавление данных юрлица в систему
            </div>
          </div>
        </div>
        <div className="work__column">
          <div className="item-work">
            <div className="item-work__icon">
              <img src={doc} alt="" />
            </div>
            <div className="item-work__title">Шаг 3</div>
            <div className="item-work__text">Прикрепление документов</div>
          </div>
        </div>
        <div className="work__column">
          <div className="item-work">
            <div className="item-work__icon">
              <img src={agent} alt="" />
            </div>
            <div className="item-work__title">Шаг 4</div>
            <div className="item-work__text">Выбор контрагентов</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
