import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Projects from './components/Projects';
import FaQuestion from './components/FaQ';
import Services from './components/Services';
import Skills from './components/Skills';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { DarkModeProvider } from './context/DarkModeContext';


export default function App() {

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="min-h-screen font-sans transition-colors duration-300 bg-white dark:diagonal-gradient-pro">
          <Navbar />
          <Hero />
          <AboutMe />
          <FaQuestion />
          <Contact />
          <Routes>
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

