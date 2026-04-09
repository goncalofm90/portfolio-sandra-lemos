import { useParams, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import SpaceflightBookingDetail from "./SpaceflightBookingDetail";
import ProductionManagementDetail from "./ProductionManagementDetail";
import MindfulnessDetail from "./MindfulnessDetail";
import HotelManagementDetail from "./HotelManagementDetail";
import EcommerceDetail from "./EcommerceDetail";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import Footer from "./Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);

  //start at top of page, react router doesn't do this by default after v6
  useEffect(() => {
    scrollToTop();
  }, [projectId]);

  useEffect(() => {
    const container = document.querySelector(
      ".overflow-y-scroll",
    ) as HTMLElement;
    if (!container) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Find which section is most visible
        const sections =
          container.querySelectorAll<HTMLElement>(".snap-section");
        let bestSection: HTMLElement | null = null;
        let bestVisibility = 0;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const visibility = Math.min(
            1,
            (Math.min(rect.bottom, containerRect.bottom) -
              Math.max(rect.top, containerRect.top)) /
              rect.height,
          );

          if (visibility > bestVisibility) {
            bestVisibility = visibility;
            bestSection = section;
          }
        });

        if (bestSection) {
          (bestSection as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150); // Wait for scroll to stop
    };

    container.addEventListener("scroll", handleScrollEnd, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, [projectId]);

  switch (projectId) {
    case 1:
      return (
        <div className="lg:snap-y lg:snap-mandatory overflow-y-scroll h-screen overflow-x-hidden scroll-pt-20 [scroll-snap-stop:always] ">
          <ProductionManagementDetail />
          <div className="lg:snap-start">
            <Footer />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="lg:snap-y lg:snap-mandatory overflow-y-scroll h-screen overflow-x-hidden scroll-pt-20 [scroll-snap-stop:always]">
          <MindfulnessDetail />
          <div className="lg:snap-start">
            <Footer />
          </div>
        </div>
      );
    case 3:
      return (
        <div className="lg:snap-y lg:snap-mandatory overflow-y-scroll h-screen overflow-x-hidden scroll-pt-20 [scroll-snap-stop:always]">
          <SpaceflightBookingDetail />
          <div className="lg:snap-start">
            <Footer />
          </div>
        </div>
      );
    case 4:
      return (
        <div className="lg:snap-y lg:snap-mandatory overflow-y-scroll h-screen overflow-x-hidden scroll-pt-20 [scroll-snap-stop:always]">
          <HotelManagementDetail />
          <div className="lg:snap-start">
            <Footer />
          </div>
        </div>
      );
    case 5:
      return (
        <div className="lg:snap-y lg:snap-mandatory overflow-y-scroll h-screen overflow-x-hidden scroll-pt-20 [scroll-snap-stop:always]">
          <EcommerceDetail />
          <div className="lg:snap-start">
            <Footer />
          </div>
        </div>
      );
    default:
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6">
          <p className="text-2xl text-gray-400 font-lufga">
            Case study coming soon
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-black underline underline-offset-4 font-lufga-400"
          >
            <FiChevronLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      );
  }
};

export default ProjectDetail;
