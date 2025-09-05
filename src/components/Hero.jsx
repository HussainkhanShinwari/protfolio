import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import resume from "../assets/Muhammad_Hussain_Resume_Recruiter.pdf";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[72vh] py-9 flex items-center justify-center bg-black text-white "
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff" },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div className="flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4">
            Hi, I’m <span className="text-red-500">Muhammad Hussain</span>
          </h2>
          <h3 className="text-3xl font-semibold mb-6">
            MERN Stack Developer
          </h3>
          <div className="space-x-4">
            <a
              href={resume}
              download="Muhammad_Hussain_Resume.pdf"
              className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-red-600 text-red-600 rounded-lg shadow hover:bg-red-700 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;
