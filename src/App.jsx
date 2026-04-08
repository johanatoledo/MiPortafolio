import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Projects from './components/Projects';
import Faq from './components/Faq';
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
          
        
          <section id="services"><Services /></section>

          <section id="proj"><Projects /></section>
          <section id="faq"><Faq /></section>
          <section id="contact"><Contact /></section>

          <Routes>
            <Route path="/" element={null} /> 
            <Route path='/blog' element={<Blog />} />
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  )
}