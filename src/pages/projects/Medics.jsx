import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import HoverButton from "../../components/Button";

const Medics = () => {
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
            Streamlining Healthcare Operations & Enhancing Patient Care for
            Medics Partners.
          </p>
          <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 w-full">
            <div className="flex items-center justify-center w-full h-64 md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
              <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/medics.png')] h-full w-full rounded-xl"></div>
            </div>
            <div className="flex flex-col-reverse items-start lg:flex-row gap-4 justify-between w-full">
              <div className="flex items-center justify-start flex-wrap w-full gap-4 md:gap-2 lg:gap-12 2xl:gap-16">
                <div className="flex flex-col items-start gap-2 lg:gap-3">
                  <p className="font-instrument lg:text-lg">Client</p>
                  <p className="font-medium lg:text-lg">Medics Partners</p>
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
                        Product Management
                      </p>
                    </div>
                    <div className="bg-[#2C2C2C] rounded-md px-2 lg:px-2.5 2xl:px-3 py-1 lg:py-1.5 flex items-center gap-0.5 md:gap-1">
                      <div className="rounded-full bg-[#FD5D00] size-1.5 lg:size-2"></div>
                      <p className="text-nowrap font-medium text-xs lg:text-sm leading-tight">
                        Website Design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <HoverButton
                bg="bg-white"
                text="text-gray-700"
                link={"https://www.medicspartners.org"}
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
                Medics Partners, a healthcare solutions provider, aimed to
                streamline hospital operations and enhance patient care through
                a custom-built Electronic Medical Records (EMR) system and an
                engaging website. As the sole designer, I managed the end-to-end
                research, design, and development of these products, focusing on
                improving efficiency across various departments, ensuring
                compliance with healthcare standards, and delivering a seamless
                digital experience.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-b border-b-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                The Challenge
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Medics Partners aimed to address several key challenges:
              </p>
              <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#1C1C1C" />
                    <g clip-path="url(#clip0_116_92923)">
                      <path
                        d="M20 23.3333V20M20 16.6666H20.0083M28.3333 20C28.3333 24.6023 24.6023 28.3333 20 28.3333C15.3976 28.3333 11.6666 24.6023 11.6666 20C11.6666 15.3976 15.3976 11.6666 20 11.6666C24.6023 11.6666 28.3333 15.3976 28.3333 20Z"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_116_92923">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                  <p className="font-semibold md:text-lg lg:text-xl">
                    Fragmented Operations
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Departments like the front desk, patient coordinators,
                    practitioners, nurses, and finance were operating in silos,
                    leading to inefficiencies and communication breakdowns.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#1C1C1C" />
                    <g clip-path="url(#clip0_116_92923)">
                      <path
                        d="M20 23.3333V20M20 16.6666H20.0083M28.3333 20C28.3333 24.6023 24.6023 28.3333 20 28.3333C15.3976 28.3333 11.6666 24.6023 11.6666 20C11.6666 15.3976 15.3976 11.6666 20 11.6666C24.6023 11.6666 28.3333 15.3976 28.3333 20Z"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_116_92923">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                  <p className="font-semibold md:text-lg lg:text-xl">
                    Patient Care
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    The absence of an integrated system could hinder timely and
                    coordinated care.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#1C1C1C" />
                    <g clip-path="url(#clip0_116_92923)">
                      <path
                        d="M20 23.3333V20M20 16.6666H20.0083M28.3333 20C28.3333 24.6023 24.6023 28.3333 20 28.3333C15.3976 28.3333 11.6666 24.6023 11.6666 20C11.6666 15.3976 15.3976 11.6666 20 11.6666C24.6023 11.6666 28.3333 15.3976 28.3333 20Z"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_116_92923">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                  <p className="font-semibold md:text-lg lg:text-xl">
                    Regulatory Compliance
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Meeting healthcare regulations required a robust system
                    capable of managing complex documentation and workflows.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 lg:gap-3 2xl:gap-4">
                <div className="rounded-full flex items-center justify-center size-10 min-w-10 bg-[#1c1c1c]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#1C1C1C" />
                    <g clip-path="url(#clip0_116_92923)">
                      <path
                        d="M20 23.3333V20M20 16.6666H20.0083M28.3333 20C28.3333 24.6023 24.6023 28.3333 20 28.3333C15.3976 28.3333 11.6666 24.6023 11.6666 20C11.6666 15.3976 15.3976 11.6666 20 11.6666C24.6023 11.6666 28.3333 15.3976 28.3333 20Z"
                        stroke="#FD5D00"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_116_92923">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-3">
                  <p className="font-semibold md:text-lg lg:text-xl">
                    Digital Presence
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Medics Partners needed a strong online platform to
                    effectively communicate their services and engage with
                    potential clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-64 md:h-[32rem] lg:h-[42rem] 2xl:h-[53rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
            <div className="bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/studies/medics/medics-reception.jpeg')] h-full w-full rounded-xl"></div>
          </div>
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5 pb-8 lg:pb-10 2xl:pb-12 border-b border-b-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Research & Insights
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                I conducted thorough stakeholder interviews and workflow
                analysis to understand the specific needs of each department and
                the overall user journey. Key insights revealed;
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
                    Frontdesk & Patient Coordinators
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Required a streamlined process for patient check-ins,
                    appointment management, and follow-ups.
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
                    Healthcare Providers
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Needed instant access to accurate patient data to enhance
                    the quality of care.
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
                    Finance Team
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Required an integrated billing system to improve accuracy
                    and transparency.
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
                    Patients
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Desired a user-friendly platform to access their health
                    information, manage appointments, and communicate with
                    healthcare providers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                The EMR System
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                Leveraging these insights, I designed a comprehensive EMR system
                tailored to the unique needs of each department:
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
                    Tailored Interfaces
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Developed custom interfaces for each department, ensuring
                    ease of use and minimal training requirements.
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
                    Real-Time Access
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Enabled practitioners and nurses to access and update
                    patient records instantly, leading to more accurate and
                    timely care.
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
                    Integrated Workflows
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Automated scheduling, billing, and patient follow-up
                    processes, streamlining operations and reducing
                    administrative burdens.
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
                    Patient Portal
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Empowered patients with access to their health records,
                    appointment histories, and communication tools, fostering
                    greater engagement and satisfaction.
                  </p>
                </div>
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
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/dashboard.png')]  h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/appointments.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/patients.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/patientreport.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/takepayment.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/patientdashboard.png')] h-full w-full rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-t border-t-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Website Design
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                In addition to the EMR system, I designed and developed a
                website that effectively communicated Medics Partners' value
                proposition:
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
                    Professional Aesthetics
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    The website featured a clean, modern design that conveyed
                    trust and innovation in healthcare.
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
                    Intuitive Navigation
                  </p>
                  <p className="lg:text-lg text-[#d9d9d9]">
                    Focused on delivering a seamless user experience, making it
                    easy for visitors to find information and engage with
                    services.
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
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/homepage.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/bookAppointment.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/missionVision.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/findDoctor.png')] h-full w-full rounded-xl"></div>
              </div>
              <div className="flex items-center justify-center w-full h-64 md:h-[36rem] lg:h-[42rem] 2xl:h-[53rem] min-w-[90vw] md:min-w-[48rem] lg:min-w-[60rem] 2xl:min-w-[76rem] p-3 lg:p-4 2xl:p-6 bg-[#1c1c1c] rounded-2xl">
                <div className="bg-no-repeat bg-cover bg-[url('/src/assets/images/studies/medics/dialysis.png')] h-full w-full rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-t border-t-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Success Metrics
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                The successful implementation of the EMR system and website led
                to measurable improvements
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 lg:max-w-[85%] 2xl:max-w-[80%] text-left">
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                40%
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9]">
                  Reduction in patient wait times.
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Due to streamlined check-ins and appointment scheduling.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                35%
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9]">
                  Decrease in administrative workload.
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Allowing staff to focus more on patient care.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 md:p-3 lg:p-6 bg-[#1c1c1c] rounded-xl gap-3 h-full w-full">
              <p className="text-4xl lg:text-5xl 2xl:text-6xl font-instrument">
                25%
              </p>
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="lg:text-lg text-[#d9d9d9]">
                  Increase in patient satisfaction.
                </p>
                <p className="lg:text-lg text-[#d9d9d9]">
                  Driven by better access to health records.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:gap-10 2xl:gap-12 max-w-[1440px] w-full">
          <div className="flex flex-col items-start text-left max-w-[90%] md:max-w-[80%] xl:max-w-[60%]">
            <div className="flex w-full flex-col gap-3 lg:gap-4 2xl:gap-5 py-8 lg:py-10 2xl:py-12 border-t border-t-[#484848]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl font-instrument">
                Conclusion
              </p>
              <p className="lg:text-lg text-[#d9d9d9]">
                The Medics Partners project was a holistic endeavor to modernize
                healthcare operations and establish a strong digital presence.
                By leading the design and development of both the EMR system and
                the website, I contributed to significant improvements in
                efficiency, patient care, and market positioning. The success
                metrics underscore the impact of thoughtful, user-centered
                design in transforming healthcare experiences and driving
                business growth.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4 lg:gap-6 2xl:gap-8 lg:max-w-[55%] pb-8 lg:p-16 border-b border-b-[#484848]">
          <p className="font-instrument text-2xl lg:text-3xl 2xl:text-4xl">
            “Temi helped us launch our hospital's EMR system. She's able to
            understand the briefs and the entire workflow. We're able to provide
            quality health care to our patients with a simple and intuitive user
            experience.”
          </p>
          <div className="flex flex-col items-center gap-2 lg:gap-3 2xl:gap-4">
            <div className="flex size-14 bg-center bg-no-repeat bg-cover bg-[url('/src/assets/images/busola.jpeg')] rounded-full"></div>
            <div className="flex flex-col">
              <p className="text-sm lg:text-base font-medium">Busola Ayelowo</p>
              <p className="text-xs lg:text-sm">CMD, Medics Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medics;
