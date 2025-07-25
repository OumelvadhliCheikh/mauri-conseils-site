import React from "react";
import { FaBoxOpen, FaLock, FaHandsHelping } from "react-icons/fa";

export default function FeatureSection() {
  const features = [
    {
      icon: <FaBoxOpen size={36} />,
      title: "Solutions sur mesure",
      description:
        "Nous concevons des produits et tableaux de bord adaptés à vos besoins spécifiques, alliant flexibilité et précision analytique.",
    },
    {
      icon: <FaLock size={36} />,
      title: "Gouvernance & Sécurité des données",
      description:
        "Nos standards rigoureux assurent l’intégrité, la confidentialité et la conformité (RGPD) de vos données.",
    },
    {
      icon: <FaHandsHelping size={36} />,
      title: "Accompagnement expert & support continu",
      description:
        "De la collecte à la valorisation, nos équipes vous accompagnent à chaque étape, avec un support réactif et personnalisé.",
    },
  ];

  return (
    <section id="features" className="bg-white py-20 px-4 text-center">
      <h5 className="text-[#ff7f11] font-semibold uppercase mb-2">Nos Atouts</h5>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Nous transformons les données en leviers d’impact stratégique
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Chez <strong>MAURI-CONSEILS</strong>, nous combinons excellence technique, rigueur
        méthodologique et innovation pour offrir des solutions data et IA à forte valeur ajoutée.
        Notre approche intégrée garantit performance, sécurité et accompagnement sur mesure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:bg-blue-50 transition p-6 rounded-xl shadow-md text-left"
          >
            <div className="text-[#0057ba] mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
