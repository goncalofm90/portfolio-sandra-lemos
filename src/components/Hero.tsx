const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Animated Background SVG */}
      <img
        src="/herovector.svg"
        className="absolute inset-0 w-full h-full opacity-100 animate-float"
        alt="Background vector"
      />

      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative z-10 w-full px-16">
        {/* Staircase */}
        <div>
          <p className="font-lufga text-[8rem] text-gray-900 leading-none">
            Sandra
          </p>
          <p className="font-lufga-100 text-kalam-black font-light text-[6rem] text-gray-900 lg:ml-32 leading-none">
            Braz Lemos
          </p>
          <p className="font-lufga text-3xl text-kalam-black ml-90 mt-2">
            Web, Mobile & Dashboards
          </p>
        </div>

        {/* Right block */}
        <div className="flex justify-end mt-12">
          <div className="text-left">
            <p className="text-2xl lg:text-4xl font-lufga-500 text-black font-lufga">
              Product Designer{" "}
              <span className="font-lufga text-sm">(UX/UI)</span>
            </p>
            <p className="mt-4 text-2xl text-kalam-grey font-kalam-300">
              Turning pixels into human <br />
              experiences that feel like Magic!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-center">
        <img src="/mouse-icon.gif" className="p-8" width="120" />
        <span>Scroll down</span>
      </div>
    </section>
  );
};

export default Hero;
