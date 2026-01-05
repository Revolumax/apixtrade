"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const routes = ["/", "/about-us", "/trade", "/pricing"];
  const menuItems = ["HOME", "AI", "TRADE", "PRICING"];

  /* ================= MENU ANIMATION ================= */
  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.8, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  /* ================= INIT CIRCLES ================= */
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
      width: enter ? 49 : 0,
      height: enter ? 49 : 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(letter, {
      rotate: enter ? 10 : 0,
      color: enter ? "#000000" : "#ffffff",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleNavigate = (index: number) => {
    setMenuOpen(false);
    router.push(routes[index]);
  };

  return (
    <header
      className="
        bg-transparent text-white flex items-center justify-between
        relative z-10
        px-4 sm:px-6 md:px-8
        h-[96px] sm:h-[120px] md:h-[160px] lg:h-[203px]
      "
    >
      {/* --- IZQUIERDA APIX --- */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 relative">
        {["A", "P", "I", "X"].map((letter, index) => (
          <div
            key={letter}
            role="button"
            tabIndex={0}
            className="
              relative flex items-center justify-center
              rounded-full border border-white font-semibold
              overflow-hidden cursor-pointer
              w-9 h-9 text-xs
              sm:w-10 sm:h-10 sm:text-sm
              md:w-12 md:h-12 md:text-base
            "
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            onClick={() => handleNavigate(index)}
          >
            <div
               ref={(el) => {
                if (el) circlesRef.current[index] = el;
              }}
              className="absolute bg-white rounded-full z-0"
            />
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

      {/* --- LOGO --- */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src="/logoapixtrade.png"
          alt="Logo"
          className="w-28 sm:w-36 md:w-44 lg:w-50"
        />
      </div>

      {/* --- DERECHA --- */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <button
          className="
            relative font-semibold text-white
            border border-[#3affa3]
            shadow-[0_0_10px_#3affa3]
            hover:shadow-[0_0_20px_#3affa3]
            transition-shadow duration-300
            px-4 py-2 text-xs
            sm:px-6 sm:text-sm
            md:px-8 md:text-base
          "
        >
          LogIn
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-white hover:opacity-80 transition"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* ================= FULLSCREEN MENU ================= */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="
            fixed inset-0 bg-black
            z-[999]
            flex flex-col items-center justify-center
          "
        >
          {/* BOTÓN X */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-white hover:rotate-90 transition"
          >
            <X size={36} />
          </button>

          {menuItems.map((item, i) => (
            <button
              key={item}
              onClick={() => handleNavigate(i)}
              className="
                group relative w-full max-w-3xl py-10
                text-center overflow-hidden
              "
            >
              {/* LINEA SUPERIOR */}
              <span className="absolute top-0 left-1/2 w-0 h-px bg-[#3affa3] transition-all duration-500 group-hover:w-full group-hover:left-0" />

              {/* TEXTO */}
              <span className="
                text-white text-3xl sm:text-4xl
                tracking-[0.4em] font-medium
                relative z-10
              ">
                {item}
              </span>

              {/* LINEA INFERIOR */}
              <span className="absolute bottom-0 right-1/2 w-0 h-px bg-[#3affa3] transition-all duration-500 group-hover:w-full group-hover:right-0" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
