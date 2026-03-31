import Card from "./Card";
import BrandCarousel from "./BrandCarousel";
import Hero from "./Hero";
import { PROJECT_CARDS } from "../data/projectCards";
// import BlobBackground from "./BlobBackground";

// const pageBlobs = [
//   // hero center blob — big and static
//   {
//     color: "#FFB1AD",
//     color2: "#D9AED3",
//     color3: "#FFDFD5",
//     r: 0.45,
//     speed: 0,
//     ax: 0,
//     ay: 0,
//     px: 0,
//     py: 0,
//     x: 0.5, // centered
//     y: 0.12, // top of page
//   },
//   // left edge
//   {
//     color: "#FFB1AD",
//     color2: "#D9AED3",
//     color3: "#D9AED3",
//     r: 0.25,
//     speed: 0.0005,
//     ax: 0.06,
//     ay: 0.06,
//     px: 1.6,
//     py: 0.9,
//     x: 0.0,
//     y: 0.2,
//   },
//   // right edge
//   {
//     color: "#c94bb8",
//     color2: "#FFDFD5",
//     color3: "#D9AED3",
//     r: 0.25,
//     speed: 0.0005,
//     ax: 0.06,
//     ay: 0.05,
//     px: 2.1,
//     py: 1.5,
//     x: 1.0,
//     y: 0.2,
//   },
//   // projects left
//   {
//     color: "#FFB1AD",
//     color2: "#D9AED3",
//     color3: "#D9AED3",
//     r: 0.25,
//     speed: 0.0005,
//     ax: 0.06,
//     ay: 0.06,
//     px: 1.3,
//     py: 1.1,
//     x: 0.0,
//     y: 0.6,
//   },
//   // projects right
//   {
//     color: "#c94bb8",
//     color2: "#FFDFD5",
//     color3: "#D9AED3",
//     r: 0.25,
//     speed: 0.0005,
//     ax: 0.06,
//     ay: 0.05,
//     px: 1.8,
//     py: 0.8,
//     x: 1.0,
//     y: 0.6,
//   },
// ];

const Homepage = () => {
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
