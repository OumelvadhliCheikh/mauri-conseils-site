import React from "react";

export default function Hero() {
  return (
    <section id="home"
      className="relative bg-[#0057ba] text-white py-20 px-6"
      style={{
        backgroundImage: "url('/assets/b.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#0057ba] opacity-80 pointer-events-none" />
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 relative z-10">
        <div className="md:w-1/2 space-y-4">
          <p className="text-[#ff7f11] uppercase font-semibold">-----</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Mauri <br />
            Conseils <br />
          </h1>
          <p className="text-gray-200 leading-relaxed ml-1">
            Mauri-Conseils vise à devenir une entreprise clé en informatique et analyse de données en Mauritanie et Afrique de l’Ouest, en s’appuyant sur l’innovation, la digitalisation, et la création de solutions à forte valeur.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-[#ff7f11] text-white px-6 py-2 rounded hover:bg-[#e36f0f] transition">
              About us
            </button>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#0057ba] transition">
              Contact us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">

        </div>
      </div>
    </section>
  );
}
