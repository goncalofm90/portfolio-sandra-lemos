import Card from "./Card";
import BrandCarousel from "./BrandCarousel";
import Hero from "./Hero";
import { PROJECT_CARDS } from "../data/projectCards";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    const saved = sessionStorage.getItem("homepage-scroll");
    if (saved) {
      window.scrollTo(0, parseInt(saved));
      sessionStorage.removeItem("homepage-scroll");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("homepage-scroll", window.scrollY.toString());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* <BlobBackground blobs={pageBlobs} /> */}
      <div className="relative z-10">
        <Hero />
        <section className="w-full py-24 gap-12 mt-[18rem]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-8xl text-black font-lufga-500 mb-2 text-center">
              Projects
            </h1>
            <p className="text-center font-kalam-300 text-gray-600 text-4xl mb-24">
              Transform insights into simple, effective design solutions
            </p>
            <div className="space-y-6 flex flex-col items-center gap-6">
              {PROJECT_CARDS.map((project) => (
                <Card key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default Homepage;
