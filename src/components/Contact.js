// Contact.js
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Talk
        </motion.h2>

        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project or idea? I’d love to hear from you. Fill out the form below to get in touch.
        </motion.p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 text-left">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="mb-1 text-sm">Name</label>
            <input
              type="text"
              name="user_name"
              className="p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="mb-1 text-sm">Email</label>
            <input
              type="email"
              name="user_email"
              className="p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="mb-1 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              className="p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>}
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="mailto:anikate311204@gmail.com"
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Mail size={18} /> anikate311204@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/anikate-dahiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/AnikateDahiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
