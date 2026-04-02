import { Link } from "react-router-dom";
import { getIcon } from "../utils/getIcon";

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
      className="block w-full sm:w-[30rem] lg:w-150 bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8"
    >
      {/* Type & Icon */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="font-lufga italic text-lg sm:text-2xl font-lufga-400 text-black">
          {type}
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-black">{getIcon(type)}</span>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="w-full sm:w-auto max-h-64 sm:max-h-72 object-contain py-4 sm:py-8"
        />
      </div>

      {/* Title & Description */}
      <div>
        <h2 className="font-lufga text-2xl sm:text-3xl font-lufga-500 text-black mb-2">
          {title}
        </h2>
        <p className="font-lufga-400 text-black mb-2 sm:mb-4 text-sm sm:text-md text-gray-700 leading-5 sm:leading-6 line-clamp-5 whitespace-pre-line">
          {description}
        </p>
        <p className="text-kalam-black font-kalam-100 font-light text-sm sm:text-base">
          UX Research & UI Design
        </p>
      </div>
    </Link>
  );
};

export default Card;
