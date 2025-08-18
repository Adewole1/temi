import HeroSection from "./components/HeroSection";
import Divider from "../../components/reusable/Divider";
import Studies from "./components/Studies";
import AboutSection from "./components/about";
import Process from "./components/Process";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center w-screen text-white overflow-x-hidden">
      <HeroSection />
      <Divider />
      <Studies />
      <Divider />
      <AboutSection />
      <Divider />
      <Process />
      <Divider />
    </div>
  );
};

export default Homepage;
