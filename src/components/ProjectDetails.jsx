import { useEffect } from "react";
import { motion } from "framer-motion";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  githubHref,
  caseStudyHref,
  closeModal,
}) => {
  const projectLink = href?.trim();
  const projectGithub = githubHref?.trim();
  const caseStudyLink = caseStudyHref?.trim();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm bg-black/40"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
          aria-label="Close project details"
        >
          <img src="/assets/close.svg" className="w-6 h-6" alt="close" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 id="project-modal-title" className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={`${title}-detail-${index}`} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {caseStudyLink ? (
                <a
                  href={caseStudyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  Read Case Study
                  <img src="/assets/arrow-up.svg" className="size-4" alt="open case study" />
                </a>
              ) : null}

              {projectLink ? (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  Live Demo
                  <img src="/assets/arrow-up.svg" className="size-4" alt="open live demo" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 font-medium text-neutral-500 cursor-not-allowed">
                  Demo Coming Soon
                </span>
              )}

              {projectGithub ? (
                <a
                  href={projectGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  View on GitHub
                  <img src="/assets/arrow-up.svg" className="size-4" alt="open github" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
