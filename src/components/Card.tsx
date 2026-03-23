import { Link } from "react-router-dom";
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { MdTabletMac } from "react-icons/md";

import { LiaLaptopSolid } from "react-icons/lia";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  type?:
    | "Web App"
    | "Mobile"
    | "Dashboard"
    | "Web, Mobile & Landing Page"
    | "Mobile & Tablet"
    | string;
}

const getIcon = (type: string) => {
  switch (type) {
    case "Web App":
      return <FiMonitor className="w-5 h-5" />;
    case "Mobile":
      return <FiSmartphone className="w-5 h-5" />;
    case "Mobile & Tablet":
      return (
        <div className="flex space-x-1">
          <FiSmartphone className="w-5 h-5" />
          <MdTabletMac className="w-5 h-5" />
        </div>
      );
    case "Web, Mobile & Landing Page":
      return (
        <div className="flex space-x-1">
          <FiMonitor className="w-5 h-5" />
          <FiSmartphone className="w-5 h-5" />
          <LiaLaptopSolid className="w-5 h-5" />
        </div>
      );
    default:
      return <LiaLaptopSolid className="w-5 h-5" />;
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
      className="block w-150 bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-8"
    >
      <div className="bg-white-50 dark:bg-white-700 flex items-center space-x-2 ">
        <span className="font-lufga italic text-2xl font-bold text-black">
          {type}
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-black">{getIcon(type)}</span>
      </div>
      <div className="flex justify-center">
        <img src={image} alt={title} className="py-8" />
      </div>

      <div>
        <h2 className="font-lufga text-3xl font-bold text-black mb-2">
          {title}
        </h2>
        <p className="font-lufga text-black mb-4 text-md text-gray-700 leading-relaxed line-clamp-5 whitespace-pre-line">
          {description}
        </p>
        <p className="font-kalam text-gray-500 dark:text-gray-400 text-lg">
          UX Research & UI Design
        </p>
      </div>
    </Link>
  );
};

export default Card;
