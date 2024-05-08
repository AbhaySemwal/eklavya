import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/topbar/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar/>
      <Topbar/>
    </div>
  );
}
