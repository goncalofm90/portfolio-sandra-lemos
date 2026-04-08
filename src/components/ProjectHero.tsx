import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import type { ProjectData } from "../data/types";

const ProjectHero = ({ project }: { project: ProjectData }) => (
  <section className="snap-start snap-always w-full h-screen overflow-hidden px-4 sm:px-12 pt-32 pb-12 flex flex-col items-center">
    {/* Back link — left-aligned override */}
    <div className="w-full mb-10 mt-6 px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-lufga-400 text-sm"
      >
        <FiChevronLeft className="w-4 h-4" />
        Back to Projects
      </Link>
    </div>

    {/* Title */}
    <h1 className="font-lufga text-5xl sm:text-6xl md:text-5xl font-lufga-500 text-black leading-none mb-12">
      {project.title}
    </h1>

    {/* Hero image */}
    <div className="w-full rounded-3xl flex items-center justify-center mb-10">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-[35vh] object-contain"
        />
      ) : (
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-300 font-lufga-300 text-lg">
            Project Preview
          </span>
        </div>
      )}
    </div>

    {/* Description */}
    <p className="font-lufga-400 sm:text-xl lg:text-2xl text-black mb-8 max-w-5xl text-center">
      {project.description}
    </p>
    {/* Hero Subtitle */}
    <p className="font-lufga-500 text-sm text-lufga-salmon max-w-2xl mb-8">
      {project.heroSubtitle}
    </p>

    {/* Tags */}
    {project.tags && (
      <div className="flex flex-wrap gap-4 mb-3 mx-auto justify-center">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className="bg-white text-md px-4 py-1.5 rounded-full border border-gray-200 font-kalam-400 text-black inline-flex items-center justify-start gap-2"
          >
            {tag.name}
            <img src={tag.arrowIcon} alt="arrow" className="w-5 h-5" />
          </span>
        ))}
      </div>
    )}

    {/* Meta row: deliverables + tools */}
    <div className="flex flex-wrap justify-center gap-12 border-t border-gray-100 pt-8 w-full">
      {project.deliverables && (
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-lufga-400">
            Deliverables
          </p>
          <p className="font-lufga-400 text-black text-sm">
            {project.deliverables.join(" · ")}
          </p>
        </div>
      )}
    </div>

    {/* Scroll down */}
    <div className="mt-1 flex flex-col items-center gap-1 text-black animate-bounce">
      <span className="text-md font-kalam-300 tracking-widest">
        Scroll down
      </span>
    </div>
  </section>
);

export default ProjectHero;
