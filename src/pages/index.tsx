import Image from "next/image";
import { useState } from "react";
import NavBar from "../components/NavBar";
export default function Home() {
  const [isOpen , setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <main
      className="relative"
    >

    <button
    onClick={toggle}
    className="rounded-full z-50 w-12 h-12 bg-white/20 backdrop-blur-sm border-[2px] border-white/20 absolute flex justify-center items-center top-10 right-10"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>

  </button>
  {
  isOpen && (
    <NavBar  />
  )
}
      <section className="min-h-screen  bg-black py-20">
        <div className="flex flex-col gap-4 items-center">
          <h1
            className="text-white text-6xl font-semibold">
            iPad Pro 2023
          </h1>
          <p className="gradient-text text-4xl font-medium text-transparent animate-gradient">
            Supercharged by
          </p>
          <div className="w-24 h-24 relative">
            <Image
              src="/m2-logo.png"
              alt="m2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <video
          className="-mt-28 w-1/2 mx-auto"
          autoPlay muted src="./bg-video.mp4"></video>
        <div>
          <p className="text-white text-xl font-medium text-center w-[90%] max-w-xl mx-auto -mt-28">
            Astonishing performance. Incredibly advanced displays. Superfast
            wireless connectivity. Next-level Apple Pencil capabilities.
            Powerful new features in iPadOS 16. The ultimate iPad experience.
          </p>
        </div>
      </section>
    </main>
  );
}
