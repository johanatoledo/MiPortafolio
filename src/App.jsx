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
          <section id="home"> <Hero /> </section>
          <section id="about"><AboutMe /></section>
         
          <Routes>
            <Route path="/" element={null} /> 
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="*" element={null} />
          </Routes>
          <section id="proj"><Projects /></section>
          <section id="faq"><FaQuestion /></section>
          <Footer />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  )
}