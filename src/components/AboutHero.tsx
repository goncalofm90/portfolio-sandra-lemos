const AboutHero = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        {/* Use md:flex-col for tablets, xl:flex-row for desktop */}
        <section className="flex flex-col md:flex-col xl:flex-row w-full px-4 sm:px-12 py-12 sm:py-24 gap-8 md:gap-10 xl:gap-12 mt-[10rem]">
          {/* Avatar */}
          <div className="flex justify-center mb-6 md:mb-6 xl:mb-0">
            <img
              src={"images/avatar.png"}
              alt="User Avatar"
              className="w-48 sm:w-56 md:w-64 xl:w-auto max-w-full"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-6xl flex flex-col">
            <h1 className="text-8xl font-lufga-500 text-black mb-6 sm:text-7xl md:text-6xl xl:text-8xl">
              About
            </h1>

            <p className="font-lufga-300 text-base sm:text-lg md:text-lg xl:text-2xl text-kalam-grey mb-6 sm:mb-8 md:mb-10 xl:mb-12">
              After nearly a decade in hospitality,{" "}
              <span className="ms-1 text-3xl sm:text-4xl md:text-4xl xl:text-5xl text-kalam-black font-kalam-400">
                I found my passion
              </span>{" "}
              in designing experiences that make people’s lives easier.
            </p>

            <p className="font-lufga-300 text-base sm:text-lg md:text-lg xl:text-2xl text-kalam-grey mb-6 sm:mb-8 md:mb-10 xl:mb-12">
              Growing up around my family’s graphic design business also gave me{" "}
              <span className="ms-1 text-3xl sm:text-4xl md:text-4xl xl:text-5xl text-kalam-black font-kalam-400">
                a natural connection
              </span>{" "}
              to creativity and design.
            </p>

            <p className="font-lufga-300 text-base sm:text-lg md:text-lg xl:text-2xl text-kalam-grey mb-6 sm:mb-8 md:mb-10 xl:mb-12">
              My path into UX/UI is driven by the wish to create simple, useful,
              and{" "}
              <span className="ms-1 text-3xl sm:text-4xl md:text-4xl xl:text-5xl text-kalam-black font-kalam-400">
                meaningful solutions
              </span>
              . I believe design is more than visuals, it’s about listening,
              solving real problems, and always learning.
            </p>

            <p className="font-lufga-300 text-base sm:text-lg md:text-lg xl:text-2xl text-kalam-grey mb-6 sm:mb-8 md:mb-10 xl:mb-12">
              I've worked across{" "}
              <span className="ms-1 text-3xl sm:text-4xl md:text-4xl xl:text-5xl text-kalam-black font-kalam-400">
                B2B and B2C products
              </span>{" "}
              , collaborating with Product and Engineering teams in agile
              environments to deliver responsive web and mobile interfaces that
              are both functional and human.
            </p>

            <p className="font-lufga-300 text-base sm:text-lg md:text-lg xl:text-2xl text-kalam-grey mb-6 sm:mb-8 md:mb-10 xl:mb-12">
              My goal is to keep growing as a designer and be part of{" "}
              <span className="ms-1 text-3xl sm:text-4xl md:text-4xl xl:text-5xl text-kalam-black font-kalam-400">
                projects that make a difference
              </span>
              .
            </p>

            {/* Button */}
            <a
              href="/files/sandra-lemos-cv.pdf"
              download="/files/sandra-lemos-cv.pdf"
              className="self-start text-white font-bold px-6 py-2 rounded-full mt-4 bg-[#292929] shadow-[0_4px_2px_rgba(0,0,0,0.35)] hover:shadow-none hover:scale-95 text-base sm:text-base xl:text-base"
            >
              Download CV
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutHero;
