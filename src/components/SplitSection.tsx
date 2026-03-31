import type { CaseStudySection } from "../data/types";

export const SplitSection = ({
  section,
  index,
}: {
  section: CaseStudySection;
  index: number;
}) => {
  const isImageLeft = section.imagePosition === "left";

  return (
    <section className="w-full px-4 sm:px-12 py-12 border-t border-gray-100">
      <div
        className={`flex flex-col ${
          isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-16 items-center`}
      >
        {/* Image block */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center min-h-56">
          {section.image ? (
            <img
              src={section.image}
              alt={section.title}
              className="w-full object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-2xl">
              <span className="text-gray-300 text-sm font-lufga-300">
                Image {index + 1}
              </span>
            </div>
          )}
        </div>

        {/* Text block */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-lufga text-3xl sm:text-4xl font-lufga-500 text-black mb-4 leading-tight">
            {section.title}
          </h2>
          <p className="font-lufga-300 text-gray-600 text-base sm:text-lg leading-7 whitespace-pre-line">
            {section.content}
          </p>
        </div>
      </div>
    </section>
  );
};
