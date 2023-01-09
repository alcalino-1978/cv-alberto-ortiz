import React from 'react'
import styles from './Education.module.scss'

const Education = ( { education }) => {
  return (
    <section id="formacion" className="container">
      <div className="row padding-horizontal__lg">
        <h2 className="title-sm title--main-title">Formación</h2>
      </div>
      <div className="row padding-horizontal__lg padding-bottom__sm">
        <ul id="studies-container" className="studies-container">
          {education.map((item) => {
              return (
                <div className="experience-container__content margin-bottom__sm" key={JSON.stringify(item)}>
                  <h3 class="title-xs">{item.nameEstudies}</h3>
                  <span class="sub text-smaller">{item.place} | {item.start} - {item.end}</span>
                </div>
                )
              })
            }
        </ul>
      </div>
    </section>
  )
}

export default Education