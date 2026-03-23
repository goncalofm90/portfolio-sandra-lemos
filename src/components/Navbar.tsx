import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        Sandra Lemos Product Designer (UX/UI)
      </div>
      <div className="space-x-6">
        <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          Projects
        </Link>
        <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          About
        </Link>
        <a
          href="mailto:SsandraBrazLemos@gmail.com"
          className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;