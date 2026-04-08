import React from 'react';
// Importamos los iconos necesarios de Lucide
import { 
  UserCircle, 
  Utensils, 
  Scissors, 
  ShoppingBag, 
  Sparkles, 
  Layout 
} from 'lucide-react';

const Services = () => {
  
  const servicesList = [
    {
      title: "Portafolios Profesionales",
      description: "Diseño exclusivo para profesionales que buscan destacar. Creamos una vitrina digital de alto impacto que proyecta confianza y atrae mejores oportunidades laborales.",
      icon: <UserCircle className="w-8 h-8" />
    },
    {
      title: "Sistemas para Restaurantes",
      description: "Digitaliza tu menú y gestiona pedidos sin pagar comisiones a terceros. Control de mesas, stock y ventas desde un panel privado, rápido y fácil de usar.",
      icon: <Utensils className="w-8 h-8" />
    },
    {
      title: "Salones de Belleza y Barberías",
      description: "Olvídate del cuaderno de citas. Implementamos agendas inteligentes donde tus clientes reservan su turno online, optimizando el tiempo de tus estilistas.",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      title: "Tiendas Online (E-commerce)",
      description: "Lleva tu tienda al mundo digital. Catálogo de productos con carrito de compras y conexión directa a WhatsApp o pasarelas de pago para vender 24/7.",
      icon: <ShoppingBag className="w-8 h-8" />
    },
    {
      title: "Servicios de Limpieza",
      description: "Plataformas con cotizadores automáticos. Permite que tus clientes calculen presupuestos y agenden visitas técnicas al instante, formalizando tu servicio.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Catálogos Digitales",
      description: "Sustituye los PDF pesados por una Web App visual y fluida. Ideal para ventas por catálogo o muestras de productos con carga ultra rápida en móviles.",
      icon: <Layout className="w-8 h-8" />
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full py-24 px-4 md:px-6 bg-white dark:bg-background transition-colors duration-300 relative">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-secundary mb-6">
            Soluciones <span className="text-primary italic">Digitales</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              onClick={scrollToContact}
              className={`
                group cursor-pointer p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden shadow-sm hover:shadow-xl
                bg-white border border-slate-100
                dark:diagonal-gradient-pro dark:border-gray-800 dark:hover:border-primary
              `}
            >
              {/* Overlay sutil al hacer hover */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              {/* CONTENEDOR DEL ICONO */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl 
                bg-slate-50 dark:bg-slate-900/50 
                text-primary border border-slate-100 dark:border-slate-800
                group-hover:scale-110 group-hover:bg-primary group-hover:text-background
                transition-all duration-500 relative z-10">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-300 relative z-10">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>

              {/* Enlace CTA */}
              <div className="flex items-center text-xs font-bold text-accent uppercase tracking-widest relative z-10">
                Consultar ahora 
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;