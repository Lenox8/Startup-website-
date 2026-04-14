import DemoOne from "@/components/backgroundS/demo2";
import { BorderBeamDemo } from "@/components/BorderBeam/BorderBeam";
import Footer from "@/components/footer/Footer";
import Mission from "@/components/mission/Mission";
import Nav from "@/components/nav/nav";
import Stacks from "@/components/TrustedBy/Stacks";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen space-y-0">
      {/* background */}
      <section className="w-full relative min-h-screen">
        <div className="absolute inset-0 items-center justify-center z-0">
          <DemoOne />
        </div>
        {/* camada frontal */}
        <div className="relative z-10 ">
          <Nav />
        </div>
        {/* camada hero sec */}
        <div className="relative z-10">
          <BorderBeamDemo />
        </div>
        {/* our stacks */}
        <div className="relative z-10 ">
          <Stacks />
        </div>
        {/* missao */}
        <div className="relative z-10">
          <Mission />
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </section>
    </main>
  );
}
