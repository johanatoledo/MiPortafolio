import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    } catch (err) {
      alert('There was an error connecting to the server.');
    }
  };

  return (
    <section className="py-16 px-8 bg-white dark:bg-background text-black dark:text-white transition-colors duration-300" id="contact">
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">Hablemos de tu proyecto</h2>
      {sent ? (
        <div className="text-green-600 dark:text-green-400 font-semibold">¡Gracias! Me pondré en contacto contigo pronto.</div>
      ) 
      : (
        <form className="max-w-xl mx-auto flex flex-col gap-6 bg-gray-100 dark:bg-[#111] rounded-xl shadow-lg p-8 transition-colors duration-300" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            className="p-3 rounded bg-gray-100 dark:bg-[#111] text-black dark:text-white border border-primary focus:outline-none focus:bg-cyan-100 focus:dark:bg-[#222] hover:bg-cyan-100 hover:dark:bg-[#222] transition-colors"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            className="p-3 rounded bg-gray-100 dark:bg-[#111] text-black dark:text-white border border-primary focus:outline-none focus:bg-cyan-100 focus:dark:bg-[#222] hover:bg-cyan-100 hover:dark:bg-[#222] transition-colors"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Cuéntame sobre tu proyecto..."
            className="p-3 rounded bg-gray-100 dark:bg-[#111] text-black dark:text-white border border-primary text-center focus:outline-none focus:bg-cyan-100 focus:dark:bg-[#222] hover:bg-cyan-100 hover:dark:bg-[#222] transition-colors"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary transition"
          >
            Enviar Mensaje
          </button>
        </form>
      )}
    </section>
  );
}
