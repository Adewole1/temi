
import { useEffect, useRef } from "react";
import { HoverButton, PrimaryButton } from "../../../components/reusable/Button";
import goToSection from "../../../utils/navigate";

import tuboh from "../../../assets/logos/tuboh.png";
import medics from "../../../assets/logos/medics.png";
import kidney from "../../../assets/logos/kidney.png";
import tracehut from "../../../assets/logos/tracehut2.png";
import ppn from "../../../assets/logos/ppn.png";
import ngpay from "../../../assets/logos/ngpay.png";
import strathut from "../../../assets/logos/strathut.png";
import foh from "../../../assets/logos/foh.png";
import hillford from "../../../assets/logos/hillford.png";
import carina from "../../../assets/logos/carina.png";
import synergyy from "../../../assets/logos/synergyy.png";
import promotional from "../../../assets/logos/promotional.png";

const HeroSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const firstSet = scrollContainer.innerHTML;

    // Clone the items to create the loop effect
    scrollContainer.innerHTML += firstSet;
    const resetScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };
    scrollContainer.addEventListener("scroll", resetScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", resetScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 min-[90rem]:py-24 w-screen max-w-[90rem]">
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 min-[90rem]:flex gap-4 md:gap-6 lg:gap-8 xl:gap-10 min-[90rem]:gap-12 w-full px-4 md:px-12 lg:px-16 xl:px-24 min-[90rem]:px-[7.5rem]">
        <div className="absolute rounded-full w-96 h-64 bg-fuchsia-600/20 blur-[122px] bottom-10 left-1/2 -translate-x-1/2 z-[2]"></div>
        <div className="xl:col-span-5 flex flex-col items-start gap-4 md:gap-6 lg:gap-8 xl:gap-10 min-[90rem]:gap-12 text-left z-[3]">
          <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6">
            <h3 className="font-medium text-4xl xl:text-5xl min-[90rem]:text-6xl lg:leading-12 xl:leading-14 min-[90rem]:leading-[4.5rem]">
              Design partner for AI, tech startups and design studios
            </h3>
            <p className="text-zinc-300 lg:leading-relaxed min-[90rem]:leading-loose md:text-lg xl:text-lg">
              Design should do more than look good. I build experiences that
              solve real user problems, boost engagement, and grow your
              business.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 lg:gap-3">
            <HoverButton
              bg="bg-white rounded-s-full rounded-e-full font-medium h-full px-3 lg:px-4"
              text="text-gray-900"
              oldContent={
                <p onClick={() => goToSection("studies")}>View Case Studies</p>
              }
              newContent={
                <p
                  onClick={() => goToSection("studies")}
                  className="m-0  px-3 lg:px-4"
                >
                  View Case Studies
                </p>
              }
            />
            <PrimaryButton
              link={"https://cal.com/temitope-famuyiwa"}
              buttonText="Book a call"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-3 xl:col-span-7 min-[90rem]:min-w-[52%] w-full z-[3]">
          <img
            data-src="https://baticali.sirv.com/Temi/Portfolio%20reel.gif"
            alt="Portfolio full reel"
            className="Sirv w-full h-[29rem] object-cover rounded-md lg:rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 pt-12 md:pt-16 lg:pt-20 min-[90rem]:pt-24 max-w-[90rem]">
        <p className="font-geist-mono uppercase text-sm md:text-base text-zinc-300 text-center">
          Companies I've Partnered With
        </p>

        <div className="relative flex flex-col w-screen lg:max-w-[90%] overflow-x-scroll no-scrollbar">
          <div className="fade-effect fade-left"></div>
          <div className="fade-effect fade-right"></div>
          <div ref={scrollContainerRef} className="wrapper2">
            <div className="scroll-container2 flex items-center gap-12 w-full">
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 !ms-12 grayscale hover:grayscale-0">
                <img
                  src={tuboh}
                  alt="Tuboh logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2  lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={medics}
                  alt="Medics Partners logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={kidney}
                  alt="Africa Kidney foundation logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={tracehut}
                  alt="Tracehut logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-14 lg:min-w-14 w-8 md:w-12 min-w-8 md:min-w-12 grayscale hover:grayscale-0">
                <img
                  src={carina}
                  alt="Carina logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={ppn}
                  alt="PPN Vendor logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={ngpay}
                  alt="Ngpay logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-[5.5rem] lg:min-w-[5.5rem] w-12 md:w-16 min-w-12 md:min-w-16 grayscale hover:grayscale-0">
                <img
                  src={strathut}
                  alt="Strathut logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={foh}
                  alt="Future of Health logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-12 lg:min-w-12 w-6 md:w-10 min-w-6 md:min-w-10 grayscale hover:grayscale-0">
                <img src={hillford} alt="Hillford logo" />
              </div>
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={synergyy}
                  alt="Synergyy logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <div className="item2 lg:w-32 lg:min-w-32 w-20 md:w-28 min-w-20 md:min-w-28 grayscale hover:grayscale-0">
                <img
                  src={promotional}
                  alt="Promotional Products Now logo"
                  width={"100%"}
                  height={"auto"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
