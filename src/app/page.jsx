import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ChooseBank from "./components/ChooseBank";
import PhoneMockups from "./asset/images/image-mockups.png";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between lg:overflow-hidden relative">
      <Navbar />
      <div>
        <Image
          src={PhoneMockups}
          className="absolute z-10 -top-10 right-5 md:-top-20 w-[90%] md:w-[80%] md:flex md:flex-row md:right-20 lg:top-0 lg:right-0 lg:w-[100%]  lg:transform lg:translate-x-[110px] lg:translate-y-1 lg:scale-100 lg:z-0 xl:translate-x-40 xl:scale-50 xl:z-0 "
          alt="phone"
        />
      </div>
      <Hero />
      <ChooseBank />
    </main>
  );
}
