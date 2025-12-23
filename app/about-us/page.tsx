"use client";
import { useRef } from "react";
import Image from "next/image";
import flecha from "@/public/flecha.svg";
import localFont from "next/font/local";

const robotoMono = localFont({
  src: [
    {
      path: "/fonts/RobotoMono-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <>
      <section className="relative w-full h-screen">
        <video
          ref={videoRef}
          src="/swiss.mp4"
          loop
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <button
        onClick={handlePlay}
        className="group flex items-center gap-3 bg-[white] px-[5px] rounded-md font-robotoMono text-black text-lg mx-auto h-[60px] mt-[55px] w-[178px] pl-[10px] cursor-pointer"
      >
        <div className="text-lg text-black overflow-hidden h-[28px] flex flex-col justify-start w-[100%]">
          <span
            className={`${robotoMono.className} block transition-transform duration-300 ease-in-out group-hover:-translate-y-full w-[100%]`}
          >
            Reproducir
          </span>
          <span
            className={`${robotoMono.className} block transition-transform duration-300 ease-in-out group-hover:-translate-y-full w-[100%]`}
          >
            Reproducir
          </span>
        </div>

        <span className="bg-black text-[#3affa3] rounded-md flex items-center justify-center w-[70px] h-[50px] my-[10px]">
          <div className="relative w-6 h-6 flex flex-col transition-transform overflow-hidden">
            <Image
              src={flecha}
              alt="Arrow"
              fill
              className="object-contain -translate-x-9 group-hover:translate-x-0 duration-300 ease-in-out"
            />
            <Image
              src={flecha}
              alt="Arrow"
              fill
              className="object-contain group-hover:translate-x-9 duration-300 ease-in-out"
            />
          </div>
        </span>
      </button>
    </>
  );
}
