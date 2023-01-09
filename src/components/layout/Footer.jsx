import React from 'react'
import styles from './Footer.module.scss'

const Footer = ( { personalInfo }) => {
  return (
    <footer id="contacto" class="main-footer container">
      <div class="row personal-info bg-color-primary padding__sm uniform-color">
        <ul class="footer-links">
          <li class="footer-links__item">Correo: <a href={`mailto:${ personalInfo.mail }`} id="personal__info-mail" target="_blank">{ personalInfo.mail }</a></li>
          <li class="footer-links__item">Teléfono: <span id="personal__info-phone">{ personalInfo.phone }</span></li>
          <li class="footer-links__item">LinkedIn: <a href="" id="personal__info-linkedin" target="_blank">{ personalInfo.linkedin }</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer