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
    <div className="bg-white/90 dark:bg-[#111] rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col transition-all duration-300 border border-gray-100 dark:border-gray-800">
      <img
        ref={imgRef}
        src={proj.image}
        alt={proj.title}
        className="w-full h-40 object-cover rounded-xl mb-4 border border-gray-200 dark:border-gray-800"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-cyan-400 mb-2">{proj.title}</h3>
      <p className="text-gray-500 dark:text-accent font-medium mb-1">{proj.client}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-white/95 dark:bg-background transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-secundary mb-10">
           Inspirados en estandares del mercado <span className="text-primary italic">Estadounidense</span>
        </h2>
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
