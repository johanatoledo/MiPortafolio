


import React, { useEffect, useState, useRef } from "react";
import robotIA from "../assets/robot-IA-transp.png";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: ["#00ffff", "#ff003c"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // Ref y estado para efecto de movimiento con el mouse
  const robotRef = useRef(null);

  // Movimiento del robot IA según el mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const robot = robotRef.current;
      if (!robot) return;
      const rect = robot.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      // Limitar el rango de movimiento
      const maxMove = 30;
      const moveX = Math.max(Math.min(x / 15, maxMove), -maxMove);
      const moveY = Math.max(Math.min(y / 15, maxMove), -maxMove);
      robot.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.18)`;
    };
    const handleMouseLeave = () => {
      const robot = robotRef.current;
      if (robot) robot.style.transform = "scale(1.18)";
    };
    const area = document.getElementById("home");
    if (area) {
      area.addEventListener("mousemove", handleMouseMove);
      area.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (area) {
        area.removeEventListener("mousemove", handleMouseMove);
        area.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[90vh] h-auto bg-background overflow-hidden flex items-center justify-center select-none py-8 md:py-0">
      {/* CAPA DE PARTÍCULAS (Fondo) */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={particlesOptions}
        />
      )}
      {/* CAPA DE GRADIENTE SUTIL */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_70%)]"></div>
      {/* CONTENIDO Y ROBOT */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-2 sm:px-4 gap-4 md:gap-8">
        {/* CONTENIDO PRINCIPAL */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start max-w-full">
  {/* Badge Superior: Reducido para que no se vea tosco */}
  <span className="inline-block px-3 py-1 border border-primary/20 rounded-full text-primary text-[10px] sm:text-xs font-mono mb-4 tracking-[0.2em] uppercase bg-primary/5">
    Desarrollo Web & IA
  </span>

  {/* Título Principal: Ajustado de 6xl a 4xl/5xl para evitar colisiones */}
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
    Transformo tus ideas en <span className="text-primary">Soluciones Digitales</span> de Alto Impacto.
  </h1>

  {/* Descripción: Reducida a text-base/lg (estándar profesional) */}
  <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-md lg:max-w-lg leading-relaxed">
    Especialista en el diseño de plataformas de alta conversión e integración de 
    <strong className="text-secundary font-semibold ml-1">Agentes de IA</strong> que automatizan tus ventas las 24 horas.
  </p>

  {/* Botones: Ajuste de padding para que se vean más estilizados */}
  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
    <a 
      href="#contact" 
      className="px-7 py-3.5 bg-primary text-background font-bold rounded-full transition-all hover:bg-white hover:scale-105 active:scale-95 text-sm shadow-[0_0_20px_rgba(0,255,255,0.2)]"
    >
      Cotizar proyecto
    </a>
    <a 
      href="#services" 
      className="px-7 py-3.5 bg-transparent border border-gray-700 text-white rounded-full transition-all hover:border-primary hover:text-primary text-sm"
    >
      Ver Servicios
    </a>
  </div>
</div>
        {/* IMAGEN ROBOT IA */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
  <div 
    className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-full flex justify-center items-center" 
    style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
  >
    <img
      ref={robotRef}
      src={robotIA}
      alt="Robot IA"
      className="animate-float w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[500px] xl:max-h-[500px] drop-shadow-[0_15px_40px_rgba(0,255,255,0.25)] object-contain pointer-events-none"
      style={{ 
        transition: 'transform 0.1s ease-out', 
        willChange: 'transform', 
        transform: `rotateX(0deg) rotateY(0deg)` 
      }}
    />
    
    <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;