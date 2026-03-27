const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Animated Background SVG */}
      <img
        src="/images/herovector.svg"
        className="absolute inset-0 w-full h-full opacity-100 animate-float"
        alt="Background vector"
      />

      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16">
        {/* Staircase */}
        <div>
          <p className="font-lufga text-[4rem] sm:text-[6rem] lg:text-[8rem] text-gray-900 leading-none">
            Sandra
          </p>
          <p className="font-lufga-100 text-kalam-black font-light text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-none mt-[-0.5rem]">
            Braz Lemos
          </p>
          <p className="font-lufga text-xl sm:text-2xl lg:text-3xl text-kalam-black mt-2">
            Web, Mobile & Dashboards
          </p>
        </div>

        {/* Right block */}
        <div className="mt-6 sm:mt-8 lg:mt-12 flex justify-start lg:justify-end">
          <div className="text-left w-full sm:w-3/4 lg:w-auto">
            <p className="text-lg sm:text-xl lg:text-2xl font-lufga-500 text-black">
              Product Designer{" "}
              <span className="text-sm sm:text-base lg:text-sm">(UX/UI)</span>
            </p>
            <p className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-2xl text-kalam-grey font-kalam-300">
              Turning pixels into human <br />
              experiences that feel like Magic!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-center">
        <img
          src="images/mouse-icon.gif"
          className="p-4 sm:p-6"
          width="80"
          sm:width="100"
        />
        <span className="text-sm sm:text-base lg:text-base">Scroll down</span>
      </div>
    </section>
  );
};

export default Hero;
