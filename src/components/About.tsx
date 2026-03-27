import AboutHero from "./AboutHero";

const About = () => {
  return (
    <div className="relative">
      {/* <BlobBackground blobs={pageBlobs} /> */}
      <div className="relative z-10">
        <AboutHero />
        {/* Toolbox */}
        <section className="w-full py-24 gap-12 mt-[18rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-8xl font-bold text-gray-800 mb-2 text-center">
              Toolbox
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
              {/* {projects.map((project) => (
                <Card key={project.id} {...project} />
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
