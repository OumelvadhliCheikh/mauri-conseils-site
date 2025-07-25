import React from "react";

const projects = [
  { title: "Smart Forecasting", desc: "AI-based demand prediction using real-time data." },
  { title: "Customer Segmentation", desc: "Group customers based on behaviors using clustering." },
  { title: "Fraud Detection", desc: "Real-time anomaly detection system for banking." },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-[#0057ba]">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover how we apply data science to solve real-world challenges.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
