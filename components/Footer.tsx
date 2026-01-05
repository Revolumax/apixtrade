"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Footer() {
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const router = useRouter();

  const routes = ["/", "/about-us", "/trade", "/pricing"];
  const links = ["HOME", "AI", "TRADE", "PRICING"];

  /* INIT CIRCLES */
  useEffect(() => {
    circlesRef.current.forEach((circle) => {
      gsap.set(circle, { width: 0, height: 0 });
    });
  }, []);

  const handleHover = (index: number, enter: boolean) => {
    const circle = circlesRef.current[index];
    const letter = lettersRef.current[index];
    if (!circle || !letter) return;

    gsap.to(circle, {
      width: enter ? 56 : 0,
      height: enter ? 56 : 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(letter, {
      rotate: enter ? 10 : 0,
      color: enter ? "#000" : "#ffffff",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <footer className="bg-black text-white relative px-6 sm:px-10 py-20">
      <div className="
         mx-auto
        flex flex-col lg:flex-row
        justify-between gap-16
      ">
        {/* ================= LEFT ================= */}
        <div className="max-w-xl space-y-8">
          <img
            src="/logoapixtrade.png"
            alt="Logo"
            className="w-36 sm:w-40"
          />

          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Our mission is to offer investors a competitive advantage in the
            market through intelligent information and advanced AI-powered
            analysis, complemented by the benefits of our strategic alliance
            with top brokers to optimize their commissions and ensure the legal
            security of their transactions.
          </p>

          {/* CÍRCULOS APIX (IGUAL AL HEADER) */}
          <div className="flex gap-4 pt-4">
            {["A", "P", "I", "X"].map((letter, index) => (
              <div
                key={letter}
                role="button"
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
                onClick={() => router.push(routes[index])}
                className="
                  relative w-14 h-14 sm:w-16 sm:h-16
                  border border-white rounded-full
                  flex items-center justify-center
                  cursor-pointer overflow-hidden
                "
              >
                {/* círculo animado */}
                <div
                  ref={(el) => {
                    if (el) circlesRef.current[index] = el;
                  }}
                  className="absolute bg-white rounded-full z-0"
                />

                {/* letra */}
                <span
                  ref={(el) => {
                    if (el) lettersRef.current[index] = el;
                  }}
                  className="relative z-10 font-semibold tracking-widest"
                >
                  {letter}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="
          flex flex-col
          items-start lg:items-end
          text-left lg:text-right
          gap-10
          text-lg sm:text-xl
          tracking-widest
        ">
        {links.map((item, i) => (
  <button
    key={item}
    onClick={() => router.push(routes[i])}
    className="group relative pb-4 w-fit"
  >
    <span className="hover:text-[#3affa3] transition-colors">
      {item}
    </span>

    {/* LÍNEA BASE (SIEMPRE VISIBLE - GRIS) */}
    <span
      className="
        absolute right-0 bottom-0
        h-[2px] w-[140px]
        bg-gray-700
      "
    />

    {/* LÍNEA HOVER (CRECE HACIA LA IZQUIERDA) */}
    <span
      className="
        absolute right-0 bottom-0
        h-[2px] w-0
        bg-gray-400
        transition-all duration-500
        group-hover:w-[440px]
      "
    />
  </button>
))}
        </div>
      </div>

      {/* LINEA FINAL */}
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-700 mt-20" />
    </footer>
  );
}
