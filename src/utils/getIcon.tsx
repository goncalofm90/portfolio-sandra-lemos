export const getIcon = (type: string, size: "sm" | "md" | "lg" = "md") => {
  const cls =
    size === "sm"
      ? "w-5 h-5"
      : size === "md"
        ? "w-5 h-5 sm:w-8 sm:h-8"
        : "w-6 h-6 sm:w-8 sm:h-8";

  const Icon = ({ file }: { file: string }) => (
    <img
      src={`/images/card-icons/${file}`}
      className={cls}
      alt={file.replace("-icon.svg", "")}
    />
  );

  switch (type) {
    case "Web App":
      return <Icon file="monitor-icon.svg" />;
    case "Mobile":
      return <Icon file="mobile-icon.svg" />;
    case "Mobile & Tablet":
      return (
        <div className="flex space-x-0.5">
          <Icon file="mobile-icon.svg" />
          <Icon file="tablet-icon.svg" />
        </div>
      );
    case "Web, Mobile & Landing Page":
      return (
        <div className="flex space-x-0.5">
          <Icon file="monitor-icon.svg" />
          <Icon file="mobile-icon.svg" />
          <Icon file="pc-icon.svg" />
        </div>
      );
    default:
      return <Icon file="pc-icon.svg" />;
  }
};
