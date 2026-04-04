import React from 'react';
import { Code2, Layout, Server, Database, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  // Lista de servicios profesionales
  const servicesList = [
    {
      title: "Desarrollo Frontend",
      description: "Creación de interfaces modernas y ultra rápidas con React, utilizando arquitecturas de componentes escalables.",
      icon: <Layout className="w-10 h-10 text-primary" />,
    },
    {
      title: "Backend & APIs",
      description: "Construcción de servidores robustos con Node.js y Express, diseñando APIs RESTful eficientes y seguras.",
      icon: <Server className="w-10 h-10 text-primary" />,
    },
    {
      title: "Bases de Datos",
      description: "Diseño y optimización de bases de datos relacionales con MySQL, garantizando la integridad de los datos.",
      icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      title: "Contenerización",
      description: "Despliegue y gestión de aplicaciones mediante Docker para asegurar entornos de producción idénticos.",
      icon: <Code2 className="w-10 h-10 text-primary" />,
    },
    {
      title: "Responsive Design",
      description: "Adaptación de cualquier plataforma a dispositivos móviles y tablets garantizando la mejor experiencia de usuario.",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
    },
    {
      title: "Despliegue en Linux",
      description: "Configuración de servidores Ubuntu/Debian, NGINX y mantenimiento de infraestructura en la nube.",
      icon: <Globe className="w-10 h-10 text-primary" />,
    },
  ];

  // Función para navegar suavemente al componente de contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
          MIS <span className="text-primary italic">SERVICIOS</span>
        </h2>
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
            {/* Efecto de brillo sutil al hacer hover */}
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>

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