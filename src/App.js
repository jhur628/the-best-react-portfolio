import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Resume from './resume/Resume';
import AboutMePic from './assets/about-me.jpg';
import ResumePic from './assets/Resume.jpg';
import TourismPlannerPic from './assets/TourismPlanner.jpg';
import TechBlogPic from './assets/techBlog.jpg';
import DibsPic from './assets/dibs.jpg';
import NoteTakerPic from './assets/noteTaker.jpg';
import RegexTutorialPic from './assets/regexTutorial.jpg'
import SecretPic from './assets/secret-image.jpg';

function App() {
  const [ image, setImage ] = useState('about-me')
  const pickImage = (element) => {
    setImage(element)
  }

  const imageSwitch = (image) => {
    switch (image) {
      case 'about-me' :
        return AboutMePic;
        break;
      case 'resume' :
        return ResumePic;
        break;
      case 'tour-baagii' :
        return TourismPlannerPic;
        break;
      case 'tech-blog' :
        return TechBlogPic;
        break;
      case 'dibs' :
        return DibsPic;
        break;
      case 'note-taker' :
        return NoteTakerPic;
        break;
      case 'regex-tutorial' :
        return RegexTutorialPic;
        break;
      case 'secret-image' :
        return SecretPic;
        break;
    }
  }

  return (
    <div className="da-body">
      <Header pickImage={pickImage}/>
      <div className='container'>
        <img className='image' src={imageSwitch(image)} alt={image} />
        <Routes>
          <Route path="/the-best-react-portfolio" element={<AboutMe pickImage={pickImage}/>} />
          <Route path="/the-best-react-portfolio/portfolio/" element={<Portfolio pickImage={pickImage}/>} />
          <Route path="/the-best-react-portfolio/contact" element={<Contact />} />
          <Route path="/the-best-react-portfolio/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
