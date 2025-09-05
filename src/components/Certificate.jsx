const Certificates = () => {
  const certificates = [
    { title: "Internship Certificate", org: "Techpioneer" },
    { title: "Paid Internship Certificate", org: "BrightCodeLab" },
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-black text-white">
      <h3 className="text-3xl font-bold mb-8 text-red-500 text-center">Certificates</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-red-500">{cert.title}</h4>
            <p className="text-gray-300">{cert.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
