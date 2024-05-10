import Chooseus from "@/components/chooseus/Chooseus";
import Features from "@/components/features/Features";
import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/topbar/Topbar";
import Solution from "@/components/solution/Solution";
import Impl from "@/components/impl/Impl";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar/>
      <Topbar/>
      <Chooseus/>
      <Solution/>
      <Features/>
      <Impl/>
    </div>
  );
}
