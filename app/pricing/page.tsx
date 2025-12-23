"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Check } from "lucide-react";
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

gsap.registerPlugin(ScrollTrigger);

const miFuente = localFont({
  src: [
    { path: "../fonts/HelveticaNowDisplay-Regular.ttf", weight: "500" },
    { path: "../fonts/ppneuebit-bold.otf", weight: "700" },
  ],
});

export default function Pricing() {
  return (
    <>
      <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden bg-black">
        {/* Fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-green-950/40" />

        {/* Contenido */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono tracking-wide text-white">
            Apix Trade Pricing
          </h2>

          <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare,
          </p>

          <div className="mt-10 flex justify-center">
            <button className="group flex items-center gap-3 bg-[white] px-[5px] rounded-md font-robotoMono text-black text-lg mx-auto h-[60px] mt-[55px] w-[178px] pl-[10px] cursor-pointer">
              <div className="text-lg text-black overflow-hidden h-[28px] flex flex-col justify-start w-[100%]">
                <span
                  className={`${robotoMono.className} block transition-transform duration-300 ease-in-out group-hover:-translate-y-full w-[100%]`}
                >
                  Reproducir
                </span>
                <span
                  className={`${robotoMono.className} block transition-transform duration-300 ease-in-out group-hover:-translate-y-full w-[100%]`}
                >
                  Get In touch
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
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black py-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
          {/* LEFT CARD */}
          <div className="relative rounded-2xl border border-white/10 bg-black p-8 text-white shadow-lg">
            <span className="absolute right-6 top-6 text-sm text-emerald-400">
              40% Discount
            </span>

            <h3 className="text-xl font-semibold tracking-wider">
              APIX CYGNUS
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-4xl font-bold">$</span>
              <div className="h-14 w-24 rounded bg-white/10" />
            </div>

            <ul className="mt-10 space-y-4 rounded-xl bg-white/5 p-6">
              {[
                "Exclusive Custom License",
                "Community Support",
                "Future Updates",
                "5% to 30%",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white/5 py-4 text-sm font-medium transition hover:bg-white/10">
              Get Now →
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="relative rounded-2xl bg-white p-8 text-black shadow-xl">
            <span className="absolute right-6 top-6 text-sm text-emerald-500">
              50% Discount
            </span>

            <h3 className="text-xl font-semibold tracking-wider">
              APIX EVOLVEX
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Lorem ipsum dolor sit amet
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-4xl font-bold">$</span>
              <div className="h-14 w-24 rounded bg-black/10" />
            </div>

            <ul className="mt-10 space-y-4 rounded-xl bg-gray-100 p-6">
              {[
                "Integration of AI and quantum math calculations",
                "Exclusive trading rights",
                "Free VPS integration",
                "Future upgrades",
                "15% to 50%",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-400 py-4 text-sm font-semibold text-black transition hover:bg-emerald-300">
              Get Now →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
