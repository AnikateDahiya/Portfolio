// Footer.js
function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 text-center mt-10 border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Anikate Dahiya. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 space-x-4 text-sm">
        <a href="mailto:anikate311204@gmail.com" className="hover:underline">Email</a>
        <a href="https://linkedin.com/in/anikate-dahiya" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/AnikateDahiya" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
