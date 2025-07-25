import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="pt-16 px-6 text-white"
            style={{
                backgroundImage: "url('/assets/bg-f.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#ffffff",
            }}
        >
            <div className="container mx-auto grid md:grid-cols-4 gap-10 pb-10">
                {/* Logo + Description */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        <span className="text-[#ff7f11]">Mauri-</span>Conseils
                    </h1>
                    <p className="text-gray-300">
                        Mauri-Conseils vise à devenir une entreprise clé en informatique et analyse de données en Mauritanie et Afrique de l’Ouest, en s’appuyant sur l’innovation, la digitalisation, et la création de solutions à forte valeur.
                    </p>
                </div>

                {/* Office Contact */}
                <div>
                    <h3 className="font-bold text-white mb-4 text-lg">Office</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li className="flex items-center gap-2"><FiPhone /> +222 33 25 26 44</li>
                        <li className="flex items-center gap-2"><FiMail />  contact@mauri-conseils.com</li>
                        <li className="flex items-center gap-2"><FiMapPin /> Nouakchott</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Project</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-bold text-white mb-4 text-lg">Newsletter</h3>
                    <p className="text-gray-300 text-sm mb-4">
                        Subscribe our newsletter to get our latest update & news
                    </p>
                    <div className="flex mb-4">
                        <input
                            type="email"
                            placeholder="Your Mail Address"
                            className="w-full px-3 py-2 rounded-l text-black"
                        />
                        <button className="bg-gradient-to-r from-[#0057ba] to-[#ff7f11] px-4 rounded-r">
                            ✈
                        </button>
                    </div>
                    <div className="flex gap-4 text-[#ffffff] text-xl">
                        <FaFacebookF className="cursor-pointer" />
                        <FaLinkedin className="cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-blue-800 text-center py-4 text-sm text-gray-300  md:flex-row items-center">
                <span style={{ textAlign: "center !important" }}>Copyright ©2025 Mauri-Conseils. All Rights Reserved</span>
                {/* <div className="flex gap-4 justify-center mt-2 md:mt-0">
                    <span className="hover:underline cursor-pointer">Support</span>
                    <span className="hover:underline cursor-pointer">Services</span>
                    <span className="hover:underline cursor-pointer">Terms & Condition</span>
                </div> */}
            </div>
        </footer>
    );
}
