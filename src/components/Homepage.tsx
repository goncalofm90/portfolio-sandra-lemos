import Card from "./Card";
import BrandCarousel from "./BrandCarousel";
import Hero from "./Hero";
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

const projects = [
  {
    id: 1,
    title: "Production Management",
    description:
      "Designed to help beverage companies monitor production data \n  across multiple factories, focusing on clarity, usability, and a \n  seamless user experience.",
    image: "images/production-management.jpg",
    type: "Web App" as const,
  },
  {
    id: 2,
    title: "Task & Mindfulness App",
    description:
      "Designed to help users manage daily tasks while promoting \n calm, balance, and organization through a gentle, pressure-free \n experience.",
    image: "images/mindfulness.png",
    type: "Mobile" as const,
  },
  {
    id: 3,
    title: "Spaceflight Booking & Operations",
    description:
      "A mobile app for passengers to book and manage spaceflights, \n and a tablet interface that equips crew with tools to support \n and monitor the journey.",
    image: "images/space.png",
    type: "Mobile & Tablet" as const,
  },
  {
    id: 4,
    title: "Hotel Management App",
    description:
      "A comprehensive solution designed to streamline hotel operations and enhance guest experiences through modern, user-friendly interfaces",
    image: "images/hotel.png",
    type: "Web, Mobile & Landing Page" as const,
  },
  {
    id: 5,
    title: "Ecommerce App",
    description:
      "A mobile app that simplifies shopping by offering price \n comparisons across multiple brands and products, enhanced \n with Augmented Reality (AR) for virtual product tryouts.",
    image: "images/fashion.png",
    type: "Mobile" as const,
  },
];

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
              {projects.map((project) => (
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
