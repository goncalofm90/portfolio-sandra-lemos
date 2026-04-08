import { Link } from "react-router-dom";
import { getIcon } from "../utils/getIcon";
import type { CardProps } from "../data/types";

const Card = ({
  id,
  title,
  description,
  image,
  type = "Web App",
  isFirst = false,
}: CardProps) => {
  return (
    <Link
      to={`/project/${id}`}
      className="block w-full bg-white rounded-4xl shadow-md overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-shadow p-6 sm:p-8 min-h-[600px]"
    >
      <div className="flex items-center space-x-2 mb-3">
        <span className="font-lufga italic text-base font-lufga-400 text-black">
          {type}
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-black">
          <span className="sm:hidden">{getIcon(type, "sm")}</span>
          <span className="hidden sm:inline">{getIcon(type, "lg")}</span>
        </span>
      </div>

      <div className="flex justify-center mb-4 transition-all duration-100 hover:scale-105">
        <img
          src={image}
          alt={title}
          className={`w-full object-contain py-8 ${
            isFirst ? "max-h-[500px]" : "max-h-[420px]"
          }`}
        />
      </div>

      <div>
        <h2 className="font-lufga text-xl lg:text-3xl font-lufga-500 text-black mb-2">
          {title}
        </h2>
        <p className="font-lufga-400 text-gray-700 mb-3 text-sm leading-5 line-clamp-5 whitespace-pre-line">
          {description}
        </p>
        <p className="text-kalam-black font-kalam-100 font-light text-sm">
          UX Research & UI Design
        </p>
      </div>
    </Link>
  );
};

export default Card;
