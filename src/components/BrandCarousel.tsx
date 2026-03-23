import { useEffect, useState } from 'react';

const brands = [
  'Brand 1',
  'Brand 2',
  'Brand 3',
  'Brand 4',
  'Brand 5',
  'Brand 6',
  'Brand 7',
  'Brand 8',
];

const BrandCarousel = () => {
  const [duplicatedBrands, setDuplicatedBrands] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate brands for infinite scroll effect
    setDuplicatedBrands([...brands, ...brands]);
  }, []);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-8">
          Brands I've Worked With
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex-shrink-0 mx-8 text-gray-600 dark:text-gray-300 text-lg font-medium"
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