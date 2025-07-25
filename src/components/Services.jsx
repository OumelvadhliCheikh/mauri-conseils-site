import React from "react";
import {
    FaChartBar,
    FaCogs,
    FaRobot,
    FaShieldAlt,
    FaNetworkWired,
} from "react-icons/fa";

import { FaChartLine } from 'react-icons/fa';

function DashboardIcon() {
    return <FaChartLine size={32} color="#0057BA" />;
}


export default function ServicesSection() {
    const services = [
        {
            icon: <FaChartBar size={36} />,
            title: "Études & Suivi-Évaluation",
            description:
                "Enquêtes rigoureuses sur le terrain, cadres de suivi-évaluation et analyses statistiques pour appuyer les prises de décision stratégiques.",
        },
        {
            icon: <FaCogs size={36} />,
            title: "Data Engineering & Architecture",
            description:
                "Pipelines ETL/ELT, ingestion sécurisée, entrepôts et lacs de données fiables pour assurer la continuité de vos flux de données.",
        },
        {
            icon: <FaRobot size={36} />,
            title: "Data Science & Machine Learning",
            description:
                "Modèles prédictifs, analyse de tendances, détection d’anomalies : exploitez la puissance des algorithmes intelligents pour vos décisions.",
        },
        {
            icon: <FaChartLine size={36} />,
            title: "Business Intelligence & Reporting",
            description:
                "Tableaux de bord interactifs, reporting automatisé, gouvernance des indicateurs pour rendre vos données actionnables par tous.",
        },
        {
            icon: <FaShieldAlt size={36} />,
            title: "Gouvernance & Qualité des Données",
            description:
                "Conformité RGPD, traçabilité, contrôle qualité : sécurisez et fiabilisez vos données pour renforcer la confiance.",
        },
        {
            icon: <FaNetworkWired size={36} />,
            title: "Produits Data & APIs",
            description:
                "Déployez des APIs intelligentes et des datasets enrichis pour vos partenaires, clients ou écosystèmes métiers.",
        },
    ];

    return (
        <section id="services" className="bg-white py-20 px-6 text-center">
            <h5 className="text-[#ff7f11] font-semibold uppercase mb-2">Nos Services</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Des solutions data & IA pour chaque étape de votre transformation numérique
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Chez <strong>MAURI-CONSEILS</strong>, nous vous accompagnons de bout en bout — de la collecte
                à la valorisation — grâce à une gamme complète de services spécialisés, conçus pour vous
                aider à prendre des décisions éclairées et générer un impact durable.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#f7faff] hover:bg-[#e8f0ff] transition p-6 rounded-xl text-left shadow-sm border border-blue-100"
                    >
                        <div className="text-[#0057ba] mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
