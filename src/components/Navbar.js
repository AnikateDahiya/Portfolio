// Navbar.js
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const sections = ["about", "projects", "contact"];

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      let current = "about";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow fixed w-full z-20 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Anikate Dahiya</h1>

        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`hover:text-blue-500 transition capitalize ${
                activeSection === sec ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
              }`}
            >
              {sec}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-110 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 dark:text-white">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`block hover:text-blue-500 capitalize ${
                activeSection === sec ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {sec}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-105 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
