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
    <Link
      to={`/project/${id}`}
      className="block w-100 bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-8"
    >
      <div className="bg-white-50 dark:bg-white-700 flex items-center space-x-2 ">
        <span className="font-lufga italic text-sm text-black">{type}</span>
        <span className="text-gray-400">|</span>
        <span className="text-black">{getIcon(type)}</span>
      </div>
      <div>
        <img src={image} alt={title} className="p-8" />
      </div>

      <div>
        <h2 className="font-lufga text-xl font-bold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="font-lufga text-black mb-4 text-xs leading-relaxed line-clamp-5">
          {description}
        </p>
        <p className="font-kalam text-gray-500 dark:text-gray-400 text-s">
          UX Research & UI Design
        </p>
      </div>
    </Link>
  );
};

export default Card;
