import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const AboutMe = () => {
  const slides = [
    {
      title: "Soluciones web integrales",
      content: "Te guiaré a través de todo el ciclo de vida de tu aplicación, desde la creación, teniendo en cuenta el diseño de interfaces dinámicas y responsivas, hasta la arquitectura lógica y la gestión eficiente de datos. Mi enfoque no se limita a escribir código, sino a asegurar que cada capa funcione en armonía.",
      
    },
    {
      title: "Sistemas Robustos y Escalables",
      content: "Más allá del código, me especializo en la columna vertebral de tu proyecto. Gestionando servidores , orquestación componetizada y seguridad con Cloud para asegurar que tu aplicación no solo esté en línea, sino que sea a prueba de fallos y de alto rendimiento.",
    
    },
    {
      title: "Presencia Digital Innovadora",
      content: "Transformo ideas audaces en portafolios disruptivos para fotógrafos, modelos y creativos. Mi objetivo es construir una identidad digital única que se destaque mediante un diseño vanguardista y experiencias de usuario fluidas.",
    
    }
  ];

  return (
    <section className="relative py-24 bg-dark overflow-hidden">

      <span className="absolute -top-10 -left-10 text-[15rem] text-primary/5 font-mono select-none pointer-events-none z-0">
        {'{'}
      </span>
      <span className="absolute -bottom-20 -right-10 text-[15rem] text-accent/5 font-mono select-none pointer-events-none z-0">
        {'}'}
      </span>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={1}
          className="pb-12"
          style={{ minHeight: '320px' }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative border-l-2 border-primary/30 pl-8 md:pl-12 py-4 bg-dark">
                <h2 className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-6">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed font-light text-justify">
                  "{slide.content}"
                </p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
  
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: #333 !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: #00ffff !important; box-shadow: 0 0 10px #00ffff; }
      `}} />
    </section>
  );
};

export default AboutMe;