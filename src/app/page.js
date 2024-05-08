import Chooseus from "@/components/chooseus/Chooseus";
import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/topbar/Topbar";
// import AboutUs
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar/>
      {/* <AboutUs/> */}
      <Topbar/>
      <Chooseus/>
    </div>
  );
}
