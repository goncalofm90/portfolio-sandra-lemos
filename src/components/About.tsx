import AboutHero from "./AboutHero";

const toolbox = [
  {
    id: 1,
    name: "Figma",
    description: "Interface design tool.",
    image: "/images/toolbox-icons/figma.svg",
  },
  {
    id: 2,
    name: "Photoshop",
    description: "Graphic editing tool.",
    image: "/images/toolbox-icons/photoshop.svg",
  },
  {
    id: 3,
    name: "Illustrator",
    description: "Vector illustration tool.",
    image: "/images/toolbox-icons/illustrator.svg",
  },
  {
    id: 4,
    name: "Jira",
    description: "Productivity tool.",
    image: "/images/toolbox-icons/jira.svg",
  },
  {
    id: 5,
    name: "Slack",
    description: "Communication tool.",
    image: "/images/toolbox-icons/slack.svg",
  },
];
const skills = [
  {
    id: 1,
    name: "User Research",
    description: "Usability testing, interviews, surveys, design solutions",
    image: "/images/skill-icons/user-research.svg",
  },
  {
    id: 2,
    name: "UX Writing",
    description: "Copy for interfaces in English & Portuguese",
    image: "/images/skill-icons/ux-writing.svg",
  },
  {
    id: 3,
    name: "UX Documentation",
    description: "Personas, Journey Maps, User Flows.",
    image: "/images/skill-icons/ux-documentation.svg",
  },
  {
    id: 4,
    name: "Data Analysis",
    description: "Synthesizing research findings and conclusions",
    image: "/images/skill-icons/data-analysis.svg",
  },
  {
    id: 5,
    name: "Project Management",
    description: "Highly organized, results-oriented",
    image: "/images/skill-icons/project-management.svg",
  },
  {
    id: 6,
    name: "Languages",
    description: " Fluent in Portuguese, English and Spanish",
    image: "/images/skill-icons/languages.svg",
  },
];

const aiTools = [
  {
    id: 1,
    name: "Claude ",
    description: "AI Research, UX Writing & Documentation",
    image: "/images/ai-tools-icons/claude.svg",
    justifyStart: false,
  },
  {
    id: 2,
    name: "Figma Make",
    description: "AI-Powered Design & Prototyping in Figma ",
    image: "/images/ai-tools-icons/figma-make.svg",
    justifyStart: true,
  },
  {
    id: 3,
    name: "Lovable",
    description: "AI-Powered Prototyping & Wireframing",
    image: "/images/ai-tools-icons/lovable.svg",
    justifyStart: false,
  },
  {
    id: 4,
    name: "Google AI Studio",
    description: "Workflow Automation & Ideation",
    image: "/images/ai-tools-icons/google-ai.svg",
    justifyStart: true,
  },
];
const education = [
  {
    id: 1,
    name: "Photoshop & Illustrator",
    school: "FLAG ( 2025 )",
    image: "/images/education-images/flag.svg",
    justifyStart: false,
  },
  {
    id: 2,
    name: "ROI of UX",
    school: "EDIT ( 2025 )",
    image: "/images/education-images/edit.svg",
    justifyStart: true,
  },
  {
    id: 3,
    name: "UX Foundations",
    school: "EDIT ( 2024 )",
    image: "/images/education-images/edit.svg",
    justifyStart: false,
  },
  {
    id: 4,
    name: "UX UI Designer ",
    school: "EDIT ( 2024 )",
    image: "/images/education-images/flag.svg",
    justifyStart: true,
  },
  {
    id: 5,
    name: "Hospitallity Management",
    school: "EHTL (2015-2016)",
    image: "/images/education-images/ehtl.svg",
    justifyStart: true,
  },
];

const About = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <AboutHero />
        {/* Toolbox */}
        <section className="w-full pb-24 gap-12 mt-[16rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 text-center font-lufga-500 text-black mb-6">
              Toolbox
            </h1>
            <p className="text-center text-kalam-grey text-2xl sm:text-3xl lg:text-4xl mb-24 font-kalam-300">
              Commitment to staying updated with the latest design <br /> trends
              and techniques
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolbox.map((tool) => (
                <div className="flex items-center gap-4 sm:gap-6" key={tool.id}>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24"
                  />
                  <div>
                    <p className="font-lufga-500 text-black text-xl sm:text-2xl">
                      {tool.name}
                    </p>
                    <p className="font-lufga-400 text-kalam-grey text-base sm:text-lg lg:text-xl">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="w-full py-24 gap-12 my-[16rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 text-center font-lufga-500 text-black mb-6">
              Skills
            </h1>
            <p className="text-center text-kalam-grey text-2xl sm:text-3xl lg:text-4xl mb-24 font-kalam-300">
              Continuous learning to stay aligned with <br /> evolving design
              trends
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div className="flex items-start gap-4 sm:gap-6" key={skill.id}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 sm:w-12 h-10 sm:h-12"
                  />
                  <div>
                    <p className="font-lufga-500 text-black text-xl sm:text-2xl">
                      {skill.name}
                    </p>
                    <p className="font-lufga-400 text-kalam-grey text-base sm:text-lg lg:text-xl">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Assisted Design */}
        <section className="w-full py-24 gap-12">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 text-center font-lufga-500 text-black mb-6">
              AI-Assisted Design
            </h1>
            <p className="text-center text-kalam-grey text-2xl sm:text-3xl lg:text-4xl mb-24 font-kalam-300">
              Integrating AI into the design workflow to move <br /> faster and
              think deeper
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiTools.map((tool) => (
                <div
                  className={`flex items-start gap-4 sm:gap-6 ${tool.justifyStart ? "justify-start" : "justify-end"}`}
                  key={tool.id}
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-8 sm:w-10 h-8 sm:h-10"
                  />
                  <div>
                    <p className="font-lufga-500 text-black text-xl sm:text-2xl">
                      {tool.name}
                    </p>
                    <p className="font-lufga-400 text-kalam-grey text-base sm:text-lg lg:text-xl max-w-xs">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="w-full pb-24 gap-12 my-[15rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 text-center font-lufga-500 text-black mb-6">
              Education
            </h1>
            <p className="text-center text-kalam-grey text-2xl sm:text-3xl lg:text-3xl mb-24 font-kalam-300">
              Dedication to continuous learning and <br />
              enhancing design skills
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((course) => (
                <div
                  className="flex items-start gap-4 sm:gap-6"
                  key={course.id}
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24"
                  />
                  <div>
                    <p className="font-lufga-500 text-black text-xl sm:text-2xl">
                      {course.name}
                    </p>
                    <p className="font-lufga-400 text-kalam-grey text-base sm:text-lg lg:text-xl">
                      {course.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
