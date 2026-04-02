import { Link } from "react-router-dom";
import { PROJECT_CARDS } from "../data/projectCards";
import { getIcon } from "../utils/getIcon";

const OtherProjectsSection = ({
  currentProjectId,
}: {
  currentProjectId: number;
}) => {
  const otherProjects = PROJECT_CARDS.filter(
    (project) => project.id !== currentProjectId,
  ).slice(0, 4);

  return (
    <section className="w-full px-4 py-16 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl text-black font-lufga-500 sm:text-3xl">
          Check out other Projects
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="rounded-3xl bg-white p-4 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-3 flex aspect-[3/3] items-center justify-center overflow-hidden rounded-xl transition-all duration-100 hover:scale-110">
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Type & Icon */}
              <div className="flex items-center space-x-1.5 mb-1">
                <p className="text-xs text-gray-500 font-lufga-400">
                  {project.type}
                </p>
                <span className="text-gray-400 text-xs">|</span>
                <span className="text-black">
                  {getIcon(project.type ?? "Web App", "sm")}
                </span>
              </div>

              <h3 className="mt-1 text-sm text-black font-lufga-500 sm:text-base">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjectsSection;
