import type { CaseStudySection } from "../data/types";
import { getSectionId } from "../helpers/sectionNavigation";

export const SplitSection = ({
  section,
  index,
}: {
  section: CaseStudySection;
  index: number;
}) => {
  const sectionId = getSectionId(section.title, index);
  const designSlides = section.design ?? [];

  return (
    <section
      id={sectionId}
      className="w-full scroll-mt-40 border-t border-gray-100 px-4 py-6 sm:px-12 sm:py-8 md:scroll-mt-48 lg:px-16"
    >
      {designSlides.length > 0 ? (
        <div className="w-full space-y-8">
          {section.paragraphs.length > 0 && (
            <div className="w-full lg:w-1/2">
              <div className="space-y-4 text-base leading-7 text-black font-lufga-thin sm:text-lg">
                <h1 className="mb-12 text-5xl leading-none text-black font-lufga font-lufga-500 sm:text-6xl md:text-5xl">
                  {section.title}
                </h1>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>
                    {paragraph.map((seg, j) =>
                      seg.bold ? (
                        <strong key={j}>{seg.text}</strong>
                      ) : (
                        <span key={j}>{seg.text}</span>
                      ),
                    )}
                  </p>
                ))}
              </div>
            </div>
          )}

          {designSlides.map((slide, slideIndex) => (
            <div
              key={`${slide.title}-${slideIndex}`}
              className="flex min-h-[calc(100vh-7rem)] w-full flex-col gap-4 lg:flex-row lg:items-center lg:gap-5"
            >
              <div className="flex w-full items-center justify-center rounded-2xl lg:w-1/2 lg:flex-[0_0_50%]">
                {section.image ? (
                  <img
                    src={section.image}
                    alt={slide.title}
                    className="block h-auto max-h-[72vh] w-full max-w-full object-contain"
                  />
                ) : slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="block h-auto max-h-[72vh] w-full max-w-full object-contain"
                  />
                ) : null}
              </div>

              <div className="flex w-full flex-col justify-center space-y-3 text-base leading-7 text-black font-lufga-thin sm:text-lg lg:w-1/2 lg:flex-[0_0_50%]">
                <p className="font-kalam text-lg text-kalam-grey">
                  {slideIndex + 1} of {designSlides.length}
                </p>
                <span className="inline-flex rounded-full bg-[#212121] px-4 py-2 text-sm text-white font-kalam-500">
                  {slide.badge}
                </span>
                <h2 className="text-4xl leading-none text-black font-lufga font-lufga-500 sm:text-5xl md:text-4xl">
                  {slide.title}
                </h2>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh-7rem)] w-full flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
          <div className="flex w-full items-center justify-center rounded-2xl lg:w-1/2 lg:flex-[0_0_50%]">
            <img
              src={section.image}
              alt={section.title}
              className="block h-auto max-h-[72vh] w-full max-w-full object-contain"
            />
          </div>

          <div className="flex w-full flex-col justify-center space-y-3 text-base leading-7 text-black font-lufga-thin sm:text-lg lg:w-1/2 lg:flex-[0_0_50%]">
            <h1 className="mb-12 text-5xl leading-none text-black font-lufga font-lufga-500 sm:text-6xl md:text-6xl">
              {section.title}
            </h1>
            {section.paragraphs.map((paragraph, i) => (
              <p className="max-w-2xl" key={i}>
                {paragraph.map((seg, j) =>
                  seg.bold ? (
                    <strong key={j}>{seg.text}</strong>
                  ) : (
                    <span className="font-lufga-400" key={j}>
                      {seg.text}
                    </span>
                  ),
                )}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
