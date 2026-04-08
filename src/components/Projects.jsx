//editar para incluir enlace a los proyectos en github 
import React, { useRef } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

import soundfusionImg from '../assets/soundfusion.jpg';
import cleanproImg from '../assets/cleanpro.jpg';
import limabitesImg from '../assets/limabites.jpg';

const projects = [
  {
    title: 'Sound Fusion Entertainment',
    client: 'Event Corporation, USA',
    image: soundfusionImg,
  },
  {
    title: 'CleanPro Services',
    client: 'Cleaning Company',
    image: cleanproImg,
  },
  {
    title: 'Lima Bites',
    client: 'Restaurant, Lima-Peru',
    image: limabitesImg,
  
  },
];


function ProjectCard({ proj }) {
  const imgRef = useRef(null);
  useLazyLoad(imgRef);
  return (
    <div className="bg-gray-100 dark:bg-[#111] rounded-xl shadow-lg p-6 flex flex-col transition-colors duration-300">
      <img
        ref={imgRef}
        src={proj.image}
        alt={proj.title}
        className="w-full h-40 object-cover rounded mb-4"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{proj.title}</h3>
      <p className="text-accent font-medium mb-1">{proj.client}</p>
      
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-8 bg-white dark:bg-background text-black dark:text-white transition-colors duration-300">
     <div className="text-center mb-16">
         <h2 className="text-3xl font-bold text-secundary mb-10"> Expande tu idea de negocio a <span className="text-primary italic"> EEUU y el mundo!</span></h2>
         
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} />
        ))}
      </div>
    </section>
  );
}
