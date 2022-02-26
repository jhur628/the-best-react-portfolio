import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './header/Header';
import Image from './image/Image'
import Footer from './footer/Footer';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Resume from './resume/Resume';
import AboutMePic from './assets/about-me.jpg'
import ResumePic from './assets/Resume.jpg'

function App() {
  const [ image, setImage ] = useState('')
  const pickImage = (element) => {
    console.log(element)
    setImage(element)
  }

  const imageSwitch = (image) => {
    // switch (image) {
    //   case 'about-me' :
    //     return AboutMePic;
    //     break;
    //   case 'resume' :
    //     return ResumePic;
    // }
    if (image === "about-me") {
      return AboutMePic
    } else if (image === "resume") {
      return ResumePic
    }
  }

  return (
    <div className="da-body">
      <Header pickImage={pickImage}/>
      <div className='container'>
        <img src={imageSwitch(image)}/>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
