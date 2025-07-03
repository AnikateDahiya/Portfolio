// About.js
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a B.Tech Computer Science student at CMR Engineering College, passionate about crafting innovative software solutions. I enjoy building user-friendly web and mobile applications and solving real-world problems with clean, scalable code.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="mb-2">🎓 CMR Engineering College</p>
            <p className="mb-2">B.Tech in Computer Science Engineering</p>
            <p className="mb-2">Sept 2022 – May 2026</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">GPA: 8.47/10</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["C", "Java", "Python", "Dart", "JavaScript", "HTML", "CSS", "MySQL", "Web Development", "Flutter", "DSA", "DBMS"].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;