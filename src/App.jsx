import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Description  from './pages/Description';
import Projects from './components/Projects';
import Faq from './components/Faq';
import Services from './components/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { DarkModeProvider } from './context/DarkModeContext';
import About from './pages/About';

// Componente para agrupar la Landing Page
const LandingPage = () => (
  <>
    <section id="home"> <Hero /> </section>
    <section id="description"><Description /></section>
    <section id="services"><Services /></section>
    <section id="proj"><Projects /></section>
    <section id="faq"><Faq /></section>
    <section id="contact"><Contact /></section>
  </>
);

export default function App({ setLocale, locale }) {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="min-h-screen font-sans transition-colors duration-300 bg-white dark:diagonal-gradient-pro">
          <Navbar setLocale={setLocale} locale={locale} />
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}