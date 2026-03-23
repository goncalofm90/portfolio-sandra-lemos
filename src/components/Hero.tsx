const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center">
      <div className="relative z-10 w-full px-16">
        {/* Staircase */}
        <div className="space-y-1">
          <p className="font-lufga font-bold text-[8rem] text-gray-900 leading-none">
            Sandra
          </p>
          <p className="font-lufga font-light text-[6rem] text-gray-900 lg:ml-32 leading-none">
            Braz Lemos
          </p>
          <p className="font-lufga font-bold text-3xl text-black ml-86 mt-2">
            Web, Mobile & Dashboards
          </p>
        </div>

        {/* Right block — separate row, aligned right */}
        <div className="flex justify-end mt-12">
          <div className="text-left">
            <p className="text-2xl lg:text-4xl font-bold text-black font-lufga">
              Product Designer{" "}
              <span className="font-lufga text-sm">(UX/UI)</span>
            </p>
            <p className="mt-4 text-2xl kalam-grey">
              Turning pixels into human <br />
              experiences that feel like Magic!
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500">
        test222
      </div>
    </section>
  );
};

export default Hero;
