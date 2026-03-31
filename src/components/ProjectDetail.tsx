import { useParams, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import SpaceflightBookingDetail from "./SpaceflightBookingDetail";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);

  switch (projectId) {
    case 3:
      return <SpaceflightBookingDetail />;
    case 1:
    case 2:
    case 4:
    case 5:
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
