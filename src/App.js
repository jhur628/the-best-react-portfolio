import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './header/Header';
import Image from './image/Image'
import Footer from './footer/Footer';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Resume from './resume/Resume';

function App() {
  const [ image, setImage ] = useState('')
  return (
    <div className="da-body">
      <Header />
      <div className='container'>
        <Image />
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
