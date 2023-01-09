import React from 'react'
import styles from './Skills.module.scss'

const Skills = ( { skills }) => {
  return (
    <section id="skills" className="container">
      <div className="row padding-horizontal__lg">
        <h2 className="title-sm title--main-title">Skills</h2>
      </div>
      <div className="row padding-horizontal__lg padding-bottom__sm">
        <ul id="skills-list" className="skills-list">
          {Object.entries(skills).map(([key, value], i) => {
              return (
                <li className="skills-list__item col-xs-12 col-sm-4" key={i}>
                  <h3 className="title-xs skills-list__title">{key}</h3>
                  <ul className="skills-list__sublist">
                    {value.map((item) => {
                      return (
                        <li className='skills-list__sublist-item'>{item}</li>
                      )
                    })}
                  </ul>
                </li>
                )
              })
            }
        </ul>
      </div>
    </section>
  )
}

export default Skills