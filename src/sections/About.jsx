import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-heading">About Me</h2>
        <div className="grid gap-5 mt-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 auto-rows-[minmax(0,1fr)]">
          {/* Intro */}
          <div className="grid-default-color relative overflow-hidden flex flex-col justify-end col-span-1 xl:row-span-3">
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[2.5] md:-right-12 md:-top-6 lg:scale-[2.25]"
              alt="Developer at work"
              loading="lazy"
            />
            <div className="z-10">
              <p className="headtext">Hi, I'm Ali Sanati</p>
              <p className="subtext">
                Over the last 4 years, I have honed both frontend and backend
                skills to deliver performant, animated web experiences.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 bg-gradient-to-t from-indigo" />
          </div>

          {/* Principles board */}
          <div className="grid-default-color relative col-span-1 xl:row-span-3">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end text-5xl text-gray-500">
                CODE IS CRAFT
              </p>
              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="GRASP"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="SOLID"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="Design Patterns"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="Design Principles"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="SRP"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "30deg", top: "70%", left: "70%" }}
                image="assets/logos/csharp-pink.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="assets/logos/dotnet-pink.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="assets/logos/blazor-pink.png"
                containerRef={grid2Container}
              />
            </div>
          </div>

          {/* Time zone / globe */}
          <div className="grid-black-color relative col-span-1 xl:row-span-4 overflow-hidden">
            <div className="z-10 max-w-[60%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in Mars and open to collaborating across all time zones.
              </p>
            </div>
            <figure className="absolute left-[35%] top-[5%] scale-95 md:scale-100">
              <Globe />
            </figure>
          </div>

          {/* CTA */}
          <div className="grid-special-color flex flex-col items-center justify-center gap-4 col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-3">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <p className="subtext text-center max-w-xl">
              I love turning ambitious ideas into delightful digital experiences.
              Drop me a line and let's build something memorable.
            </p>
            <CopyEmailButton />
          </div>

          {/* Tech stack */}
          <div className="grid-default-color relative col-span-1 md:col-span-2 xl:col-span-1 xl:row-span-2 overflow-hidden">
            <div className="z-10 space-y-3 max-w-[70%]">
              <p className="headtext">Tech Stack</p>
              <p className="subtext">
                I specialize in an ecosystem of languages, frameworks, and tools that
                keep products fast, accessible, and delightful.
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-end w-full h-full md:scale-110">
              <Frameworks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
