import React from "react";

const team = [
  { name: "Sarah B.", role: "Lead Data Scientist" },
  { name: "Ali M.", role: "AI Engineer" },
  { name: "Lina T.", role: "Data Analyst" },
];

export default function Team() {
  return (
    <section className="py-20 px-6 bg-white text-center text-[#0057ba]">
      <h2 className="text-3xl font-bold mb-10">Our Team</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {team.map((person) => (
          <div key={person.name} className="bg-gray-100 p-6 rounded-lg shadow w-64">
            <div className="w-24 h-24 bg-gray-300 mx-auto rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">{person.name}</h3>
            <p className="text-gray-600">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
