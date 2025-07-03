// Projects.js
import { motion } from "framer-motion";

const projects = [
  {
    title: "Book Heaven",
    description:
      "An online bookstore web app with features like login, cart, admin dashboard, and checkout system.",
    tools: ["HTML", "CSS", "JavaScript", "Tailwind"],
    link: "https://linkedin.com/BookHeaven"
  },
  {
    title: "Blog Management System",
    description:
      "A collaborative blog platform that lets users write, read, and manage blogs with ease.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Toyzz App",
    description:
      "A Flutter-based mobile app where users can buy/sell new or refurbished toys.",
    tools: ["Flutter", "Dart"],
    link: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs dark:bg-blue-800 dark:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project ↗
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;