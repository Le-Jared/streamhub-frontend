import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Footer = () => {
  return (
    <div className="h-[7.5vh] bg-black flex justify-center items-center">
      <p className="text-white">© 2024 StreamHub</p>
    </div>
  );
};

const Root = () => {
  return (
    <div className="bg-[#08081d]">
      <Navbar />
      <div className="min-h-[80vh] mx-10 my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
