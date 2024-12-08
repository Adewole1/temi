import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import HoverButton from "../../components/Button";
import centre from "../../assets/images/studies/tracehut/icons/propertycentre.png";
import pro from "../../assets/images/studies/tracehut/icons/propertypro.png";
import privatePro from "../../assets/images/studies/tracehut/icons/privateproperty.png";

const Tracehut = () => {
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
        ? "4%"
        : window.innerWidth > 1024 && window.innerWidth <= 1440
        ? "1%"
        : "3%",
      "-45%",
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
      "-75%",
    ]
  );

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 2xl:px-20 w-screen max-w-[1440px]">
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 2xl:gap-12 px-4 lg:px-6 2xl:px-8">
          <p className="font-instrument text-4xl lg:text-6xl 2xl:text-7xl 2xl:leading-[5.625rem] text-center md:max-w-[75%] lg:max-w-[70%]">
            Empowering Renters with Verified Apartment Insights for smarter
            choices with Tracehut
          </p>
          <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 w-full">
            <div className="flex items-center justify-center w-full h-72 md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
              <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/tracehut.png')] h-full w-full rounded-xl"></div>
            </div>
            <div className="flex flex-col-reverse items-start lg:flex-row gap-4 justify-between w-full">
              <div className="flex items-center justify-start flex-wrap w-full gap-4 md:gap-2 lg:gap-12 2xl:gap-16">
                <div className="flex flex-col items-start gap-2 lg:gap-3">
                  <p className="font-instrument lg:text-lg">Client</p>
                  <p className="font-medium lg:text-lg">Tracehut</p>
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
                        d="M13.9999 4.98991C13.9999 4.25823 13.9999 3.89239 13.8159 3.58365C13.6318 3.27491 13.2927 3.07198 12.6145 2.66612L11.7517 2.14972C10.6871 1.5126 10.1548 1.19405 9.74405 1.39139C9.33325 1.58875 9.33325 2.16304 9.33325 3.31162V14.6666H13.9999V4.98991Z"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.6666 14.6667H1.33325"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.33341 6H6.66675"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.33341 10H6.66675"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 4.98991C2 4.25823 2 3.89239 2.18406 3.58365C2.36813 3.27491 2.70721 3.07198 3.38538 2.66612L4.24825 2.14972C5.31282 1.5126 5.84511 1.19405 6.25589 1.39139C6.66667 1.58875 6.66667 2.16304 6.66667 3.31162V14.6666H2V4.98991Z"
                        stroke="#FD5D00"
                        stroke-width="1.25"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.33411 5.33331H4.32812M4.33411 7.99998H4.32812M4.33411 10.6666H4.32812"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.6674 5.33331H11.6614M11.6674 7.99998H11.6614M11.6674 10.6666H11.6614"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-xs lg:text-sm font-medium leading-tight">
                      Real Estate
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
                        User Research
                      </p>
                    </div>
                    <div className="bg-[#2C2C2C] rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 flex items-center gap-0.5 md:gap-1">
                      <div className="rounded-full bg-[#FD5D00] size-1.5 lg:size-2"></div>
                      <p className="text-nowrap font-medium text-xs lg:text-sm leading-tight">
                        Usability Testing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <HoverButton
                bg="bg-white"
                text="text-gray-700"
                link={"https://tracehut.com/"}
                target="_blank"
                width={"w-48"}
                height={"h-12"}
                oldContent={
                  <>
                    View Website{" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334"
                        stroke="#344054"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </>
                }
                newContent={
                  <>
                    View Website{" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334"
                        stroke="#344054"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 2xl:px-20 w-screen gap-8 lg:gap-10 2xl:gap-12">
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px]">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 pb-8 lg:pb-10 2xl:pb-12 border-b border-b-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Overview
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Tracehut is a mobile app designed for apartment renters across
                Nigeria to make informed decisions. The app addresses the common
                challenges of hidden apartment issues such as poor
                infrastructure, accumulated bills, or bad water by providing a
                database of verified tenant reviews. With Tracehut, renters can
                search, share, and explore verified feedback from previous
                tenants to avoid costly mistakes.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-b border-b-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                The Challenge
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Renting an apartment in Nigeria often feels like a gamble, with
                renters discovering hidden issues after moving in, such as{" "}
                <span className="font-bold">
                  unreliable water supply, accumulated utility bills, poor
                  construction quality and poor management.
                </span>
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                These problems lead to financial burdens and dissatisfaction.
                Renters currently lack a reliable platform to access verified
                information, leaving many at the mercy of deceptive property
                listings and unscrupulous agents. Tracehut bridges this gap by
                enabling renters to learn from real tenant experiences before
                making decisions.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-72 md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
            <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/tracehut/building.jpg')] h-full w-full rounded-xl"></div>
          </div>
          <div className="relative flex flex-col items-center text-left">
            <div className="relative flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12">
              <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 max-w-[90%] md:max-w-[80%] xl:max-w-[60%] text-left">
                <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                  Competitor Analysis
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Existing platforms like{" "}
                  <span className="font-bold">Nigeria Property Centre</span>,{" "}
                  <span className="font-bold">PropertyPro</span>, and{" "}
                  <span className="font-bold">Private Property</span> focus on
                  apartment listings but lack renter-centric insights. These
                  platforms provide no transparency regarding hidden issues, no
                  verified feedback system, and minimal tenant advocacy.
                </p>
                <p className="lg:text-lg xl:text-xl font-semibold">
                  Tracehut's Differentiator
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  A renter-driven platform featuring verified reviews and
                  insights to ensure renters avoid unpleasant surprises.
                </p>
              </div>
              <div className="relative bottom-0 left-0 w-full lg:max-w-[90%] 2xl:max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 2xl:gap-6">
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img
                      src={centre}
                      alt="Shopify logo"
                      className="h-10 w-auto"
                    />
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full">
                    <img
                      src={pro}
                      alt="Nike logo"
                      className="h-48 w-auto max-w-full"
                    />
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-4 lg:p-6 flex items-center justify-center h-[102px]">
                  <div className="h-full flex items-center justify-center w-full grayscale">
                    <img
                      src={privatePro}
                      alt="Farfetch logo"
                      className="h-10 w-auto max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full max-w-[90%] md:max-w-[80%] xl:max-w-[60%] border-b border-b-[#484848]"></div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 max-w-[90%] md:max-w-[80%] xl:max-w-[60%] text-left">
              <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 ">
                <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                  Research & Validation
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  We validated Tracehut's concept through a survey of 115
                  renters, presenting them with <i>“Ade's Dilemma”</i>, a
                  relatable story highlighting the frustrations of hidden
                  apartment issues. Key Insights from Respondents:
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
                      68.7% had faced similar challenges.
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
                      73.9% knew someone who had experienced these issues.
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
                      93% were willing to share apartment issues anonymously.
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
                    <p className="font-semibold md:text-lg lg:text-xl">
                      97.4% would browse an online platform to check for hidden
                      apartment problems before renting.
                    </p>
                  </div>
                </div>
                <p className="lg:text-lg text-[#d9d9d9]">
                  These insights confirmed the need for Tracehut and shaped its
                  key features.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section
          ref={targetRef}
          className="relative md:h-[500vh] bg-transparent"
        >
          <div className="fade-effect fade-left hidden md:flex"></div>
          <div className="fade-effect fade-right hidden md:flex"></div>
          <div className="flex flex-col w-screen items-center md:items-start md:sticky top-40 md:top-64 lg:top-32 2xl:top-80 overflow-hidden no-scrollbar">
            <motion.div
              style={{ x: window.innerWidth > 767 && x }}
              className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 pl-2"
            >
              <div className="flex items-center justify-center w-full h-72 md:h-[32rem] lg:h-[40rem] 2xl:h-[50rem] min-w-[90vw] md:min-w-[43rem] lg:min-w-[54rem] 2xl:min-w-[70rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/tracehut/section2.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 w-full h-[60rem] md:h-[32rem] lg:h-[40rem] 2xl:h-[50rem] min-w-[90vw] md:min-w-[52rem] lg:min-w-[70rem] 2xl:min-w-[80rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-contain bg-center bg-[url('/src/assets/images/studies/tracehut/feedback.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-center bg-[url('/src/assets/images/studies/tracehut/5.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-center bg-[url('/src/assets/images/studies/tracehut/6.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-center bg-[url('/src/assets/images/studies/tracehut/conclusion.png')] h-full w-full rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-t border-t-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                The Solution
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Tracehut is a user-friendly mobile app designed to help renters
                in Lagos make informed decisions by providing access to verified
                apartment reviews and fostering a collaborative rental
                community.
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
                    Verified Apartment Reviews
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Renters can explore detailed, verified reviews from previous
                    tenants, covering key aspects such as infrastructure
                    quality, water supply, management reliability, power
                    stability, and overall living experience.
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
                    Location-Based Search:
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Renters can easily search for apartments by entering
                    specific addresses or browsing by popular locations,
                    enabling informed decision-making.
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
                    "My Circle" Feature
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    A social touch that allows users to connect with friends,
                    follow their reviews, and share apartment recommendations
                    within their trusted network
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
                    Gamification & Rewards
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Credit system for submitting reviews, verifying apartments,
                    and referrals. Leaderboards to encourage engagement within
                    the community and reward top contributors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          ref={targetRef2}
          className="relative md:h-[500vh] bg-transparent"
        >
          <div className="fade-effect fade-left hidden md:flex"></div>
          <div className="fade-effect fade-right hidden md:flex"></div>
          <div className="flex flex-col w-screen items-center md:items-start md:sticky top-40 md:top-64 lg:top-32 2xl:top-80 overflow-hidden no-scrollbar">
            <motion.div
              style={{ x: window.innerWidth > 767 && x2 }}
              className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 pl-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 2xl:gap-6 w-full h-[140rem] md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-contain md:bg-contain bg-[url('/src/assets/images/studies/tracehut/circeReviews.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat  bg-contain md:bg-contain bg-[url('/src/assets/images/studies/tracehut/comments.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat  bg-contain md:bg-contain bg-[url('/src/assets/images/studies/tracehut/apartmentPhotos.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 2xl:gap-6 w-full h-[140rem] md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/search.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/notification.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/account.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 2xl:gap-6 w-full h-[140rem] md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/referrals.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/leaderboard.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/howReferals.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 2xl:gap-6 w-full h-[140rem] md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/topup.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/balance.png')] h-full w-full rounded-xl"></div>
                <div className="bg-no-repeat bg-contain bg-[url('/src/assets/images/studies/tracehut/successfulo.png')] h-full w-full rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full px-4 md:px-12 lg:px-16 2xl:px-20">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-t border-t-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Launch & Impact
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Tracehut successfully launched on the Apple App Store and Google
                Play Store, receiving positive feedback from early adopters.
                During an internal alpha test with 15 users, the app’s ease of
                use and potential impact were praised, paving the way for its
                public release.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 lg:max-w-[85%] 2xl:max-w-[80%] text-left">
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                50K+
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9] font-medium">
                  Verified Reviews with the first year of launch
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Empowering renters with reliable information.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                25%
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9] font-medium">
                  User retention rate
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Gamification, rewards, and social features are expected to
                  increase enagagement.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                10K+
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9] font-medium">
                  Active Monthly Users
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Estimated across Nigeria with the first 6 months.
                </p>
              </div>
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
                  Tracehut is set to transform apartment hunting in Nigeria by
                  introducing transparency, trust, and community-driven insights
                  to the rental process. The successful launch on both Apple App
                  Store and Google Play Store reflects its readiness to address
                  renters' challenges and redefine how Nigerians find their
                  homes.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 lg:gap-6 2xl:gap-8 lg:max-w-[90%] 2xl:max-w-[80%]">
                <p className="font-instrument text-2xl lg:text-3xl 2xl:text-4xl">
                  "Temi’s contribution to Tracehut app was invaluable. The
                  positive feedback from early users is a testament to Temi’s
                  skill in transforming complex requirements into seamless,
                  engaging designs.”
                </p>
                <div className="flex flex-col items-center gap-2 lg:gap-3 2xl:gap-4">
                  <div className="flex size-14 bg-center grayscale bg-no-repeat bg-cover bg-[url('/src/assets/images/joshua.jpeg')] rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="text-sm lg:text-base font-medium">
                      Joshua Dosubi
                    </p>
                    <p className="text-xs lg:text-sm">CEO, Tracehut</p>
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

export default Tracehut;
