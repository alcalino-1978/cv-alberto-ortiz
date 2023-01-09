import React from 'react'
import styles from './Experience.module.scss'

const Experience = ( { experience }) => {
  return (
    <section id="experience" className="container">
      <div className="row padding-horizontal__lg padding-top__md padding-bottom__sm">
        <h2 className="title-sm title--main-title">Experiencia Laboral</h2>
        <div id="experience-container" className="experience-container">
          {experience.map((item) => {
            return (
              <div className="experience-container__content margin-bottom__sm" key={JSON.stringify(item)}>
                <h3 className="title-xs">{item.nameJob} | {item.companyName}</h3>
                    <span className="sub text-smaller">{item.date}</span>
                    <p>{item.description}</p>
              </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Experience