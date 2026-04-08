import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Code2, Layout, Server, Database, Smartphone, Globe } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const AboutMe = () => {
  const slides = [
    {
      title: "Soluciones web integrales",
      content: "Te guiaré a través de todo el ciclo de vida de tu aplicación, teniendo en cuenta el diseño de interfaces dinámicas y responsivas. Mi enfoque no se limita a escribir código, sino a asegurar que cada capa funcione en armonía.",
      icon: <Code2 className="w-10 h-10 text-primary" />,
    },
    {
      title: "Desarrollo Frontend y Backend",
      content: "Creación de interfaces modernas y ultra rápidas , utilizando arquitecturas de componentes escalables.",
      icon: <Layout className="w-10 h-10 text-primary" />,
      
    },
    {
      title: "Sistemas Robustos y Escalables",
      content: "Más allá del código, me especializo en la columna vertebral de tu proyecto. Gestionando servidores , orquestación componetizada y seguridad con Cloud para asegurar que tu aplicación no solo esté en línea, sino que sea a prueba de fallos y de alto rendimiento.",
      icon: <Server className="w-10 h-10 text-primary" />,
    },
    {
    title: "Bases de Datos",
    content: "Diseño y optimización de bases de datos, garantizando la integridad de los datos.",
    icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      title: "Presencia Digital Innovadora",
      content: "Transformo ideas audaces en portafolios disruptivos para fotógrafos, modelos y creativos.",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
    
    },
     {
      title: "Contenerización y Despliegue",
      content: "Despliegue y gestión de aplicaciones con las mejores plataformas para asegurar entornos de producción idénticos.Configuración de servidores y mantenimiento de infraestructura en la nube",
      icon: <Globe className="w-10 h-10 text-primary" />,
    
    },

  ];

  return (
    <section className="relative py-24 bg-dark overflow-hidden  dark:bg-background   transition-colors duration-300 overflow-hidden rounded-xl shadow-sm">
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
              <div className=" relative border-l-2 border-primary/30 pl-8 md:pl-12 py-4 bg-dark dark:bg-background rounded-xl shadow-sm">
                {slide.icon}
                <h2 className="text-primary text-sm mt-4 uppercase tracking-[0.3em] font-bold mb-6">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 italic leading-relaxed font-light text-justify">
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