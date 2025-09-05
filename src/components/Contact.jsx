import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white text-center">
      <h3 className="text-3xl font-bold mb-8 text-red-500">Contact Me</h3>
      <p className="mb-4 text-gray-300">
        Feel free to reach out to me for collaborations or opportunities.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
        <a href="mailto:khanhussain1720@gmail.com" className="flex items-center gap-2 hover:text-red-500 transition">
          <FaEnvelope /> khanhussain1720@gmail.com
        </a>
        <a href="tel:+923281233842" className="flex items-center gap-2 hover:text-red-500 transition">
          <FaPhone /> +92 3281233842 / +92 3359543876
        </a>
        <a href="https://www.linkedin.com/in/hussain-khan-6356b325a/" target="_blank" className="flex items-center gap-2 hover:text-red-500 transition">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/HussainkhanShinwari" target="_blank" className="flex items-center gap-2 hover:text-red-500 transition">
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
