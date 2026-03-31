import { useParams, Link } from "react-router-dom";
import ProjectHero from "./ProjectHero";
import { FiChevronLeft } from "react-icons/fi";
import { PROJECTS } from "../data/projects";
import { SplitSection } from "./SplitSection";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <p className="font-lufga text-2xl text-gray-400">Project not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-black font-lufga-400 underline underline-offset-4"
        >
          <FiChevronLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen mx-auto">
      <ProjectHero project={project} />
      {/* Case study sections */}
      {project.sections.map((section, index) => (
        <SplitSection
          key={`${section.title}-${index}`}
          section={section}
          index={index}
        />
      ))}
    </main>
  );
};

export default ProjectDetail;
