import NavHeader from "@/components/nav-header"
import Hero from "../hero/hero";
import Typing from "../typing/Typing";

function HomeDemo() {
  return (
    <header className="justify-center items-center p-10 select-none bg ">
    <NavHeader />
    <Hero />
      {/* texto */}
      <div className="flex items-center flex-col justify-center text-center">
        <h1
          className="text-2xl bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
        >
          <Typing />
        </h1>
      </div>
    </header>
  );
}

export { HomeDemo }