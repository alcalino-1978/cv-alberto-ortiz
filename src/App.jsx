import React, { useEffect, useState } from "react";

import Theme from "./components/ThemeSwitcher";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import { CV } from "./CV/CV";

import "./App.scss";

// const { personalInfo, experience, skills, education, languages  } = CV();

function App() {
  const [data, setData] = useState([]);
  const [numero, setNumero] = useState(0);

  // useEffect(() => {debugger; });

  useEffect(() => {
    let mounted = true;
    CV().then((response) => {
      if (mounted) {
        setData(response);
      }
    });
    return () => (mounted = false);
  }, []);

  function content() {
    return (
      <>
        <Header personalInfo={data} />
        <main>
          <Experience experience={data.experience} />
          <Skills skills={data.skills} />
          <Education education={data.education} />
          <Languages languages={data.languages} />
        </main>
        <Footer personalInfo={data.personalInfo} />
      </>
    );
  }
  function ContentTemporal({ data }) {
    return (
      <>
        <Header personalInfo={data.personalInfo} />
        <main>
          <Experience experience={data.experience} />
          <Skills skills={data.skills[0]} />
          <Education education={data.education} />
          <Languages languages={data.languages} />
        </main>
        <Footer personalInfo={data.personalInfo} />
      </>
    );
  }

  return (
    <>
      {data?.personalInfo ? (
        <ContentTemporal data={data} />
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
}

export default App;
