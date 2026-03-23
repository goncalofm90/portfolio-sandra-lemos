import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Card = ({ id, title, description, image }: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
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
