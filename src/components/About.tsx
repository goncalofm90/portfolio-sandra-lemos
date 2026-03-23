import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "Project 122",
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

const About = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-gray-900 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          This is the about page for Sandra Lemos' portfolio. Here you can learn
          more about my background and experience as a Product Designer
          specializing in UX/UI.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Featured Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-6 ">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
