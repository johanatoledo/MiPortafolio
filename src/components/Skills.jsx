//revisar

import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaLinux, FaCloudflare, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';

const stacks = [
  {
    items: [
      <FaHtml5 className="text-orange-500" title="HTML5" key="html" />,
      <FaCss3Alt className="text-blue-500" title="CSS3" key="css" />,
      <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" key="tailwind" />,
      <FaBootstrap className="text-purple-600" title="Bootstrap" key="bootstrap" />,
      <FaReact className="text-cyan-400" title="React" key="react" />,
      <FaNodeJs className="text-green-400" title="Node.js" key="node" />,
      <SiMysql className="text-blue-400" title="MySQL" key="mysql" />,
       <FaLinux className="text-gray-300" title="Linux" key="linux" />,
      <FaDocker className="text-blue-500" title="Docker" key="docker" />,
      <FaCloudflare className="text-orange-400" title="Cloudflare" key="cloudflare" />,
      <FaGithub className="text-white bg-black rounded" title="GitHub" key="github" />,
      <FaGitAlt className="text-orange-600" title="Git" key="git" />,
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-12 px-4 md:px-8 bg-white/95 dark:bg-background text-gray-800 dark:text-white transition-colors duration-300 rounded-xl shadow-sm" id="skills">
      <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-20 space-y-10 md:space-y-0">
        <div className="flex gap-4 items-center text-3xl">
          {stacks[0].items}
        </div>
      </div>
    </section>
  );
}
