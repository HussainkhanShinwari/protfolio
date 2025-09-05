import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const links = ["About", "Skills", "Experience", "Projects", "Certificates", "Contact"];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1
          onClick={() => handleScroll("hero")}
          className="text-xl font-bold text-red-500 cursor-pointer"
        >
          Muhammad Hussain
        </h1>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link.toLowerCase())}
                className={`transition ${
                  active === link.toLowerCase()
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
