const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white">
      <h3 className="text-3xl font-bold mb-8 text-red-500 text-center">About Me</h3>
      <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-700 shadow-lg rounded-xl p-8">
        <p className="text-lg leading-relaxed text-gray-300">
          I am a Full Stack Developer with strong expertise in backend technologies like
          <span className="text-red-500 font-semibold"> Node.js, Express, MongoDB, and MySQL</span>.  
          Experienced with <span className="text-red-500">Socket.IO, WebRTC, Multer, Cloudinary, Stripe, and Nodemailer</span>,  
          I focus on creating scalable, efficient, and secure web apps that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
