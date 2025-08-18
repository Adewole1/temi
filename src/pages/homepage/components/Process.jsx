import { Processes } from "../../../constants";

const Process = () => {
  return (
    <div
      id="process"
      className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 gap-4 md:gap-6 lg:gap-8 xl:gap-12 min-[90rem]:gap-16 w-screen max-w-[90rem] px-4 md:px-12 lg:px-16 xl:px-24 min-[90rem]:px-[7.5rem] relative"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-6 lg:gap-8 xl:gap-10 min-[90rem]:gap-12 w-full">
        <div className="xl:col-span-5 flex flex-col items-start gap-4 md:gap-6 lg:gap-8 xl:gap-10 min-[90rem]:gap-12 text-left">
          <h2 className="text-3xl xl:text-4xl min-[90rem]:text-5xl font-medium">
            My Work Process
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-3 xl:col-span-7 w-full">
          <p className="text-base xl:text-lg text-zinc-300 text-left">
            I don't just jump into visuals — I start with clarity.{" "}
            <br className="" />I work closely with founders, PMs, and developers
            to understand the problem, define the goals, and shape solutions
            users actually want. Every decision is backed by insights, not just
            aesthetics.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 min-[90rem]:gap-6">
        {Processes.map((process) => (
          <div
            key={process.id}
            className={`bg-[#1c1c1c] rounded-2xl flex flex-col items-start gap-4 lg:gap-5 min-[90rem]:gap-6 p-4 lg:p-6 col-span-1 ${
              [1, 2, 3].includes(process.id)
                ? "md:col-span-6 xl:col-span-4"
                : process.id === 4
                ? "md:col-span-6"
                : "md:col-span-full xl:col-span-6"
            }`}
          >
            <p className="font-geist-mono uppercase text-sm md:text-base text-zinc-300 text-center z-[4]">
              Step {process.id}
            </p>
            <div className="flex flex-col items-start text-left lg:gap-0.5 min-[90rem]:gap-1">
              <p className="text-lg lg:text-xl min-[90rem]:text-2xl font-medium leading-5 lg:leading-6 min-[90rem]:leading-9">
                {process.title}
              </p>
              <p className="text-zinc-300 lg:text-lg">{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
