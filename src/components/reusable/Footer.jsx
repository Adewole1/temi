import { useEffect, useRef } from "react";
import HoverButton from "./Button";
import goToSection from "../../utils/navigate";

const Footer = () => {
  const scrollContainer2Ref = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainer2Ref.current;
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
    <div className="flex flex-col">
      <div className="flex flex-col items-center overflow-x-clip w-screen">
        <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 2xl:px-20 gap-4 lg:gap-6 2xl:gap-8 overflow-x-clip w-screen max-w-[1440px]">
          <div className="flex flex-col gap-3 lg:gap-4">
            <p className="font-instrument text-5xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem]">
              Let's Work Together!
            </p>
            <p className="lg:text-lg 2xl:text-xl text-[#D9D9D9]">
              You can send me an email at{" "}
              <a
                href="mailto:olutemitopefamuyiwa@gmail.com"
                className="hover:text-[#FD5D00] underline"
              >
                olutemitopefamuyiwa@gmail.com
              </a>
              <br />
              or connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/"
                className="hover:text-[#FD5D00] underline"
              >
                Linkedin
              </a>
              .
            </p>
          </div>
          <HoverButton
            hoverBg={"hover:bg-white"}
            hoverText={"hover:text-gray-700"}
            height={"h-12"}
            link={"mailto:olutemitopefamuyiwa@gmail.com"}
            oldContent={
              <div
                onClick={() => goToSection("contact")}
                className="flex items-center flex-nowrap gap-0.5"
              >
                <p className="m-0 p-0">Work with me</p>
              </div>
            }
            newContent={
              <div className="flex items-center flex-nowrap gap-0.5">
                <div className="bg-cover size-9 bg-no-repeat bg-[url('/src/assets/images/temi.jpeg')] rounded-[4px]"></div>
                <p className="m-0 p-0 text-sm">+ you = let's talk</p>
              </div>
            }
          />
        </div>
        <div className="relative flex flex-col w-screen max-w-[1440px] overflow-x-scroll no-scrollbar">
          <div className="fade-effect fade-left"></div>
          <div className="fade-effect fade-right"></div>
          <div className="scroll-wrapper" ref={scrollContainer2Ref}>
            <div className="scroll-container pt-4 flex items-center gap-4 lg:gap-6pl-2">
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/kidney.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[25rem] md:min-w-[37.5rem] 2xl:min-w-[47rem] h-full will-change-transform duration-500  min-h-60 md:min-h-[25rem] 2xl:min-h-[30rem]"></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/ugifty.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-80 md:min-w-[34rem] lg:min-w-[32rem] 2xl:min-w-[42rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/hillford.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[18rem] md:min-w-[31rem] lg:min-w-[32rem] 2xl:min-w-[42rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/autosms.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[23rem] md:min-w-[37.5rem] 2xl:min-w-[48rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/tuboh.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-28 md:min-w-44 lg:min-w-44 2xl:min-w-60 h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/leaderboard.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-28 md:min-w-44 lg:min-w-44 2xl:min-w-56 h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/ngbet.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-28 md:min-w-48 2xl:min-w-60 h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/strathut.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[25rem] md:min-w-[37.5rem] 2xl:min-w-[47rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/ngpay.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[23rem] md:min-w-[37.5rem] 2xl:min-w-[47rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/health.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[21rem] md:min-w-[35rem] lg:min-w-[35rem] 2xl:min-w-[46rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
              <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/mockup/fitness.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[21rem] md:min-w-[35rem] lg:min-w-[35rem]  2xl:min-w-[46rem] h-full mr-4 will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="flex flex-col items-center overflow-x-clip w-screen"
      >
        <div className="flex flex-col items-center py-6 md:py-8 lg:py-12 2xl:py-16 px-4 md:px-12 lg:px-16 2xl:px-20 gap-4 lg:gap-6 2xl:gap-8 overflow-x-clip w-screen max-w-[1440px]">
          <div className="flex flex-col items-center gap-4 pt-4 lg:pt-6 2xl:pt-8 border-t border-t-[#484848] w-full">
            <p className="font-instrument text-lg lg:text-xl 2xl:text-2xl uppercase block md:hidden">
              temitope famuyiwa
            </p>
            <div className="flex items-center justify-between w-full">
              <p className="text-sm lg:text-base text-[#A8A8B5]">
                © {new Date().getFullYear()}. All rights reserved.
              </p>
              <p className="font-instrument text-lg lg:text-xl 2xl:text-2xl uppercase hidden md:block">
                temitope famuyiwa
              </p>
              <div className="flex items-center gap-4 lg:gap-6 2xl:gap-8 text-[#A8A8B5] lg:text-lg">
                <a
                  href="mailto:olutemitopefamuyiwa@gmail.com"
                  className="hover:text-[#FD5D00] font-instrument"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  className="hover:text-[#FD5D00] font-instrument"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
