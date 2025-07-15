import { Outlet } from "react-router";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";

const Applayout = () => {
  return (
    <div id="home" className="flex flex-col w-screen relative items-center">
      <Header />
      <div className="relative w-screen flex flex-col items-center">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Applayout;
