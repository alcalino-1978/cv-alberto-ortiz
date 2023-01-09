import React from 'react'
import albertoFoto  from '../../assets/foto-alberto-ortiz-trevino.jpg'
import styles from './Header.module.scss'

const Header = ( { personalInfo }) => {
  return (
    <header className="main-header container">
      <div className="row flex-xs__column padding__sm flex-lg__row flex__align-items-middle">
        <div className="menu-hamburger">
          <span className="menu-hamburger__icon fa-solid fa-bars"></span>
        </div>
        <div className="main-header__block-main text__align-center">
          <h1 className="title-md margin-vertical__sm text__upper-case"><span id="personal__info-name" className="personal__info-label">{personalInfo.name}</span></h1>
          <div id="personal__info-charge" className="sub color-white text__upper-case">{personalInfo.charge}</div>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__list-item"><a href="#experience" className="main-nav__link">Experiencia Laboral</a></li>
              <li className="main-nav__list-item"><a href="#skills" className="main-nav__link">Skills</a></li>
              <li className="main-nav__list-item"><a href="#formacion" className="main-nav__link">Formación</a></li>
              <li className="main-nav__list-item"><a href="#languages" className="main-nav__link">Idiomas</a></li>
              <li className="main-nav__list-item"><a href="#contacto" className="main-nav__link"> Contacto</a></li>
            </ul>
          </nav>

        </div>
        <div className="avatar">
          <img className="avatar__image" src={personalInfo.image} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header