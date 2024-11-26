import tuboh from "../assets/logos/tuboh.png";
import medics from "../assets/logos/medics.png";
import kidney from "../assets/logos/kidney.png";
import tracehut from "../assets/logos/tracehut2.png";
import ppn from "../assets/logos/ppn.png";
import ngpay from "../assets/logos/ngpay.png";
import strathut from "../assets/logos/strathut.png";
import foh from "../assets/logos/foh.png";
import hillford from "../assets/logos/hillford.png";
import { useEffect, useRef } from "react";
import HoverButton from "../components/Button";
import goToSection from "../components/navigate";
import { motion, useTransform, useScroll } from "framer-motion";

const Homepage = () => {
  const scrollContainerRef = useRef(null);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      window.innerWidth > 0 && window.innerWidth <= 640
        ? "36%"
        : window.innerWidth > 640 && window.innerWidth <= 1024
        ? "29%"
        : window.innerWidth > 1024 && window.innerWidth <= 1440
        ? "19%"
        : "16%",
      "-35%",
    ]
  );

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
    <div className="flex flex-col items-center w-screen">
      <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 2xl:px-20 w-screen max-w-[1440px]">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 2xl:gap-12 px-4 lg:px-6 2xl:px-8">
          <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-6 items-center">
            <p className="font-instrument text-5xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem] text-center md:max-w-[85%] lg:max-w-[70%] hover:cursor-text header">
              A product designer building impactful solutions.
            </p>
            <p className="text-[#d9d9d9] lg:max-w-[75%]">
              I'm Temi, and my goal is to create intuitive designs that engage
              and delight users while driving success and growth for businesses.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 lg:gap-3">
            <HoverButton
              hoverBg={"hover:bg-white"}
              hoverText={"hover:text-gray-700"}
              // link={"#contact"}
              height={"h-12"}
              oldContent={
                <div
                  onClick={() => goToSection("contact")}
                  className="flex items-center flex-nowrap gap-0.5"
                >
                  <p className="m-0 p-0">Work with me</p>
                </div>
              }
              newContent={
                <div
                  onClick={() => goToSection("contact")}
                  className="flex items-center flex-nowrap gap-0.5"
                >
                  <div className="bg-cover size-9 bg-no-repeat bg-[url('/src/assets/images/temi.jpeg')] rounded-[4px]"></div>
                  <p className="m-0 p-0 text-sm">+ you = let's talk</p>
                </div>
              }
            />
            <HoverButton
              bg="bg-white"
              text="text-gray-700"
              width={"w-44"}
              height={"h-12"}
              oldContent={
                <p onClick={() => goToSection("studies")}>View Case Studies</p>
              }
              newContent={
                <p onClick={() => goToSection("studies")} className="m-0 p-0">
                  View Case Studies
                </p>
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-4 lg:px-6 2xl:px-8 max-w-[90%]">
          <p className="font-instrument lg:text-lg text-center">
            Companies I've Worked With
          </p>

          <div className="relative flex flex-col w-screen max-w-[90%] lg:max-w-[80%] 2xl:max-w-[1440px] overflow-x-scroll no-scrollbar">
            <div className="fade-effect fade-left"></div>
            <div className="fade-effect fade-right"></div>
            <div className="wrapper2" ref={scrollContainerRef}>
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
                <div className="item2 lg:w-12 lg:min-w-12 w-6 md:w-8 min-w-6 md:min-w-8 grayscale hover:grayscale-0">
                  <img src={hillford} alt="Hillford logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="studies"
        className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 2xl:px-20 gap-4 lg:gap-6 2xl:gap-8 overflow-x-clip w-screen"
      >
        <p className="font-instrument text-left text-5xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem] w-full max-w-[1440px]">
          Case Studies
        </p>
        <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
            <div className="h-80 md:h-[25rem] xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-[url('/src/assets/images/medics.png')]">
              <a
                href="/studies/medics"
                className="w-full h-full relative flex items-center justify-center rounded-md 2xl:rounded-lg bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-40 "
              >
                <a
                  href="/studies/medics"
                  className="bg-white hover:bg-[#ff8b48] hover:text-white rounded-full size-14 flex items-center justify-center gap-1.5 hover:gap-3 transition-all duration-500 ease-in-out fill-none stroke-[#344054] hover:stroke-white hover:rotate-90"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </a>
            </div>
            <div className="flex flex-col 2xl:gap-1">
              <div className="flex items-center justify-between">
                <p className="font-instrument text-xl lg:text-2xl 2xl:text-3xl">
                  Medics Partners
                </p>
                <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59707 1.70121C6.58034 1.09198 7.43854 1.33749 7.95407 1.72857C8.16547 1.88891 8.27114 1.96909 8.33334 1.96909C8.39554 1.96909 8.50121 1.88891 8.71261 1.72857C9.22814 1.33749 10.0863 1.09198 11.0696 1.70121C12.3601 2.50076 12.6521 5.13851 9.67554 7.36391C9.10861 7.78777 8.82514 7.99964 8.33334 7.99964C7.84154 7.99964 7.55807 7.78777 6.99114 7.36391C4.01464 5.13851 4.30663 2.50076 5.59707 1.70121Z"
                      stroke="#FD5D00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.66667 9.33325H4.26322C4.45932 9.33325 4.65273 9.37745 4.82812 9.46232L6.18944 10.121C6.36483 10.2059 6.55824 10.25 6.75434 10.25H7.44941C8.12167 10.25 8.66667 10.7774 8.66667 11.4279C8.66667 11.4542 8.64867 11.4773 8.62254 11.4845L6.92861 11.9529C6.62472 12.0369 6.29934 12.0077 6.01667 11.8709L4.56141 11.1668"
                      stroke="#FD5D00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.66667 10.9999L11.7285 10.0592C12.2713 9.89003 12.8581 10.0906 13.1981 10.5614C13.4439 10.9018 13.3438 11.3894 12.9857 11.596L7.97527 14.4869C7.65661 14.6708 7.28061 14.7156 6.93014 14.6116L2.66667 13.3465"
                      stroke="#FD5D00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-xs lg:text-sm font-medium leading-tight">
                    Healthcare
                  </p>
                </div>
              </div>
              <p className="lg:text-lg text-left">
                Streamlining Healthcare Operations & Enhancing Patient Care.
              </p>
            </div>
          </div>
          <div className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
            <div className="h-80 md:h-[25rem] xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-[url('/src/assets/images/ppn.png')]">
              <a
                href="/studies/ppn"
                className="w-full h-full relative flex items-center justify-center rounded-md 2xl:rounded-lg bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-40"
              >
                <a
                  href="/studies/ppn"
                  className="bg-white hover:bg-[#ff8b48] hover:text-white rounded-full size-14 flex items-center justify-center gap-1.5 hover:gap-3 transition-all duration-500 ease-in-out fill-none stroke-[#344054] hover:stroke-white hover:rotate-90"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </a>
            </div>
            <div className="flex flex-col 2xl:gap-1">
              <div className="flex items-center justify-between">
                <p className="font-instrument text-xl lg:text-2xl 2xl:text-3xl">
                  PPN Editor
                </p>
                <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00003 7.32471V10.3283C2.00003 12.2162 2.00003 13.1602 2.58582 13.7466C3.1716 14.3332 4.11441 14.3332 6.00003 14.3332H10C11.8856 14.3332 12.8284 14.3332 13.4142 13.7466C14 13.1602 14 12.2162 14 10.3283V7.32471"
                      stroke="#FD5D00"
                      stroke-width="1.25"
                    />
                    <path
                      d="M10 11.3179C9.54394 11.7227 8.81788 11.9845 8.00001 11.9845C7.18214 11.9845 6.45609 11.7227 6.00003 11.3179"
                      stroke="#FD5D00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.8638 1.66867L4.09989 1.68805C2.94112 1.62836 2.64401 2.52177 2.64401 2.95849C2.64401 3.3491 2.59371 3.91853 1.8835 4.98877C1.1733 6.05901 1.22666 6.37695 1.62715 7.11784C1.95953 7.73277 2.80495 7.97297 3.24576 8.01337C4.64589 8.04524 5.32711 6.83451 5.32711 5.98353C6.02168 8.12171 7.99705 8.12171 8.87719 7.87717C9.75905 7.63224 10.5145 6.75544 10.6927 5.98353C10.7967 6.94284 11.1121 7.50257 12.0442 7.88724C13.0097 8.28564 13.8399 7.67671 14.2565 7.28631C14.6731 6.89597 14.9405 6.02938 14.1979 5.07691C13.6857 4.42005 13.4723 3.80124 13.4022 3.15989C13.3615 2.78827 13.3259 2.38895 13.0648 2.13483C12.6832 1.76347 12.1357 1.65079 11.8638 1.66867Z"
                      stroke="#FD5D00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-xs lg:text-sm font-medium leading-tight">
                    E-commerce
                  </p>
                </div>
              </div>
              <p className="lg:text-lg text-left">
                Empowering Merchants launch their online store faster.
              </p>
            </div>
          </div>
          <div className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
            <div className="h-80 md:h-[25rem] xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-[url('/src/assets/images/tracehut.png')]">
              <a
                href="/studies/tracehut"
                className="w-full h-full relative flex items-center justify-center rounded-md 2xl:rounded-lg bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-40"
              >
                <a
                  href="/studies/tracehut"
                  className="bg-white hover:bg-[#ff8b48] hover:text-white rounded-full size-14 flex items-center justify-center gap-1.5 hover:gap-3 transition-all duration-500 ease-in-out fill-none stroke-[#344054] hover:stroke-white hover:rotate-90"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </a>
            </div>
            <div className="flex flex-col 2xl:gap-1">
              <div className="flex items-center justify-between">
                <p className="font-instrument text-xl lg:text-2xl 2xl:text-3xl">
                  Tracehut
                </p>
                <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    color="#fd5d00"
                    fill="none"
                  >
                    <path
                      d="M21 7.4849C21 6.38738 21 5.83862 20.7239 5.37551C20.4478 4.9124 19.9392 4.608 18.9219 3.99921L17.6276 3.22461C16.0308 2.26893 15.2323 1.7911 14.6162 2.08712C14 2.38315 14 3.24459 14 4.96746V22H21V7.4849Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 22H2"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 9H10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 15H10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 7.4849C3 6.38738 3 5.83862 3.27609 5.37551C3.55219 4.9124 4.06081 4.608 5.07807 3.99921L6.37237 3.22461C7.96923 2.26893 8.76767 1.7911 9.38383 2.08712C10 2.38315 10 3.24459 10 4.96746V22H3V7.4849Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.50117 8L6.49219 8M6.50117 12H6.49219M6.50117 16H6.49219"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5012 8L17.4922 8M17.5012 12H17.4922M17.5012 16H17.4922"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-xs lg:text-sm font-medium leading-tight">
                    Real Estate
                  </p>
                </div>
              </div>
              <p className="lg:text-lg text-left">
                Streamlining Healthcare Operations & Enhancing Patient Care.
              </p>
            </div>
          </div>
          <div className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
            <div className="h-80 md:h-[25rem] xl:h-[30rem] rounded-xl bg-cover bg-no-repeat bg-[url('/src/assets/images/ngpay.png')]">
              <a className="w-full h-full relative flex items-center justify-center rounded-md 2xl:rounded-lg bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-40">
                <a className="bg-white hover:bg-[#ff8b48] hover:text-white rounded-full size-14 flex items-center justify-center gap-1.5 hover:gap-3 transition-all duration-500 ease-in-out fill-none stroke-[#344054] hover:stroke-white hover:rotate-90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </a>
            </div>
            <div className="flex flex-col 2xl:gap-1">
              <div className="flex items-center justify-between">
                <p className="font-instrument text-xl lg:text-2xl 2xl:text-3xl">
                  NGPay
                </p>
                <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 9.33337C10.6667 9.88564 11.1144 10.3334 11.6667 10.3334C12.219 10.3334 12.6667 9.88564 12.6667 9.33337C12.6667 8.78111 12.219 8.33337 11.6667 8.33337C11.1144 8.33337 10.6667 8.78111 10.6667 9.33337Z"
                      stroke="#FD5D00"
                    />
                    <path
                      d="M12.6 5.33337C12.6437 5.11797 12.6667 4.89502 12.6667 4.66671C12.6667 2.82576 11.1743 1.33337 9.33333 1.33337C7.4924 1.33337 6 2.82576 6 4.66671C6 4.89502 6.02295 5.11797 6.06668 5.33337"
                      stroke="#FD5D00"
                    />
                    <path
                      d="M4.66665 5.32879H10.6666C12.5522 5.32879 13.495 5.32879 14.0808 5.91485C14.6666 6.50093 14.6666 7.44416 14.6666 9.33069V10.6647C14.6666 12.5512 14.6666 13.4945 14.0808 14.0806C13.495 14.6666 12.5522 14.6666 10.6666 14.6666H6.66665C4.15249 14.6666 2.89541 14.6666 2.11436 13.8852C1.33331 13.1038 1.33331 11.8461 1.33331 9.33069V7.99676C1.33331 5.48137 1.33331 4.22368 2.11436 3.44225C2.74309 2.81323 3.68027 2.69055 5.33331 2.66663H6.66665"
                      stroke="#FD5D00"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-xs lg:text-sm font-medium leading-tight">
                    Payments
                  </p>
                </div>
              </div>
              <p className="lg:text-lg text-left">
                Driving payment solutions for Merchants.
              </p>
            </div>
          </div>
        </div>
        {/* <section ref={targetRef} className="relative h-[200vh] bg-transparent">
          <div className="fade-effect fade-left"></div>
          <div className="fade-effect fade-right"></div>
          <div className="flex flex-col items-start sticky top-48 md:top-64 lg:top-32 2xl:top-80 overflow-hidden no-scrollbar">
            <motion.div
              style={{ x }}
              className="flex justify-start items-center gap-4 lg:gap-6"
            >
              <div className="w-full flex justify-center item-center">
                <div className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
                  <div className="h-80 md:h-[25rem] xl:h-[30rem] w-96 md:w-[34rem] xl:w-[40rem] rounded-xl bg-cover bg-no-repeat bg-[url('/src/assets/images/medics.png')]">
                    <div className="w-full h-full relative flex items-center justify-center rounded-md 2xl:rounded-lg bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-40">
                      <a
                        href="/studies/medics"
                        className="bg-white hover:bg-[#ff8b48] hover:text-white rounded-full size-14 flex items-center justify-center gap-1.5 hover:gap-3 transition-all duration-500 ease-in-out fill-none stroke-[#344054] hover:stroke-white hover:rotate-90"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 19V5M12 5L5 12M12 5L19 12"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col 2xl:gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-instrument text-xl lg:text-2xl 2xl:text-3xl">
                        Medics Partners
                      </p>
                      <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.59707 1.70121C6.58034 1.09198 7.43854 1.33749 7.95407 1.72857C8.16547 1.88891 8.27114 1.96909 8.33334 1.96909C8.39554 1.96909 8.50121 1.88891 8.71261 1.72857C9.22814 1.33749 10.0863 1.09198 11.0696 1.70121C12.3601 2.50076 12.6521 5.13851 9.67554 7.36391C9.10861 7.78777 8.82514 7.99964 8.33334 7.99964C7.84154 7.99964 7.55807 7.78777 6.99114 7.36391C4.01464 5.13851 4.30663 2.50076 5.59707 1.70121Z"
                            stroke="#FD5D00"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M2.66667 9.33325H4.26322C4.45932 9.33325 4.65273 9.37745 4.82812 9.46232L6.18944 10.121C6.36483 10.2059 6.55824 10.25 6.75434 10.25H7.44941C8.12167 10.25 8.66667 10.7774 8.66667 11.4279C8.66667 11.4542 8.64867 11.4773 8.62254 11.4845L6.92861 11.9529C6.62472 12.0369 6.29934 12.0077 6.01667 11.8709L4.56141 11.1668"
                            stroke="#FD5D00"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.66667 10.9999L11.7285 10.0592C12.2713 9.89003 12.8581 10.0906 13.1981 10.5614C13.4439 10.9018 13.3438 11.3894 12.9857 11.596L7.97527 14.4869C7.65661 14.6708 7.28061 14.7156 6.93014 14.6116L2.66667 13.3465"
                            stroke="#FD5D00"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p className="text-xs lg:text-sm font-medium leading-tight">
                          Healthcare
                        </p>
                      </div>
                    </div>
                    <p className="lg:text-lg text-left">
                      Streamlining Healthcare Operations & Enhancing Patient
                      Care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center item-center">
                <div className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
                  <div className="h-80 md:h-[25rem] xl:h-[30rem] w-96 md:w-[34rem] xl:w-[40rem] rounded-xl bg-cover bg-no-repeat bg-[url('/src/assets/images/ppn.png')]">
                    <div className="w-full h-full relative flex items-center justify-center rounded-md 2xl:rounded-lg bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-40">
                      <a
                        href="/studies/ppn"
                        className="bg-white hover:bg-[#ff8b48] hover:text-white rounded-full size-14 flex items-center justify-center gap-1.5 hover:gap-3 transition-all duration-500 ease-in-out fill-none stroke-[#344054] hover:stroke-white hover:rotate-90"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 19V5M12 5L5 12M12 5L19 12"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col 2xl:gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-instrument text-xl lg:text-2xl 2xl:text-3xl">
                        PPN Editor
                      </p>
                      <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00003 7.32471V10.3283C2.00003 12.2162 2.00003 13.1602 2.58582 13.7466C3.1716 14.3332 4.11441 14.3332 6.00003 14.3332H10C11.8856 14.3332 12.8284 14.3332 13.4142 13.7466C14 13.1602 14 12.2162 14 10.3283V7.32471"
                            stroke="#FD5D00"
                            stroke-width="1.25"
                          />
                          <path
                            d="M10 11.3179C9.54394 11.7227 8.81788 11.9845 8.00001 11.9845C7.18214 11.9845 6.45609 11.7227 6.00003 11.3179"
                            stroke="#FD5D00"
                            stroke-width="1.25"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11.8638 1.66867L4.09989 1.68805C2.94112 1.62836 2.64401 2.52177 2.64401 2.95849C2.64401 3.3491 2.59371 3.91853 1.8835 4.98877C1.1733 6.05901 1.22666 6.37695 1.62715 7.11784C1.95953 7.73277 2.80495 7.97297 3.24576 8.01337C4.64589 8.04524 5.32711 6.83451 5.32711 5.98353C6.02168 8.12171 7.99705 8.12171 8.87719 7.87717C9.75905 7.63224 10.5145 6.75544 10.6927 5.98353C10.7967 6.94284 11.1121 7.50257 12.0442 7.88724C13.0097 8.28564 13.8399 7.67671 14.2565 7.28631C14.6731 6.89597 14.9405 6.02938 14.1979 5.07691C13.6857 4.42005 13.4723 3.80124 13.4022 3.15989C13.3615 2.78827 13.3259 2.38895 13.0648 2.13483C12.6832 1.76347 12.1357 1.65079 11.8638 1.66867Z"
                            stroke="#FD5D00"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p className="text-xs lg:text-sm font-medium leading-tight">
                          E-commerce
                        </p>
                      </div>
                    </div>
                    <p className="lg:text-lg text-left">
                      Empowering Merchants launch their online store faster.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center item-center">
                <div className="bg-[#1c1c1c] rounded-2xl flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
                  <div className="h-80 md:h-[25rem] xl:h-[30rem] w-96 md:w-[34rem] xl:w-[40rem] rounded-xl bg-cover bg-no-repeat bg-[url('/src/assets/images/tracehut.png')]">
                    <div className="w-full h-full relative flex items-center justify-center rounded-md 2xl:rounded-lg bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-40">
                      <a
                        href="/studies/tracehut"
                        className="bg-white hover:bg-[#ff8b48] hover:text-white rounded-full size-14 flex items-center justify-center gap-1.5 hover:gap-3 transition-all duration-500 ease-in-out fill-none stroke-[#344054] hover:stroke-white hover:rotate-90"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 19V5M12 5L5 12M12 5L19 12"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col 2xl:gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-instrument text-xl lg:text-2xl 2xl:text-3xl">
                        Tracehut
                      </p>
                      <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          color="#fd5d00"
                          fill="none"
                        >
                          <path
                            d="M21 7.4849C21 6.38738 21 5.83862 20.7239 5.37551C20.4478 4.9124 19.9392 4.608 18.9219 3.99921L17.6276 3.22461C16.0308 2.26893 15.2323 1.7911 14.6162 2.08712C14 2.38315 14 3.24459 14 4.96746V22H21V7.4849Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22 22H2"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 9H10"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 15H10"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3 7.4849C3 6.38738 3 5.83862 3.27609 5.37551C3.55219 4.9124 4.06081 4.608 5.07807 3.99921L6.37237 3.22461C7.96923 2.26893 8.76767 1.7911 9.38383 2.08712C10 2.38315 10 3.24459 10 4.96746V22H3V7.4849Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.50117 8L6.49219 8M6.50117 12H6.49219M6.50117 16H6.49219"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.5012 8L17.4922 8M17.5012 12H17.4922M17.5012 16H17.4922"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p className="text-xs lg:text-sm font-medium leading-tight">
                          Real Estate
                        </p>
                      </div>
                    </div>
                    <p className="lg:text-lg text-left">
                      Streamlining Healthcare Operations & Enhancing Patient
                      Care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section> */}
      </div>
      <div
        id="about"
        className="flex flex-col items-center bg-gradient-to-tr from-[#422f7d] to-black w-full"
      >
        <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-10 lg:px-16 2xl:px-20 gap-8 lg:gap-12 2xl:gap-16 overflow-x-clip w-screen max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-3 lg:gap-4 2xl:gap-6 w-full md:max-w-[100%] lg:max-w-[90%] 2xl:max-w-[85%]">
            <div className="w-full h-96 md:h-full bg-center bg-cover bg-no-repeat bg-[url('/src/assets/images/temi.jpeg')] rounded-xl grayscale"></div>
            <div className="flex flex-col h-full w-full bg-[#1c1c1c] p-4 lg:p-6 rounded-2xl gap-4 lg:gap-6 2xl:gap-8 text-left">
              <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 text-left">
                <p className="font-instrument text-5xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem] text-left">
                  About Me
                </p>
                <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 lg:text-lg 2xl:text-xl text-[#D9D9D9]">
                  <p>
                    Hi, I'm Temi, a design specialist with four years of
                    experience creating user-centered and business-driven
                    digital products. With a first-class degree in industrial
                    chemistry and over seven years as a quality assurance
                    technologist, I bring a unique analytical edge to solving
                    design challenges.
                  </p>
                  <p>
                    I've crafted impactful experiences for brands like Medics
                    Partners, Tracehut, and Tuboh, delivering innovative
                    solutions across fintech, health tech, e-commerce, gaming,
                    and more.
                  </p>
                </div>
              </div>
              <p className="text-xl lg:text-2xl 2xl:text-3xl capitalize font-instrument">
                My Skills
              </p>
              <div className="flex flex-wrap gap-2 lg:gap-x-3 2xl:gap-x-4 lg:gap-y-4 2xl:gap-y-5">
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    Product Design
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    Product Research
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    UI Design
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    Product Management
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    Design Systems
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    No-Code
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    Usability Testing
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    Product Strategy
                  </p>
                </div>
                <div className="bg-[#2C2C2C] rounded-md px-2 2xl:px-3 py-2 lg:py-3 flex items-center gap-1.5 lg:gap-2">
                  <div className="rounded-full bg-[#FD5D00] size-2 lg:size-2.5"></div>
                  <p className="text-nowrap font-medium text-xs md:text-sm">
                    Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 lg:gap-6 2xl:gap-8 md:max-w-[65%] lg:max-w-[55%] lg:py-16">
            <p className="font-instrument text-2xl lg:text-3xl 2xl:text-4xl">
              “Temi helped us launch our hospital's EMR system. She's able to
              understand the briefs and the entire workflow. We're able to
              provide quality health care to our patients with a simple and
              intuitive user experience.”
            </p>
            <div className="flex flex-col items-center gap-2 lg:gap-3 2xl:gap-4">
              <div className="flex size-14 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/images/busola.jpeg')] rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm lg:text-base font-medium">
                  Busola Ayelowo
                </p>
                <p className="text-xs lg:text-sm">CMD, Medics Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
