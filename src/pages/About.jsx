import React from 'react';
import ProfileImage from '../components/ProfileImage';
import Particles from '@tsparticles/react';
import profilePic from '../assets/toledana_ico.png';

const particlesOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    color: { value: ['#00ffff', '#ff003c'] },
    links: {
      color: '#00ffff',
      distance: 120,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 0.5 },
    number: { density: { enable: true, area: 800 }, value: 40 },
    opacity: { value: 0.3 },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

export default function About() {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-white/95 dark:bg-background transition-colors duration-300 rounded-xl shadow-sm max-w-6xl mx-auto overflow-hidden">
      {/* Partículas de fondo */}
      <Particles id="about-particles" className="absolute inset-0 z-0" options={particlesOptions} />
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <ProfileImage src={profilePic} />
        </div>
        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary mb-8 text-left">Sobre Nosotros</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200 text-lg">
            Somos una corporación ramificada de la reconocida empresa estadounidense <b>TonavTech</b>, líder en la creación de productos digitales de alto impacto, diseñados para maximizar ventas y optimizar operaciones mediante soluciones de automatización inteligentes. Como parte de su proceso de expansión, nace esta iniciativa con el objetivo de acercar al mercado soluciones digitales innovadoras que permitan a empresas y emprendedores crecer de manera estratégica y sostenible.
          </p>
          <p className="mb-4 text-gray-800 dark:text-gray-200 text-lg">
            Detrás de la compañía están <b>Miguel y Johanna</b>, una pareja de esposos con trayectoria profesional consolidada y experiencia especializada en tecnología y soluciones digitales, quienes identificaron la necesidad de llevar herramientas más eficientes, accesibles y orientadas a resultados reales al mercado. Así surge esta propuesta: no solo como un servicio, sino como un sistema diseñado para transformar la manera en que los negocios venden y operan en el entorno digital.
          </p>
          <p className="mb-4 text-gray-800 dark:text-gray-200 text-lg">
            Esta web representa nuestro canal principal para presentar un portafolio de soluciones que integran marketing digital, software estratégico y automatización, con un enfoque claro en impulsar ingresos, optimizar procesos y posicionar a nuestros clientes como referentes en sus sectores.
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-lg">
            Con un enfoque profesional, cercano y orientado a resultados, cada proyecto que desarrollamos está enfocado en un solo objetivo: hacer que nuestros clientes vendan más, operen mejor y crezcan con solidez en el mundo digital.
          </p>
        </div>
      </div>
    </section>
  );
}
