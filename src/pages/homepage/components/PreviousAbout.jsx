const PreviousAbout = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center bg-gradient-to-tr from-[#422f7d] to-black w-full"
    >
      <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 px-4 md:px-12 lg:px-16 xl:px-24 min-[90rem]:px-[7.5rem] gap-8 lg:gap-12 2xl:gap-16 overflow-x-clip w-screen max-w-[1440px]">
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
                  experience creating user-centered and business-driven digital
                  products. With a first-class degree in industrial chemistry
                  and over seven years as a quality assurance technologist, I
                  bring a unique analytical edge to solving design challenges.
                </p>
                <p>
                  I've crafted impactful experiences for brands like Medics
                  Partners, Tracehut, and Tuboh, delivering innovative solutions
                  across fintech, health tech, e-commerce, gaming, and more.
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

export default PreviousAbout;
