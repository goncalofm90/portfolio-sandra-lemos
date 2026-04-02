import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { MdTabletMac } from "react-icons/md";
import { LiaLaptopSolid } from "react-icons/lia";

export const getIcon = (type: string, size: "sm" | "md" = "md") => {
  const cls = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  switch (type) {
    case "Web App":
      return <FiMonitor className={cls} />;
    case "Mobile":
      return <FiSmartphone className={cls} />;
    case "Mobile & Tablet":
      return (
        <div className="flex space-x-0.5">
          <FiSmartphone className={cls} />
          <MdTabletMac className={cls} />
        </div>
      );
    case "Web, Mobile & Landing Page":
      return (
        <div className="flex space-x-0.5">
          <FiMonitor className={cls} />
          <FiSmartphone className={cls} />
          <LiaLaptopSolid className={cls} />
        </div>
      );
    default:
      return <LiaLaptopSolid className={cls} />;
  }
};
