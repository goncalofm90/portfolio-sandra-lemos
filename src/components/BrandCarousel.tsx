import { useEffect, useState } from "react";

const brands = [
  <img src={"/ima.png"} alt="Brand 1" />,
  <img src={"/boiron.png"} alt="Brand 2" />,
  <img src={"/astara.png"} alt="Brand 3" />,
  <img src={"/bricomarche.png"} alt="Brand 4" />,
  <img src={"/bioscalin.png"} alt="Brand 5" />,
  <img src={"/psyllogel.png"} alt="Brand 6" />,
  <img src={"/log.png"} alt="Brand 7" />,
  <img src={"/casadearouca.png"} alt="Brand 8" />,
  <img src={"/liquidland.png"} alt="Brand 8" />,
  <img src={"/studyinpt.png"} alt="Brand 8" />,
];

const BrandCarousel = () => {
  const [duplicatedBrands, setDuplicatedBrands] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate brands for infinite scroll effect
    setDuplicatedBrands([...brands, ...brands, ...brands]);
  }, []);

  return (
    <div className="py-12">
      <div className="w-full mx-auto">
        <h2 className="font-kalam text-4xl text-start text-black text-center mb-8 px-16">
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
