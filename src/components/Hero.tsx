const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Animated Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 0 }}
      >
        <defs>
          <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="70" />
          </filter>
          <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="90" />
          </filter>
          <filter id="blur3" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>
        <ellipse
          className="spray-1"
          cx="380"
          cy="420"
          rx="320"
          ry="200"
          filter="url(#blur1)"
        />
        <ellipse
          className="spray-2"
          cx="880"
          cy="400"
          rx="280"
          ry="210"
          filter="url(#blur2)"
        />
        <ellipse
          className="spray-3"
          cx="650"
          cy="280"
          rx="240"
          ry="180"
          filter="url(#blur3)"
        />
      </svg>

      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16">
        {/* Staircase */}
        <div>
          <p className="font-lufga text-[4rem] sm:text-[6rem] lg:text-[8rem] text-gray-900 leading-none">
            Sandra
          </p>
          <p className="font-lufga-100 text-kalam-black font-light text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-none mt-[-0.5rem] pl-8 sm:pl-14 lg:pl-20">
            Braz Lemos
          </p>
          <p className="font-lufga text-xl sm:text-2xl lg:text-3xl text-kalam-black mt-2 pl-16 sm:pl-28 lg:pl-40">
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
