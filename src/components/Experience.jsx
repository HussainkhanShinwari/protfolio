const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer Intern (Paid)",
      company: "BrightCodeLab",
      duration: "3 Months",
      details: "Built backend APIs, integrated Stripe, Nodemailer, Cloudinary, Multer, and real-time communication features.",
    },
    {
      role: "Full Stack Developer Intern",
      company: "Techpioneer",
      duration: "3 Months",
      details: "Worked on MERN projects with Node.js, Express, MongoDB, React, and implemented REST APIs.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">
      <h3 className="text-3xl font-bold mb-8 text-red-500 text-center">Experience</h3>
      <div className="space-y-6 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-red-500">{exp.role}</h4>
            <p className="text-gray-400">{exp.company} • {exp.duration}</p>
            <p className="text-gray-300 mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
