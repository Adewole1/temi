import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import HoverButton from "../../components/Button";
import shopify from "../../assets/images/studies/ppn/icons/shopify.svg";
import nike from "../../assets/images/studies/ppn/icons/nike.svg";
import farfetch from "../../assets/images/studies/ppn/icons/farfetch.svg";
import ikea from "../../assets/images/studies/ppn/icons/ikea.svg";
import aliexpress from "../../assets/images/studies/ppn/icons/aliexpress.svg";
import jumia from "../../assets/images/studies/ppn/icons/jumia.svg";

const PPN = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      window.innerWidth > 0 && window.innerWidth <= 640
        ? "0.2%"
        : window.innerWidth > 640 && window.innerWidth <= 1024
        ? "1%"
        : window.innerWidth > 1024 && window.innerWidth <= 1440
        ? "1%"
        : "3%",
      "-85%",
    ]
  );

  const targetRef2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });

  const x2 = useTransform(
    scrollYProgress2,
    [0, 1],
    [
      window.innerWidth > 0 && window.innerWidth <= 640
        ? "0.2%"
        : window.innerWidth > 640 && window.innerWidth <= 1024
        ? "2%"
        : window.innerWidth > 1024 && window.innerWidth <= 1440
        ? "1%"
        : "3%",
      "-85%",
    ]
  );

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 2xl:px-20 w-screen max-w-[1440px]">
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 2xl:gap-12 px-4 lg:px-6 2xl:px-8">
          <p className="font-instrument text-4xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem] text-center md:max-w-[75%] lg:max-w-[70%]">
            Empowering Merchants launch their online store faster with
            customizable templates and components using PPN Editor
          </p>
          <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 w-full">
            <div className="flex items-center justify-center w-full h-64 md:h-[32rem] lg:h-[44rem] 2xl:h-[53rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
              <div className="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/ppn.png')] h-full w-full rounded-xl"></div>
            </div>
            <div className="flex flex-col-reverse items-start lg:flex-row gap-4 justify-between w-full">
              <div className="flex items-center justify-start flex-wrap w-full gap-4 md:gap-2 lg:gap-12 2xl:gap-16">
                <div className="flex flex-col items-start gap-2 lg:gap-3">
                  <p className="font-instrument lg:text-lg">Client</p>
                  <p className="font-medium lg:text-lg">PPN</p>
                </div>
                <div className="flex flex-col items-start gap-2 lg:gap-3">
                  <p className="font-instrument lg:text-lg">Industry</p>
                  <div className="flex items-center gap-0.5 md:gap-1 rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 bg-[#2b2b2c]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7.32471V10.3283C2 12.2162 2 13.1602 2.58579 13.7466C3.17157 14.3332 4.11438 14.3332 6 14.3332H9.99998C11.8856 14.3332 12.8284 14.3332 13.4142 13.7466C14 13.1602 14 12.2162 14 10.3283V7.32471"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                      />
                      <path
                        d="M9.99998 11.3179C9.54391 11.7227 8.81785 11.9845 7.99998 11.9845C7.18211 11.9845 6.45606 11.7227 6 11.3179"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                        stroke-linecap="round"
                      />
                      <path
                        d="M11.8637 1.66867L4.0998 1.68805C2.94102 1.62836 2.64392 2.52177 2.64392 2.95849C2.64392 3.3491 2.59362 3.91853 1.88341 4.98877C1.1732 6.05901 1.22657 6.37695 1.62706 7.11784C1.95944 7.73277 2.80486 7.97297 3.24566 8.01337C4.6458 8.04524 5.32702 6.83451 5.32702 5.98353C6.02159 8.12171 7.99696 8.12171 8.8771 7.87717C9.75896 7.63224 10.5144 6.75544 10.6926 5.98353C10.7966 6.94284 11.112 7.50257 12.0441 7.88724C13.0096 8.28564 13.8398 7.67671 14.2564 7.28631C14.673 6.89597 14.9404 6.02938 14.1978 5.07691C13.6856 4.42005 13.4722 3.80124 13.4021 3.15989C13.3614 2.78827 13.3258 2.38895 13.0647 2.13483C12.6831 1.76347 12.1356 1.65079 11.8637 1.66867Z"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-xs lg:text-sm font-medium leading-tight">
                      E-Commerce
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 lg:gap-3">
                  <p className="font-instrument lg:text-lg">Scope of Work</p>
                  <div className="flex flex-wrap gap-2 lg:gap-x-3 2xl:gap-x-4 lg:gap-y-4 2xl:gap-y-5">
                    <div className="bg-[#2C2C2C] rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 flex items-center gap-0.5 md:gap-1">
                      <div className="rounded-full bg-[#FD5D00] size-1.5 lg:size-2"></div>
                      <p className="text-nowrap font-medium text-xs lg:text-sm leading-tight">
                        Product Design
                      </p>
                    </div>
                    <div className="bg-[#2C2C2C] rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 flex items-center gap-0.5 md:gap-1">
                      <div className="rounded-full bg-[#FD5D00] size-1.5 lg:size-2"></div>
                      <p className="text-nowrap font-medium text-xs lg:text-sm leading-tight">
                        UI/UX Design
                      </p>
                    </div>
                    <div className="bg-[#2C2C2C] rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 flex items-center gap-0.5 md:gap-1">
                      <div className="rounded-full bg-[#FD5D00] size-1.5 lg:size-2"></div>
                      <p className="text-nowrap font-medium text-xs lg:text-sm leading-tight">
                        Design Strategy
                      </p>
                    </div>
                    <div className="bg-[#2C2C2C] rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 flex items-center gap-0.5 md:gap-1">
                      <div className="rounded-full bg-[#FD5D00] size-1.5 lg:size-2"></div>
                      <p className="text-nowrap font-medium text-xs lg:text-sm leading-tight">
                        Competitive Research & Analysis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <HoverButton
                bg="bg-white"
                text="text-gray-700"
                width={"w-56"}
                height={"h-12"}
                oldContent={
                  <p onClick={() => goToSection("studies")}>
                    Website Coming Soon
                  </p>
                }
                newContent={
                  <p onClick={() => goToSection("studies")} className="m-0 p-0">
                    Website Coming Soon
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 w-screen gap-8 lg:gap-10 2xl:gap-12">
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] px-4 md:px-12 lg:px-16 2xl:px-20">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 pb-8 lg:pb-10 2xl:pb-12 border-b border-b-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Overview
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                The Vendor Editor project aimed to simplify e-commerce website
                creation for merchants by offering customizable templates and
                over 280 components. As part of the design team, my role focused
                on designing four unique, theme-based templates and creating a
                library of components that merchants could use to quickly build
                and personalize their websites. This project empowers merchants
                with an easy, drag-and-drop solution that provides professional,
                fully customizable websites.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-b border-b-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                The Challenge
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Many merchants face challenges building professional e-commerce
                websites that align with their brand aesthetics and functional
                needs, especially without technical expertise. The goal was to
                provide a versatile yet intuitive platform with pre-designed
                templates and components, allowing users to create a
                high-quality online presence without coding. The challenge was
                to design a system that balanced flexibility and ease of use
                while catering to different industry needs and design
                preferences.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-64 md:h-[32rem] lg:h-[44rem] 2xl:h-[53rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
            <div className="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/studies/ppn/landingPage.png')] h-full w-full rounded-xl"></div>
          </div>
          <div className="relative flex flex-col items-center text-left">
            <div className="relative flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12">
              <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 max-w-[90%] md:max-w-[80%] xl:max-w-[60%] text-left">
                <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                  Competitor Analysis
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  To guide the design, I conducted competitor analysis on
                  leading e-commerce platforms, including Shopify, Farfetch,
                  Nike, IKEA, AliExpress, and Jumia. This analysis identified
                  trends in user interface design, e-commerce functionality, and
                  customizability. These insights informed the structure,
                  styling, and flexibility of our templates and components,
                  ensuring they would meet diverse merchant needs. By
                  benchmarking these platforms, I shaped our templates to
                  include distinctive design styles and targeted functionality.
                </p>
              </div>
              <div className="relative bottom-0 left-0 w-full lg:max-w-[90%] 2xl:max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 2xl:gap-6">
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img
                      src={shopify}
                      alt="Shopify logo"
                      className="h-14 w-auto"
                    />
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img
                      src={nike}
                      alt="Nike logo"
                      className="h-8 w-auto max-w-full"
                    />
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img
                      src={farfetch}
                      alt="Farfetch logo"
                      className="h-6 w-auto max-w-full"
                    />
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img src={ikea} alt="IKEA logo" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img
                      src={aliexpress}
                      alt="Ali express logo"
                      className="h-10 w-auto max-w-full"
                    />
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img
                      src={jumia}
                      alt="Jumia logo"
                      className="h-18 w-auto max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full max-w-[90%] md:max-w-[80%] xl:max-w-[60%] border-b border-b-[#484848]"></div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 max-w-[90%] md:max-w-[80%] xl:max-w-[60%] text-left">
              <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 ">
                <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                  The Theme Design & Development
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Based on the insights from competitor analysis, I developed
                  four unique e-commerce themes, each crafted to suit specific
                  aesthetics:
                </p>
                <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                  <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                    <p className="font-semibold md:text-lg lg:text-xl">
                      Simple
                    </p>
                    <p className="lg:text-lg text-[#d9d9d9]">
                      A clean, minimalist design for merchants seeking a
                      straightforward, easy-to-navigate website.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                  <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                    <p className="font-semibold md:text-lg lg:text-xl">
                      Active
                    </p>
                    <p className="lg:text-lg text-[#d9d9d9]">
                      A sporty, dynamic theme ideal for brands in the fitness or
                      sportswear industry.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                  <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                    <p className="font-semibold md:text-lg lg:text-xl">Glow</p>
                    <p className="lg:text-lg text-[#d9d9d9]">
                      A vibrant, colorful design aimed at brands looking to make
                      a bold, eye-catching statement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                  <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c] ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                    <p className="font-semibold md:text-lg lg:text-xl">Diva</p>
                    <p className="lg:text-lg text-[#d9d9d9]">
                      A radiant and feminine template perfect for fashion and
                      beauty brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          ref={targetRef}
          className="relative md:h-[500vh] bg-transparent  px-4 md:px-12 lg:px-16 2xl:px-20"
        >
          <div className="fade-effect fade-left hidden md:flex"></div>
          <div className="fade-effect fade-right hidden md:flex"></div>
          <div className="flex flex-col w-screen items-center md:items-start md:sticky top-40 md:top-64 lg:top-32 2xl:top-80 overflow-hidden no-scrollbar">
            <motion.div
              style={{ x: window.innerWidth > 767 && x }}
              className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 pl-2"
            >
              <div className="flex items-center justify-center w-full h-72 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/ppn/clothing.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/mockup/fitness.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-72 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/ppn/shop.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-72 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/ppn/beauty.png')] h-full w-full rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full  px-4 md:px-12 lg:px-16 2xl:px-20">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-t border-t-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                280+ Customizable components
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                In addition to the themes, I designed over 280 components for
                the editor, covering essential elements like user interaction
                sections (sign-up, log-in, password recovery), visual and
                content sections (hero banners, product descriptions),
                e-commerce essentials (cart sections, product listings),
                navigation and structure (headers, footers, category sections),
                and customer engagement elements (contact forms, FAQ sections).
                These components allow for extensive customization, making the
                platform adaptable to various business needs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-screen gap-8 lg:gap-10 2xl:gap-12">
          <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 w-full max-w-[1440px] px-4 md:px-12 lg:px-16 2xl:px-20">
            <div className="flex items-center justify-center w-full h-64 md:h-[32rem] lg:h-[44rem] 2xl:h-[53rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
              <div className="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/studies/ppn/component.png')] h-full w-full rounded-xl"></div>
            </div>
          </div>
        </div>
        {/* <section
          ref={targetRef2}
          className="relative md:h-[500vh] bg-transparent  px-4 md:px-12 lg:px-16 2xl:px-20"
        >
          <div className="fade-effect fade-left hidden md:flex"></div>
          <div className="fade-effect fade-right hidden md:flex"></div>
          <div className="flex flex-col w-screen items-center md:items-start md:sticky top-40 md:top-64 lg:top-32 2xl:top-80 overflow-hidden no-scrollbar">
            <motion.div
              style={{ x: window.innerWidth > 767 && x2 }}
              className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 pl-2"
            >
              <div className="flex items-center justify-center w-full h-80 md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[52rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/ppn/homepage.png')] h-full w-full rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </section> */}
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full px-4 md:px-12 lg:px-16 2xl:px-20">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-t border-t-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Anticipated Impact and Metrics
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Upon launch, Vendor Editor is expected to deliver significant
                benefits to e-commerce merchants:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 lg:max-w-[85%] 2xl:max-w-[80%] text-left">
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                60%
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9]">
                  Faster Development Time
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Streamlined drag-and-drop functionality reduces website launch
                  time by more than half.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                280+
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9]">
                  Customizable Components
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Merchants can tailor every aspect of their website to fit
                  their brand, resulting in greater design flexibility.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                90%
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9]">
                  Usable Across All Skill Levels
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Designed for ease of use, ensuring that even non-technical
                  users can create professional websites.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5">
              <p className="lg:text-lg text-[#d9d9d9]">
                These metrics highlight Vendor Editor's potential to make
                e-commerce site-building more accessible, efficient, and
                customizable, empowering merchants to establish a strong digital
                presence with minimal effort.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full px-4 md:px-12 lg:px-16 2xl:px-20">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 py-8 lg:py-10 2xl:py-12 border-y border-y-[#484848]">
              <div className="flex w-full flex-col items-start gap-3 lg:gap-4 2xl:gap-5">
                <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                  Conclusion
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  The Vendor Editor project is set to revolutionize the
                  e-commerce website creation process by providing merchants
                  with professionally designed themes and an extensive library
                  of customizable components. Currently in the development
                  phase, the platform aims to simplify website building, making
                  it accessible to users of all skill levels while offering the
                  flexibility needed to create unique and functional online
                  stores. By leveraging thorough competitor analysis and a
                  strategic design process, Vendor Editor is poised to deliver a
                  powerful tool that enhances merchants' ability to connect with
                  customers and grow their businesses online.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 lg:gap-6 2xl:gap-8 lg:max-w-[90%] 2xl:max-w-[80%]">
                <p className="font-instrument text-2xl lg:text-3xl 2xl:text-4xl">
                  "Working with Temi on the Vendor Editor project has been
                  outstanding. Temi designed our template themes and over 280
                  components, delivering high-quality, customizable, and
                  intuitive designs that perfectly support our e-commerce
                  platform. Her dedication and attention to detail were
                  invaluable, and we're excited for the impact of this work."
                </p>
                <div className="flex flex-col items-center gap-2 lg:gap-3 2xl:gap-4">
                  <div className="flex size-14 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/images/emmanuel.jpeg')] rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="text-sm lg:text-base font-medium">
                      Emmanuel Uchewa
                    </p>
                    <p className="text-xs lg:text-sm">Project Manager, PPN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPN;
