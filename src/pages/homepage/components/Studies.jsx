import { PrimaryButton } from "../../../components/reusable/Button";
import { CaseStudies } from "../../../constants";

const Studies = () => {
  return (
    <div
      id="studies"
      className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 gap-4 md:gap-6 lg:gap-8 xl:gap-12 min-[90rem]:gap-16 overflow-x-clip w-screen max-w-[90rem] px-4 md:px-12 lg:px-16 xl:px-24 min-[90rem]:px-[7.5rem]"
    >
      <p className="font-instrument text-left text-5xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem] w-full">
        Case Studies
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 min-[90rem]:gap-6">
        {CaseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-5 min-[90rem]:gap-6 p-4 lg:p-6"
          >
            {study.image.includes("mp4") ? (
              <div className="min-h-80 md:min-h-72 lg:min-h-[25rem] rounded-xl overflow-hidden">
                <div
                  data-src={study.image}
                  data-options="video.background:true;"
                  className="Sirv h-80 md:h-72 lg:h-[25rem]  object-cover w-full"
                />
              </div>
            ) : (
              <div className="min-h-80 md:min-h-72 lg:min-h-[25rem] rounded-xl overflow-hidden">
                <img
                  data-src={study.image}
                  alt={study.title}
                  className="Sirv h-80 md:h-72 lg:h-[25rem] object-cover w-full"
                />
              </div>
            )}
            <div className="flex flex-col items-start gap-4 lg:gap-5 min-[90rem]:gap-6">
              <div className="flex items-center gap-1 md:gap-2 lg:gap-3 uppercase">
                <div className="bg-zinc-800 rounded-s-full rounded-e-full px-2 xl:px-2.5 py-0.5 lg:py-1 flex gap-1">
                  {study.industry.logo}
                  <p className="font-medium font-geist-mono text-xs md:text-sm">
                    {study.industry.title}
                  </p>
                </div>
                {study.features.map((feature) => (
                  <div className="bg-zinc-800 rounded-s-full rounded-e-full px-2 xl:px-2.5 py-0.5 lg:py-1 flex gap-1">
                    <p className="font-medium font-geist-mono text-xs md:text-sm">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start text-left lg:gap-0.5 min-[90rem]:gap-1">
                <p className="text-lg lg:text-xl min-[90rem]:text-2xl font-medium leading-5 lg:leading-6 min-[90rem]:leading-9">
                  {study.title}
                </p>
                <p className="text-zinc-300 lg:text-lg">{study.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-[#1c1c1c] rounded-2xl flex flex-col items-center justify-center gap-4 lg:gap-5 min-[90rem]:gap-6 p-4 lg:p-6 relative overflow-hidden">
          <div className="w-[508.58px] h-80 left-0 top-0 absolute bg-fuchsia-600/20 rounded-full blur-[161.58px]" />
          <div className="absolute w-4/5 h-[70%] top-[10%] left-1/2 -translate-x-1/2 bg-center bg-cover bg-no-repeat bg-[url('/src/assets/images/bg-pattern.png')] z-[2]"></div>
          <div className="flex flex-col items-center justify-center text-center gap-4 lg:gap-5 min-[90rem]:gap-6 z-[3]">
            <div className="flex items-center gap-1">
              <div className="size-14 lg:size-16 min-[90rem]:size-18 rounded-full overflow-hidden">
                <img
                  data-src={"https://baticali.sirv.com/Temi/Temi.png"}
                  alt="Temitope Famuyiwa"
                  data-options="fit:cover;"
                  className="Sirv size-full object-cover object-top grayscale"
                />
              </div>
              <p className="text-sm lg:text-base min-[90rem]:text-lg text-zinc-300">
                +
              </p>
              <div className="size-14 lg:size-16 min-[90rem]:size-18 rounded-full overflow-hidden bg-black flex items-center justify-center">
                <p className="text-lg xl:text-xl min-[90rem]:text-2xl capitalize font-medium">
                  You
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg xl:text-xl min-[90rem]:text-2xl font-medium">
                Let's build together
              </p>
              <p className="text-sm lg:text-base min-[90rem]:text-lg text-zinc-300">
                Starting a project, or improving an existing one?
              </p>
            </div>
            <PrimaryButton
              link={"https://cal.com/temitope-famuyiwa"}
              buttonText="Book a call"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;
