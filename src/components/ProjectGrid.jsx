import React from "react";

export default function ProjectGrid({
  projects = [],
  onProjectClick,
  renderMedia,
  renderAction,
  getTitle = project => project.title,
  getCategory = project => project.category ?? project.role ?? project.description ?? "",
  getId,
  getCardClassName,
  getCardStyle,
  mediaAspectClass = "aspect-[16/10]",
  className = "md:grid-cols-3",
}) {
  return (
    <div className={`relative z-10 grid grid-cols-1 gap-12 ${className}`}>
      {projects.map((project, index) => {
        const title = getTitle(project);
        const category = getCategory(project);
        const media = renderMedia ? (
          renderMedia(project, index)
        ) : (
          <img
            src={project.image}
            alt={title}
            loading="lazy"
            decoding="async"
            className={`h-full w-full ${
              project.mediaFit === "cover" ? "object-cover" : "object-contain"
            } ${project.mediaClassName ?? ""}`}
          />
        );

        return (
          <article
            id={getId?.(project, index)}
            key={project.id ?? `${project.title ?? "project"}-${index}`}
            className={`group min-w-0 ${getCardClassName?.(project, index) ?? ""}`}
            style={getCardStyle?.(project, index)}
          >
            <div className="relative">
              {onProjectClick ? (
                <button
                  type="button"
                  onClick={() => onProjectClick(project, index)}
                  aria-label={`Open ${title}`}
                  className="block w-full overflow-hidden rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4a3321]"
                >
                  <div className={`relative ${mediaAspectClass} overflow-hidden rounded-xl ${project.mediaBackground ?? ""}`}>
                    {media}
                  </div>
                </button>
              ) : (
                <div className={`relative ${mediaAspectClass} overflow-hidden rounded-xl ${project.mediaBackground ?? ""}`}>
                  {media}
                </div>
              )}
              {renderAction?.(project, index)}
            </div>

            <div className="pt-4">
              <h2 className="font-sans text-base font-medium uppercase tracking-[0.08em] text-[#241b15] sm:text-lg">
                {title}
              </h2>
              {category && (
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-[#7f6246]">
                  {category}
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
