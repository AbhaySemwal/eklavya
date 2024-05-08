import Chooseus from "@/components/chooseus/Chooseus";
import Features from "@/components/features/Features";
import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/topbar/Topbar";
import Vision from "@/components/vision/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar/>
      <Topbar/>
      <Chooseus/>
      <Vision/>
      <Features/>
    </div>
  );
}
