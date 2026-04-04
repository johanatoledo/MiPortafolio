import React from 'react';

export default function Blog() {
  return (
    <section className="py-16 px-8 bg-white dark:bg-background text-black dark:text-white transition-colors duration-300" id="blog">
      <h2 className="text-3xl font-bold text-primary mb-10">Technical Blog</h2>
      <article className="bg-gray-100 dark:bg-[#111] rounded-xl shadow-lg p-6 max-w-2xl mx-auto transition-colors duration-300">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">How I set up my own home server</h3>
        <p className="mb-2 text-black dark:text-white">In this post, I summarize the process of configuring my own Linux server, dockerizing my portfolio, and securing it with Cloudflare Tunnels. This setup allows me to host my applications with full control, high security, and zero monthly fees.</p>
        <ul className="list-disc ml-6 text-black dark:text-white mb-2">
          <li>Ubuntu 25.10 installation and hardening</li>
          <li>Dockerizing the React app for easy deployment</li>
          <li>Setting up Cloudflare Tunnels for secure public access</li>
          <li>Automated backups and monitoring</li>
        </ul>
        <p className="text-accent font-medium">This approach is ideal for developers who want to learn DevOps and own their infrastructure.</p>
      </article>
    </section>
  );
}
