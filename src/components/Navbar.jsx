import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white text-black shadow">
      <div className="flex items-center gap-2 text-2xl font-bold">
        {/* <img src="/assets/logooo.png" className="w-20 h-25 object-contain" /> */}
        <span className="ml-20"><span className="text-[#ff7f11]">Mauri-</span>Conseils</span>
      </div>

      <ul className="hidden md:flex gap-8 font-medium">
        {[
          { label: "Home", href: "#home" },
          { label: "About us", href: "#aboutus" },
          { label: "Services", href: "#services" },
          { label: "Notre Méthodologie", href: "#workprocess" },
          { label: "Nos Atouts", href: "#features" },

          { label: "Contact", href: "#contact" }
        ].map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-[#000000] cursor-pointer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="bg-gradient-to-r from-[#0057ba] to-[#ff7f11] px-4 py-2 rounded hover:opacity-90 transition"
      >
        Contact Us
      </a>
    </nav>
  );
}