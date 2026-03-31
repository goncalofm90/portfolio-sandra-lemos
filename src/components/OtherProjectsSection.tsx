import { Link } from "react-router-dom";
import { PROJECT_CARDS } from "../data/projectCards";

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
              className="rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 font-lufga-400">
                {project.type}
              </p>
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
