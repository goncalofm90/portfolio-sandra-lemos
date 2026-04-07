import { useParams, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import SpaceflightBookingDetail from "./SpaceflightBookingDetail";
import ProductionManagementDetail from "./ProductionManagementDetail";
import MindfulnessDetail from "./MindfulnessDetail";
import HotelManagementDetail from "./HotelManagementDetail";
import EcommerceDetail from "./EcommerceDetail";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);

  //start at top of page, react router doesn't do this by default after v6
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  switch (projectId) {
    case 1:
      return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <ProductionManagementDetail />
        </div>
      );
    case 2:
      return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <MindfulnessDetail />
        </div>
      );
    case 3:
      return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <SpaceflightBookingDetail />
        </div>
      );
    case 4:
      return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <HotelManagementDetail />
        </div>
      );
    case 5:
      return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <EcommerceDetail />
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
