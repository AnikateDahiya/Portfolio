// Hero.js
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-6 text-white relative overflow-hidden"
    >
      <motion.div
        className="absolute -top-48 -left-48 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I'm Anikate 👋
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A Computer Science student passionate about building fast, beautiful, and efficient web and mobile apps.
      </motion.p>

      <div className="flex gap-4 z-10">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Let's Talk
        </motion.a>

        <motion.a
          href="/resume.pdf" // Place resume.pdf in public folder
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full border border-white text-white font-semibold shadow-lg hover:bg-white hover:text-indigo-600 transition"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
