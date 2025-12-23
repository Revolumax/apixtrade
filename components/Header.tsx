"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    // Inicializar los círculos
    circlesRef.current.forEach((circle) => {
      gsap.set(circle, { width: 0, height: 0 });
    });
  }, []);

  const handleHover = (index: number, enter: boolean) => {
    const circle = circlesRef.current[index];
    const letter = lettersRef.current[index];
    if (!circle || !letter) return;

    // Animar el círculo
    gsap.to(circle, {
      width: enter ? 49 : 0, // w-12 = 48px
      height: enter ? 49 : 0,
      duration: 0.4,
      ease: "power2.out",
    });

    // Animar la letra (rotación + color)
    gsap.to(letter, {
      rotate: enter ? 10 : 0,
      color: enter ? "#000000" : "#ffffff",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <header
      className="bg-transparent text-white flex items-center justify-between px-8 relative z-10"
      style={{ width: "1903px", height: "203px" }}
    >
      {/* --- Sección izquierda (A P I X) --- */}
      <div className="flex items-center gap-6 relative">
        {["A", "P", "I", "X"].map((letter, index) => (
          <div
            key={letter}
            className="relative w-12 h-12 flex items-center justify-center rounded-full border border-white text-base font-semibold overflow-hidden cursor-pointer"
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            {/* círculo rojo detrás */}
            <div
              ref={(el) => {
                if (el) circlesRef.current[index] = el;
              }}
              className="absolute bg-white rounded-full z-0"
            ></div>

            {/* letra encima */}
            <span
              ref={(el) => {
                if (el) lettersRef.current[index] = el;
              }}
              className="relative z-10"
            >
              {letter}
            </span>
          </div>
        ))}
      </div>

      {/* --- Logo central --- */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
        <img src="/logoapixtrade.png" alt="Logo" className="w-40 h-35px" />
      </div>

      {/* --- Sección derecha --- */}
      <div className="flex items-center gap-8">
        <button className="border border-[#3affa3] text-[white] px-8 py-3 text-base font-semibold hover:text-black cursor-pointer">
          LogIn
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:opacity-80 transition"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </header>
  );
}
