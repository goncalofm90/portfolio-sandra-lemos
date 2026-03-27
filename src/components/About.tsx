import AboutHero from "./AboutHero";

const toolbox = [
  {
    id: 1,
    name: "Figma",
    description: "Interface design tool.",
    image: "/toolbox-icons/figma.svg",
    type: "Web App" as const,
  },
  {
    id: 2,
    name: "Photoshop",
    description: "Image & graphic editing tool.",
    image: "/toolbox-icons/photoshop.svg",
    type: "Mobile" as const,
  },
  {
    id: 3,
    name: "Illustrator",
    description: "Vector illustration tool.",
    image: "/toolbox-icons/illustrator.svg",
    type: "Mobile & Tablet" as const,
  },
  {
    id: 4,
    name: "Jira",
    description: "Productivity tool.",
    image: "/toolbox-icons/jira.svg",
    type: "Web, Mobile & Landing Page" as const,
  },
  {
    id: 5,
    name: "Slack",
    description: "Communication tool.",
    image: "/toolbox-icons/slack.svg",
    type: "Mobile" as const,
  },
];

const About = () => {
  return (
    <div className="relative">
      {/* <BlobBackground blobs={pageBlobs} /> */}
      <div className="relative z-10">
        <AboutHero />
        {/* Toolbox */}
        <section className="w-full py-24 gap-12 mt-[18rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-8xl font-bold mb-2 text-center text-8xl font-lufga-500 text-black mb-6">
              Toolbox
            </h1>
            <p className="text-center text-kalam-grey text-4xl mb-24 font-kalam-300">
              Commitment to staying updated with the latest design <br /> trends
              and techniques
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolbox.map((tool) => (
                <div className="flex items-center gap-6">
                  <img src={tool.image} alt={tool.name} className="w-24 h-24" />
                  <div>
                    <p className="font-lufga-500 text-black text-3xl">
                      {tool.name}
                    </p>
                    <p className="font-lufga-400 text-kalam-grey text-xl">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Skills */}
        <section className="w-full py-24 gap-12 mt-[18rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-8xl font-bold text-gray-800 mb-2 text-center">
              Skills
            </h1>
            <p className="text-center text-gray-600 text-4xl mb-24">
              Transform insights into simple, effective design solutions
            </p>
            <div className="space-y-6 flex flex-col items-center gap-6">
              {/* {toolbox.map((tool) => (
                <div>{tool.name}</div>
              ))} */}
            </div>
          </div>
        </section>
        {/* AI-Assisted Design */}
        <section className="w-full py-24 gap-12 mt-[18rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-8xl font-bold text-gray-800 mb-2 text-center">
              AI-Assisted Design
            </h1>
            <p className="text-center text-gray-600 text-4xl mb-24">
              Transform insights into simple, effective design solutions
            </p>
            <div className="space-y-6 flex flex-col items-center gap-6">
              {/* {projects.map((project) => (
                <Card key={project.id} {...project} />
              ))} */}
            </div>
          </div>
        </section>
        {/* Education */}
        <section className="w-full py-24 gap-12 mt-[18rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-8xl font-bold text-gray-800 mb-2 text-center">
              Education
            </h1>
            <p className="text-center text-gray-600 text-4xl mb-24">
              Transform insights into simple, effective design solutions
            </p>
            <div className="space-y-6 flex flex-col items-center gap-6">
              {/* {projects.map((project) => (
                <Card key={project.id} {...project} />
              ))} */}
            </div>
          </div>
        </section>
        {/* <BrandCarousel /> */}
      </div>
    </div>
  );
};

export default About;
