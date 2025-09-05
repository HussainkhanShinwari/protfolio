const Projects = () => {
  const projects = [
    {
      name: "MOR App",
      link: "https://www.figma.com/design/p4ycUfZNgjmGv7nJEtjgcF/Sportat--Edit-?node-id=0-1",
      desc: "Multi-role portal for sports, e-commerce, and booking.",
    },
    {
      name: "Barg Engineering Website",
      link: "https://www.figma.com/design/VgZ8zqjczhrswY5tqy7aBu/Barg-Engineering-Website?node-id=0-1",
      desc: "Blog API, real-time mailing using Nodemailer.",
    },
    {
      name: "KOGH Medical Web",
      link: "https://www.figma.com/design/fw28ZUo01pSFIt1fcQpn35/KOGH?node-id=0-1",
      desc: "Real-time chat using Socket.IO & WebRTC video calls.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <h3 className="text-3xl font-bold mb-8 text-red-500 text-center">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-red-500">{proj.name}</h4>
            <p className="text-gray-300 mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg inline-block transition"
            >
              View Figma
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
