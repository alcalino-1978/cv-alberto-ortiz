import React from 'react'
import styles from './Languages.module.scss'

const Languages = ( { languages }) => {
  return (
    <section id="languages" className="container">
      <div className="row padding-horizontal__lg padding-bottom__sm">
        <h2 className="title-sm title--main-title">Idiomas</h2>
        <ul id="languages-container">
          {languages.map((item) => {
            return (
              <li className="languages-list__item" key={JSON.stringify(item)}>
                {item.nameEstudies + ' | ' + item.knowledge}
                <div class="languages-content">
                  <span class="languages-content__duration text__smaller text__italic"><span class="languages-content__duration-start">{item.start}</span> - <span class="languages-content__duration-end">{item.end}</span>
                        </span>
                </div>
              </li>
              )
            })
          }
        </ul>
      </div>
  </section>
  )
}

export default Languages