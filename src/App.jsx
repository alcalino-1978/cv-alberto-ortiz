import { useState } from 'react'

import Theme from './components/ThemeSwitcher'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Languages from './components/Languages'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'
import { CV } from './CV/CV'

import './App.scss'

const { personalInfo, experience, skills, education, languages  } = CV;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header personalInfo={personalInfo} />
      <main>
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Education education={education} />
        <Languages languages={languages} />
      </main>
      <Footer personalInfo={personalInfo} />
    </>
  )
}

export default App
