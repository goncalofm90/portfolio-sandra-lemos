const AboutHero = () => {
  return (
    <div className="relative">
      {/* <BlobBackground blobs={pageBlobs} /> */}
      <div className="relative z-10">
        {/* <AboutHero /> */}
        <section className="flex w-full px-12 py-24 gap-12 mt-[18rem]">
          <div className="flex justify-center">
            <img src={"/avatar.png"} alt="User Avatar" />
          </div>
          <div className="max-w-6xl flex flex-col">
            <h1 className="text-8xl font-lufga-500 text-black mb-6">About</h1>
            <p className="font-lufga-300 text-2xl text-kalam-grey mb-12">
              After nearly a decade in hospitality,{" "}
              <span className="ms-1 text-5xl text-kalam-black font-kalam-400">
                I found my passion
              </span>{" "}
              in <br /> designing experiences that make people’s lives easier.
            </p>
            <p className="font-lufga-300 text-2xl text-kalam-grey mb-12">
              Growing up around my family’s graphic design business also gave me
              a<br />{" "}
              <span className="ms-1 text-5xl text-kalam-black font-kalam-400">
                natural connection
              </span>{" "}
              to creativity and design.
            </p>
            <p className="font-lufga-300 text-2xl text-kalam-grey mb-12">
              My path into UX/UI is driven by the wish to create simple, useful,
              and
              <br />{" "}
              <span className="ms-1 text-5xl text-kalam-black font-kalam-400">
                meaningful solutions.
              </span>{" "}
              I believe design is more than visuals, it’s <br /> about
              listening, solving real problems, and always learning.
            </p>
            <p className="font-lufga-300 text-2xl text-kalam-grey mb-12">
              I've worked across{" "}
              <span className="ms-1 text-5xl text-kalam-black font-kalam-400">
                B2B and B2C products
              </span>{" "}
              , collaborating <br /> with Product and Engineering teams in agile
              environments to deliver <br /> responsive web and mobile
              interfaces that are both functional and human.
            </p>
            <p className="font-lufga-300 text-2xl text-kalam-grey mb-12">
              My goal is to keep growing as a designer and be part of{" "}
              <span className="ms-1 text-5xl text-kalam-black font-kalam-400">
                projects <br /> that make a difference.
              </span>{" "}
            </p>
            {/* Button */}
            <a
              href="/your-file.pdf"
              className="self-start text-white font-bold px-6 py-2 rounded-full mt-4 bg-[#292929] shadow-[0_4px_2px_rgba(0,0,0,0.35)] hover:shadow-none hover:scale-95"
            >
              Download CV
            </a>
          </div>
        </section>
        {/* <BrandCarousel /> */}
      </div>
    </div>
  );
};

export default AboutHero;
