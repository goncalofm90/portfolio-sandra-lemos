import { Link } from "react-router-dom";
import { FiMonitor, FiSmartphone, FiBarChart } from "react-icons/fi";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  type?: "Web App" | "Mobile App" | "Dashboard";
}

const getIcon = (type: string) => {
  switch (type) {
    case "Web App":
      return <FiMonitor className="w-5 h-5" />;
    case "Mobile App":
      return <FiSmartphone className="w-5 h-5" />;
    case "Dashboard":
      return <FiBarChart className="w-5 h-5" />;
    default:
      return <FiMonitor className="w-5 h-5" />;
  }
};

const Card = ({
  id,
  title,
  description,
  image,
  type = "Web App",
}: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 bg-gray-50 dark:bg-gray-700 flex items-center space-x-2">
        <span className="font-lufga italic text-gray-800 dark:text-white text-sm">
          {type}
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600 dark:text-gray-300">
          {getIcon(type)}
        </span>
      </div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="font-lufga text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="font-lufga text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-5">
          {description}
        </p>
        <p className="font-kalam text-gray-500 dark:text-gray-400 text-xs mb-4">
          UX Research & UI Design
        </p>
        <Link
          to={`/project/${id}`}
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
