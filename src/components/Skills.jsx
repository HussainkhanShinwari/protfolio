const Skills = () => {
  const skills = [
    "Node.js", "Express.js", "MongoDB", "MySQL",
    "React.js", "HTML", "Tailwind CSS",
    "Multer & Cloudinary", "Stripe", "Nodemailer", "Socket.IO", "WebRTC"
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white px-6">
      <h3 className="text-3xl font-bold mb-8 text-center text-red-500">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-900 border border-gray-700 shadow-md rounded-lg p-4 text-center text-gray-300 hover:text-red-500 hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
