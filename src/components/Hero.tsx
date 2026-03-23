const Hero = () => {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-5xl lg:text-6xl text-gray-900 leading-tight">
              <span className="font-lufga font-bold">Sandra</span> <br />
              <span className="font-lufga font-light ml-8">Braz Lemos</span>
            </p>
            <p className="text-xl lg:text-2xl text-gray-700">
              Web, Mobile & Dashboards
            </p>
          </div>
          <div className="mt-8 lg:mt-16">
            <p className="text-2xl lg:text-3xl font-bold text-purple-700">
              Product Designer (UX/UI)
            </p>
            <p className="mt-4 text-lg lg:text-xl text-gray-800">
              Turning pixels into human experiences that feel like Magic!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
