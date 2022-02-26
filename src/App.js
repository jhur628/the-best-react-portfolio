import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Resume from './resume/Resume';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
