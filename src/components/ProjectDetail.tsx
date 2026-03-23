import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of project 3",
    image: "/placeholder.jpg",
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="w-full bg-slate-50 dark:bg-gray-900 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Project not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 dark:bg-gray-900 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl mx-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
