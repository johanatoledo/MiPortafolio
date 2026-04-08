import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una web?",
      answer: "Depende de la complejidad. Una Landing Page toma de 1 a 3 dias, mientras que una App completa con Backend y DB puede tomar de 3 a 4 semanas."
    },
    {
      question: "¿Mi página será compatible con dispositivos móviles?",
      answer: "Absolutamente. Utilizo un enfoque 'Mobile-First' , garantizando que tu web se vea perfecta en smartphones, tablets y desktops."
    },
    {
      question: "¿Qué tanto espacio consume en mi conmputadora?",
      answer: "No ocupa espacio ni consume recursos de su computadora. Todo vive en un servidor seguro de alta velocidad  gestionado de manera independiente."
    },
     {
      question: "¿Realizas mantenimiento después del lanzamiento?",
      answer: "Claro que si, hacemos un continuo seguimiento a tu app asegurandonos de su correcto funcionamiento."
    },
    {
      question: "¿Ofreces garantia?",
      answer: "Todos nuestros servicios vienen con hasta tres meses de garantia."
    },
    {
      question: "¿Mi pagina es personalizable?",
      answer: "Sí. En toledadev el todas ideas son tomadas en cuenta"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
         <h2 className="text-3xl font-bold text-secundary mb-10">Preguntas <span className="text-primary italic">Frecuentes</span></h2>
         
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                diagonal-gradient-pro rounded-2xl border-2 transition-all duration-500
                ${openIndex === index ? 'border-primary shadow-[0_0_15px_rgba(0,255,255,0.2)]' : 'border-gray-800/50 hover:border-gray-700'}
              `}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex justify-between items-center group focus:outline-none"
              >
                <span className={`
                  text-lg font-bold transition-colors duration-300
                  ${openIndex === index ? 'text-primary' : 'dark:text-white text-gray-200 group-hover:text-primary'}
                `}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180 text-primary' : 'text-gray-500'
                  }`} 
                />
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-6 pb-8 text-gray-400 dark:text-gray-400 text-base leading-relaxed border-t border-gray-800/30 pt-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-accent rounded-full shrink-0"></div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaQ;