

import React, { useRef } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLazyLoad } from '../hooks/useLazyLoad';
import heroImg from '../assets/hero.jpg';
import ProfileImage from '../components/ProfileImage';

const Hero = () => {
  useDocumentTitle('ToledanaDev | Portfolio');
  const imgRef = useRef(null);
  useLazyLoad(imgRef);
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center px-4 bg-white dark:bg-background text-black dark:text-white transition-colors duration-300">
      <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/2">
        <ProfileImage src={heroImg} />
      </div>
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 md:pl-8">
        <h1 className="font-['Sora'] mt-12 font-[600] text-4xl md:text-7xl tracking-tighter leading-[1.1] text-black dark:text-white text-center md:text-left">
          Transformo <span className="text-primary">ideas</span> en <span className="text-accent italic">aplicaciones robustas</span>
        </h1>
        <p className="text-xl text-gray-400  mb-8 max-w-2xl text-center md:text-left mt-6 ">
          Desarrollamos aplicaciones personalizadas que se adaptan perfectamente a las necesidades únicas de tu negocio.
        </p>
        <div className="relative group inline-block p-[2px] rounded-full overflow-hidden">
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffff_0%,#050505_50%,#ff003c_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
          <div className="relative bg-black rounded-full">
            <button className="btn-cyber relative flex items-center justify-center hover:scale-105 active:scale-95 z-10">
              ¡Hablemos sobre tu proyecto!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;