import { getSectionId } from "../helpers/sectionNavigation";
import type { SplitSectionProps } from "../data/types";

export const SplitSection = ({
  title,
  index,
  image,
  children,
  designIndex,
  total,
}: SplitSectionProps) => {
  const sectionId = getSectionId(title, index);

  return (
    <section
      id={sectionId}
      className="lg:snap-start lg:snap-always w-full lg:h-screen lg:overflow-hidden border-t border-gray-100 px-4 py-6 sm:px-12 sm:py-8 lg:px-16 lg:snap-section"
    >
      <div className="flex h-full w-full flex-col gap-2 lg:flex-row lg:gap-2 items-center justify-center">
        {/* Image */}
        <div className="flex w-full items-center justify-center rounded-2xl lg:w-5/12">
          <img
            src={image}
            alt={title}
            className="block h-auto max-h-[72vh] w-full object-contain"
          />
        </div>
        {/* Text */}
        <div className="flex w-full flex-col justify-center text-base font-lufga-400 text-black sm:text-lg lg:w-1/2 lg:text-lg max-w-2xl space-y-4">
          {designIndex && (
            <p className="text-start text-lufga-salmon font-lufga-400">
              {designIndex}/{total}
            </p>
          )}
          <h1 className="text-5xl font-lufga-500 sm:text-6xl">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};
