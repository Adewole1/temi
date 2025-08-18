import About from "./components/About";
import Reviews from "./components/Reviews";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center py-12 md:py-16 lg:py-20 2xl:py-24 gap-4 md:gap-6 lg:gap-8 xl:gap-12 min-[90rem]:gap-16 w-screen max-w-[90rem] px-4 md:px-12 lg:px-16 xl:px-24 min-[90rem]:px-[7.5rem] relative"
    >
      <div className="absolute top-70 -left-10 w-96 h-64 bg-fuchsia-600/20 rounded-full blur-[122px]" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-64 bg-fuchsia-600/20 rounded-full blur-[122px]" />
      <About />
      <Reviews />
    </div>
  );
};

export default AboutSection;
