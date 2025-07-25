import React from "react";
import "../index.css";

const AboutUs = () => {
    return (
        <section id="aboutus" className="about-us-section">
            <div className="about-us-container">


                <div className="about-us-content-wrapper">
                    {/* Colonne pour l'image */}
                    <div className="about-us-image-column">
                        <img
                            src="/assets/aboutus.png"
                            alt="Datatics Solutions"
                            className="about-us-image"
                        />
                    </div>

                    {/* Colonne pour le texte */}
                    <div className="about-us-text-column">
                        <h2 className="about-us-title">About us</h2>
                        <h1 className="about-us-headline">
                            Innovation Data,<br />
                            Impact Durable.
                        </h1>

                        <p className="about-us-description">
                            MAURI-CONSEILS est un cabinet de conseil spécialisé dans la structuration et la valorisation des données.
                            Portée par une vision d’excellence numérique, l’entreprise accompagne les organisations publiques et privées
                            dans leur transformation data & IA, de la collecte de données sur le terrain à la création de solutions prédictives et de produits intelligents.


                        </p>

                        <button className="read-more-button">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;