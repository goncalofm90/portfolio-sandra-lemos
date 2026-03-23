const Hero = () => {
  return (
    <section className="relative w-full min-h-screen py-12 flex items-center">
      <div className="relative z-10 w-full px-16">
        {/* Staircase */}
        <div className="space-y-1">
          <p className="font-lufga font-bold text-[8rem] text-gray-900 leading-none">
            Sandra
          </p>
          <p className="font-lufga font-light text-[5rem] text-gray-900 ml-16 leading-none">
            Braz Lemos
          </p>
          <p className="font-lufga text-2xl text-gray-700 ml-32 mt-2">
            Web, Mobile & Dashboards
          </p>
        </div>

        {/* Right block — separate row, aligned right */}
        <div className="text-right mt-12">
          <p className="text-2xl lg:text-3xl font-bold text-black font-lufga">
            Product Designer (UX/UI)
          </p>
          <p className="mt-4 text-lg lg:text-xl kalam-grey">
            Turning pixels into human experiences <br /> that feel like Magic!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
