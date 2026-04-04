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
    problem: 'The client needed a modern, scalable platform to manage and promote events online.',
    solution: 'React was chosen for its component reusability and fast development. Tailwind CSS ensured a unique, responsive design.',
    result: 'Load times reduced by 40%. Engagement increased with a seamless booking experience.',
    image: soundfusionImg,
    stack: ['React', 'Node.js', 'MySQL', 'Docker'],
  },
  {
    title: 'CleanPro Services',
    client: 'Cleaning Company',
    problem: 'Needed an online presence to attract new clients and manage service requests.',
    solution: 'React enabled a fast, interactive UI. Backend with Node.js for request management.',
    result: 'Client acquisition up 30%. Admin time reduced by automation.',
    image: cleanproImg,
    stack: ['React', 'Node.js'],
  },
  {
    title: 'Lima Bites',
    client: 'Restaurant, Lima-Peru',
    problem: 'Wanted to showcase their menu and allow online reservations.',
    solution: 'React and Tailwind for a visually appealing, mobile-first site. Integrated booking system.',
    result: 'Reservations up 50%. Positive feedback on design and usability.',
    image: limabitesImg,
    stack: ['React', 'Node.js'],
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
      <ul className="mb-2 text-sm text-black dark:text-white">
        <li><b>Problem:</b> {proj.problem}</li>
        <li><b>Solution:</b> {proj.solution}</li>
        <li><b>Result:</b> {proj.result}</li>
      </ul>
      <div className="flex gap-2 mt-auto">
        {proj.stack.map((tech, i) => (
          <span key={i} className="bg-primary text-black px-2 py-1 rounded text-xs font-bold">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-8 bg-white dark:bg-background text-black dark:text-white transition-colors duration-300">
      <h2 className="text-5xl font-bold text-primary text-center mb-10">Some of my projects</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} />
        ))}
      </div>
    </section>
  );
}
