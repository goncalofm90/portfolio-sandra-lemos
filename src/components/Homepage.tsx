import Card from "./Card";
import BrandCarousel from "./BrandCarousel";
import Hero from "./Hero";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    image: "/placeholder.jpg",
    type: "Web App" as const,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    image: "/placeholder.jpg",
    type: "Mobile App" as const,
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of project 3",
    image: "/placeholder.jpg",
    type: "Dashboard" as const,
  },
];

const Homepage = () => {
  return (
    <div>
      <Hero />
      <section className="w-full py-8">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-2 text-center">
            Projects
          </h1>
          <p className="text-center text-gray-600 text-xl mb-12">
            Transform insights into simple, effective design solutions
          </p>
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
      <BrandCarousel />
    </div>
  );
};

export default Homepage;
