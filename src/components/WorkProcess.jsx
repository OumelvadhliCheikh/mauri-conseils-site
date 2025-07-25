import React from "react";
import { FaSearch, FaDatabase, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function HowWeWork() {
    const steps = [
        {
            icon: <FaSearch size={36} />,
            title: "Définir le problème",
            description:
                "Nous cadrons les besoins du client, identifions les enjeux stratégiques et construisons un référentiel clair pour guider l’analyse.",
            step: 1,
        },
        {
            icon: <FaDatabase size={36} />,
            title: "Collecter les données",
            description:
                "Nos équipes mobilisent des outils d’enquête, d’ingestion automatisée et de sourcing intelligent pour rassembler des données fiables et représentatives.",
            step: 2,
        },
        {
            icon: <FaChartLine size={36} />,
            title: "Analyser et transformer",
            description:
                "Nous appliquons des techniques avancées (statistiques, IA, visualisation) pour transformer les données en insights décisionnels, rapports et produits.",
            step: 3,
        },
    ];

    return (
        <section id="workprocess" className="bg-gradient-to-br from-[#00488e] to-[#00488e] py-20 px-4 text-white text-center">
            <h5 className="text-orange-400 font-semibold mb-2 tracking-wide uppercase">Work Process</h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre Méthodologie</h2>
            <p className="text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                Chez <strong className="text-white">MAURI-CONSEILS</strong>, chaque mission suit une
                démarche rigoureuse et orientée résultats, afin d’assurer la fiabilité des données et la
                pertinence des décisions.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-start gap-10">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="bg-[#012c4a] p-6 rounded-xl w-full md:w-80 relative text-left shadow-lg transition hover:shadow-2xl hover:bg-[#02385c] duration-300">
                            {/* Étape number */}
                            <div className="absolute top-4 right-4 bg-orange-400 text-[#ffffff] font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm shadow-md">
                                {step.step}
                            </div>
                            <div className="text-[#0057ba] mb-4">{step.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                            <p className="text-blue-100 text-sm">{step.description}</p>
                        </div>

                        {index < steps.length - 1 && (
                            <FaArrowRight className="text-[#ffffff] w-8 h-8 hidden md:block mt-12" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
