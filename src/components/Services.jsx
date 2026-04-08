import React from 'react';



const Services = () => {
  
  const servicesList = [
    {
      title: "Portafolios profesionales",
      description: "Creación de interfaces modernas y ultra rápidas con React, utilizando arquitecturas de componentes escalables.",
    },
    {
      title: "Sistema para restaurantes",
      description: "Construcción de servidores robustos con Node.js y Express, diseñando APIs RESTful eficientes y seguras.",
      
    },
    {
      title: "Paginas para salones y/o barberias",
      description: "Diseño y optimización de bases de datos relacionales con MySQL, garantizando la integridad de los datos.",
    
    },
    {
      title: "Tiendas Online",
      description: "Despliegue y gestión de aplicaciones mediante Docker para asegurar entornos de producción idénticos.",
      
    },
    {
      title: "Paginas para servicios de limpieza",
      description: "Adaptación de cualquier plataforma a dispositivos móviles y tablets garantizando la mejor experiencia de usuario.",
      
    },
    
  ];

  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-secundary mb-10">Nuestros  <span className="text-primary italic">Servicios</span></h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Soluciones integrales de software combinando diseño moderno con infraestructura sólida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <div
            key={index}
            onClick={scrollToContact}
            className="diagonal-gradient-pro group cursor-pointer p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
          >
            
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="flex items-center text-xs font-bold text-accent uppercase tracking-widest">
              Solicitar servicio 
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;