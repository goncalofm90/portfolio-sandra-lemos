const brands = [
  <img src={"/images/ima.png"} alt="Brand 1" />,
  <img src={"/images/boiron.png"} alt="Brand 2" />,
  <img src={"/images/astara.png"} alt="Brand 3" />,
  <img src={"/images/bricomarche.png"} alt="Brand 4" />,
  <img src={"/images/bioscalin.png"} alt="Brand 5" />,
  <img src={"/images/psyllogel.png"} alt="Brand 6" />,
  <img src={"/images/log.png"} alt="Brand 7" />,
  <img src={"/images/casadearouca.png"} alt="Brand 8" />,
  <img src={"/images/liquidland.png"} alt="Brand 9" />,
  <img src={"/images/studyinpt.png"} alt="Brand 10" />,
];

const BrandCarousel = () => {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="py-12">
      <div className="w-full mx-auto">
        <h2 className="text-kalam-black lg:text-4xl  text-2xl text-start text-black text-center mb-8 px-16">
          Brands I've Worked With
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex-shrink-0 mx-8 text-black text-lg font-medium"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
