import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p8nuinm',
        'template_3c6dapt',
        form.current,
        '8a7exoWhjzdF6InIn'
      )
      .then(() => {
        setStatusMessage('✅ Merci ! Votre message a été envoyé avec succès.');
        form.current.reset();
      })
      .catch(() => {
        setStatusMessage("❌ Une erreur s'est produite. Veuillez réessayer.");
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#0057ba] to-[#00488e] py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Formulaire de contact */}
        <div className="bg-[#0f172a] text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-sm text-gray-300 mb-8">
            Besoin de conseil, d’un accompagnement stratégique ou d’une expertise data ?
            <br />
            Contactez notre équipe pour transformer vos idées en actions concrètes.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm">Nom</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="w-full px-4 py-2 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff7f11]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="exemple@email.com"
                className="w-full px-4 py-2 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff7f11]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Votre message..."
                className="w-full px-4 py-2 rounded bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff7f11]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#ff7f11] hover:bg-orange-500 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Envoyer mon message
            </button>
            {statusMessage && (
              <p className={`text-sm mt-2 ${statusMessage.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>

        {/* Carte Google */}
        <div className="h-full w-full">
          <iframe
            title="Localisation Mauri-Conseils"
            className="w-full h-full"
            style={{ minHeight: '100%' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3062902375645!2d-7.998889684799789!3d18.07352988766759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA0JzI0LjciTiA3wrAwMic1Mi44Ilc!5e0!3m2!1sfr!2s!4v1712145260345"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
