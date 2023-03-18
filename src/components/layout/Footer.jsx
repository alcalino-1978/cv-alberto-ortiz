import React from 'react'
import styles from './Footer.module.scss'
import { updateEmail } from "../../CV/CV";

const Footer = ( { personalInfo }) => {

  const handlerEmail = (event) => {
    console.log(`He cambiado el ${event.target.value}`);
    updateEmail(event.target.value);
  }
  const personalData = Object.assign({}, personalInfo);

  return (
    <footer id="contacto" className="main-footer container">
      <div className="row personal-info bg-color-primary padding__sm uniform-color">
        <ul className="footer-links">
          <li className="footer-links__item">Correo: <a href={`mailto:${ personalInfo.mail }`} id="personal__info-mail" target="_blank">{ personalInfo.mail }</a>
            <input type="email" value={personalData.mail} onChange={handlerEmail}/>
          </li>
          <li className="footer-links__item">Teléfono: <span id="personal__info-phone">{ personalInfo.phone }</span></li>
          <li className="footer-links__item">LinkedIn: <a href="" id="personal__info-linkedin" target="_blank">{ personalInfo.linkedin }</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer