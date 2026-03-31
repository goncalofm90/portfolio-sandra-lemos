import { getSectionId } from "../helpers/sectionNavigation";

export const SplitSection = ({
  title,
  index,
  image,
  children,
  designIndex,
  total,
}) => {
  const sectionId = getSectionId(title, index);

  return (
    <section
      id={sectionId}
      className="w-full scroll-mt-40 border-t border-gray-100 px-4 py-6 sm:px-12 sm:py-8 md:scroll-mt-48 lg:px-16"
    >
      <div className="flex min-h-[calc(100vh-7rem)] w-full flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
        <div className="flex w-full items-center justify-center rounded-2xl lg:w-1/2">
          <img
            src={image}
            alt={title}
            className="block h-auto max-h-[72vh] w-full object-contain"
          />
        </div>

        <div className="flex w-full flex-col justify-center space-y-4 text-base font-lufga-400 text-black sm:text-lg lg:w-1/2 lg:text-lg  max-w-2xl">
          {designIndex && (
            <p className="text-start text-lufga-salmon font-lufga-400">
              {" "}
              {designIndex}/{total}
            </p>
          )}
          <h1 className="mb-12 text-5xl font-lufga-500 sm:text-6xl">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};
