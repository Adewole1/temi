import HoverButton from "./Button";
import goToSection from "../../utils/navigate";

const Header = () => {
  return (
    <div className="sticky top-4 md:top-6 lg:top-8 2xl:top-12 z-50 px-4 md:px-8 lg:px-0 mt-6 lg:mt-10 xl:mt-[3.25rem] w-screen flex items-center justify-center max-w-[1437.5px]">
      <div className="w-full lg:w-[62.25rem] px-4 2xl:px-8 py-3 lg:py-5 2xl:py-7 flex items-center justify-between backdrop-blur-2xl bg-[#484848]/20 rounded-xl">
        {window.location.pathname === "/" ? (
          <>
            <p className="uppercase !leading-normal text-lg lg:text-xl 2xl:text-2xl font-instrument">
              Temitope Famuyiwa
            </p>
            <div className="flex items-center font-instrument">
              <HoverButton
                bg="bg-transparent hidden md:flex"
                text="text-white"
                width={"w-14"}
                // link={"/#"}
                oldContent={<p onClick={() => goToSection("home")}>Home</p>}
                newContent={
                  <p
                    onClick={() => goToSection("home")}
                    className="m-0 p-0 text-white font-medium hover:cursor-pointer"
                  >
                    Home
                  </p>
                }
              />
              <div className="h-6 w-0.5 bg-[#484848] mx-2 md:mx-3 lg:mx-4 hidden md:flex"></div>
              <HoverButton
                bg="bg-transparent hidden md:flex"
                text="text-white"
                width={"w-28"}
                // link={"/#studies"}
                oldContent={
                  <p onClick={() => goToSection("studies")}>
                    Case Studies (04)
                  </p>
                }
                newContent={
                  <p
                    onClick={() => goToSection("studies")}
                    className="m-0 p-0 text-white font-medium hover:cursor-pointer"
                  >
                    Case Studies (04)
                  </p>
                }
              />
              <div className="h-6 w-0.5 bg-[#484848] mx-2 md:mx-3 lg:mx-4 hidden md:flex"></div>
              <HoverButton
                bg="bg-transparent hidden md:flex"
                text="text-white"
                width={"w-14"}
                // link={"/#about"}
                oldContent={<p onClick={() => goToSection("about")}>About</p>}
                newContent={
                  <p
                    onClick={() => goToSection("about")}
                    className="m-0 p-0 text-white font-medium hover:cursor-pointer"
                  >
                    About
                  </p>
                }
              />
              {/* <div className="h-6 w-0.5 bg-[#484848] mx-2 md:mx-3 lg:mx-4 hidden md:flex"></div>
                <HoverButton
                  bg="bg-transparent"
                  text="text-white"
                  width={"w-14"}
                  link={
                    "https://docs.google.com/document/d/1eliFRg4RkfbkflMzKfVFju9UIq0uxs6QvEiEHQnVMGg/edit?usp=sharing"
                  }
                  target={"_blank"}
                  oldContent={<p>Resume</p>}
                  newContent={
                    <p className="m-0 p-0 text-white font-medium hover:cursor-pointer">
                      Resume
                    </p>
                  }
                /> */}
              <div className="h-6 w-0.5 bg-[#484848] mx-2 md:mx-3 lg:mx-4"></div>
              {/* <HoverButton
                  bg="bg-transparent"
                  text="text-white"
                  width={"w-14"}
                  // link={"#contact"}
                  oldContent={
                    <p onClick={() => goToSection("contact")}>Contact</p>
                  }
                  newContent={
                    <p
                      onClick={() => goToSection("contact")}
                      className="m-0 p-0 text-white font-medium hover:cursor-pointer"
                    >
                      Contact
                    </p>
                  }
                /> */}
            </div>
          </>
        ) : (
          <>
            <HoverButton
              bg={"bg-transparent"}
              text={"text-white font-instrument fill-white"}
              width={"w-16"}
              link={"/"}
              oldContent={
                <div className="flex items-center flex-nowrap gap-0.5">
                  <div className="size-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      viewBox="0 0 24 24"
                      color="rgb(255, 255, 255)"
                      className="w-full h-full fill-white select-none flex-shrink-0"
                    >
                      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                    </svg>
                  </div>
                  <p className="m-0 p-0 text-sm mt-[1px]">Go Back</p>
                </div>
              }
              newContent={
                <div className="flex items-center text-[#FD5D00] fill-[#FD5D00] flex-nowrap gap-0.5">
                  <div className="size-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      viewBox="0 0 24 24"
                      color="rgb(255, 255, 255)"
                      className="w-full h-full inline-block select-none flex-shrink-0"
                    >
                      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                    </svg>
                  </div>
                  <p className="m-0 p-0 text-sm mt-[1px]">Go Back</p>
                </div>
              }
            />
            <div className="flex items-center font-instrument">
              <HoverButton
                bg="bg-transparent"
                text="text-white"
                width={"w-16"}
                link={
                  "https://docs.google.com/document/d/1eliFRg4RkfbkflMzKfVFju9UIq0uxs6QvEiEHQnVMGg/edit?usp=sharing"
                }
                target={"_blank"}
                oldContent={<p>Resume</p>}
                newContent={
                  <p className="m-0 p-0 text-[#FD5D00] font-medium hover:cursor-pointer">
                    Resume
                  </p>
                }
              />
              <div className="h-6 w-0.5 bg-[#484848] mx-2 md:mx-3 lg:mx-4 hidden md:flex"></div>
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
                    <p className="m-0 p-0 text-sm font-inter">Work with me</p>
                  </div>
                }
                newContent={
                  <div
                    onClick={() => goToSection("contact")}
                    className="flex items-center flex-nowrap gap-0.5"
                  >
                    <div className="bg-cover size-9 bg-no-repeat bg-[url('/src/assets/images/temi.jpeg')] rounded-[4px]"></div>
                    <p className="m-0 p-0 text-sm font-inter">
                      + you = let's talk
                    </p>
                  </div>
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
