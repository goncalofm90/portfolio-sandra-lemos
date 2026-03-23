import Card from "./Card";
import BrandCarousel from "./BrandCarousel";
import Hero from "./Hero";

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

const Homepage = () => {
  return (
    <div className="w-full">
      <Hero />
      <section className="w-full bg-slate-50 dark:bg-gray-800 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            My Projects
          </h1>
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
