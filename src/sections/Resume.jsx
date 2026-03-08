import { resumeData } from "../constants";

const Resume = () => {
  return (
    <section id="resume" className="c-space py-14 md:py-20">
      <div className="rounded-2xl border border-white/10 bg-primary p-6 md:p-10">
        <h2 className="text-heading">Resume</h2>
        <p className="mt-4 max-w-3xl subtext">
          Download my latest resume to review my skills, projects, certifications, and professional experience.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resumeData.filePath}
            download
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/20 transition-colors"
          >
            Download Resume (PDF)
          </a>
          <a
            href={resumeData.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Preview Resume
          </a>
        </div>

        <p className="mt-4 text-xs text-neutral-400">
          Place your PDF at <code>public{resumeData.filePath}</code> to make the download link live.
        </p>
      </div>
    </section>
  );
};

export default Resume;
