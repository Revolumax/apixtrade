"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import localFont from "next/font/local";
import Image from "next/image";
import flecha from "../public/flecha.svg";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

type LetterKey = "A" | "P" | "I" | "X";

const LETTER_ORDER: LetterKey[] = ["A", "P", "I", "X"];

const TITLES: Record<LetterKey, string> = {
  A: "CONFIGURACION INICIAL",
  P: "CONFIGURACION DE LA CUENTA",
  I: "MONITOREA TU INVERSION",
  X: "REGISTRATE HOY Y DESCUBRE EL PODER",
};

const PARAGRAPHS: Record<LetterKey, string> = {
  A: "Define los parámetros básicos para comenzar de forma segura.",
  P: "Personaliza tu perfil y ajusta las opciones clave de tu cuenta.",
  I: "Visualiza métricas, movimientos y resultados en tiempo real.",
  X: "Da el siguiente paso y aprovecha todas las ventajas de la plataforma.",
};

const LETTERS: Record<LetterKey, number[]> = {
  A: [
    61, 62, 63, 64, 65, 66, 67, 68, 86, 95, 112, 113, 114, 115, 116, 117, 118,
    119, 120, 121, 138, 147, 164, 173,
  ],
  P: [
    61, 62, 63, 64, 65, 66, 67, 68, 87, 95, 113, 114, 115, 116, 117, 118, 119,
    120, 139, 165,
  ],
  I: [65, 117, 143, 169, 195],
  X: [
    60, 61, 67, 68, 87, 88, 92, 93, 114, 115, 116, 117, 118, 141, 142, 143, 165,
    166, 170, 171, 190, 191, 197, 198,
  ],
};

const miFuente = localFont({
  src: [
    { path: "./fonts/ppmondwest-regular.otf", weight: "400" },
    { path: "./fonts/ppneuebit-bold.otf", weight: "700" },
  ],
});

const robotoMono = localFont({
  src: [
    {
      path: "../public/fonts/RobotoMono-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/RobotoMono-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Home() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  const [titleAnim, setTitleAnim] = useState("fade-hidden");
  const [paragraphAnim, setParagraphAnim] = useState("fade-hidden");

  const currentIndex = useRef<number>(-1);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#pasosdiv",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,

        onUpdate(self) {
          const index = Math.min(
            Math.floor(self.progress * LETTER_ORDER.length),
            LETTER_ORDER.length - 1
          );

          if (index === currentIndex.current) return;
          currentIndex.current = index;

          const letter = LETTER_ORDER[index];

          /* 🔥 CUBOS */
          document
            .querySelectorAll(".cuboluz.active")
            .forEach((el) => el.classList.remove("active"));

          LETTERS[letter].forEach((i) => {
            document.getElementById(`cuboluz${i}`)?.classList.add("active");
          });

          /* 📝 TEXTO ANIMADO */
          setTitleAnim("fade-hidden");
          setParagraphAnim("fade-hidden");

          requestAnimationFrame(() => {
            setTitle(TITLES[letter]);
            setParagraph(PARAGRAPHS[letter]);

            setTitleAnim("fade-enter");
            setParagraphAnim("fade-enter");

            requestAnimationFrame(() => {
              setTitleAnim("fade-show");
              setParagraphAnim("fade-show");
            });
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const canvasRefmain = useRef<HTMLCanvasElement | null>(null);

  const items = [
    {
      title: "TELEGRAM",
      count: "39k+",
      icon: "/tele.png",
    },
    {
      title: "WHATSAPP",
      count: "102k+",
      icon: "/wats.png",
    },
    {
      title: "DISCORD",
      count: "32k+",
      icon: "/dis.png",
    },
  ];

  useEffect(() => {
    const canvas = canvasRefmain.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff0000";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#letraapix",
        start: "top top",
        end: "+=1000", // controla qué tan largo es todo el efecto
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: false,
      },
    });

    //  FONDOCEL SUBE HASTA TAPAR LETRAAPIX

    tl.to("#fondocel", { y: "0%", ease: "none", duration: 5 });
    tl.to("#pantallacel", {
      scale: 6.6,
      transformOrigin: "center center",
      ease: "none",
    });

    tl.to("#imgcelular", {
      opacity: 0,
      ease: "none",
    });
  });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tp = gsap.timeline({
      scrollTrigger: {
        trigger: "#letraapix",
        start: "top top",
        end: "+=1000", // controla qué tan largo es todo el efecto
        scrub: true,
        pinSpacing: false,
      },
    });

    // transicionador

    tp.to("#pantallaoficial", {
      opacity: 0,
      duration: 15,
      delay: 15,
      ease: "none",
    });

    const tu = gsap.timeline({
      scrollTrigger: {
        trigger: "#letraapix",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pinSpacing: false,
      },
    });

    tu.to("#pantalladebajo", {
      opacity: 0,
      delay: 545,
      duration: 45,
      ease: "none",
    });

    const cubos = gsap.timeline({
      scrollTrigger: {
        trigger: "#letraapix",
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });

    cubos.to("#cubo2", {
      backgroundColor: "white",
      delay: 645,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo4", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo6", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo8", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo9", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo11", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo12", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo14", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo17", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo19", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo22", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo23", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo25", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    cubos.to("#cubo25", {
      backgroundColor: "white",
      delay: 545,
      duration: 45,
      ease: "none",
    });

    tu.to("#pantallaoficial", {
      opacity: 100,
      backgroundColor: "white",
      duration: 5,
      ease: "none",
    });

    const mos = gsap.timeline({
      scrollTrigger: {
        trigger: "#letraapix",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pinSpacing: false,
      },
    });

    mos.to("#divmostradorcel", {
      opacity: 100,
      delay: 545,
      duration: 45,
      ease: "none",
    });
  });

  const texto = "Automated software! Intelligent risk and profit management.";

  const sectionRef = useRef<HTMLElement | null>(null);
  const baseCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  /* ================= MATRIX BASE (ROJO) ================= */

  useEffect(() => {
    const canvas = baseCanvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const fontSize = 12;
    let width = 0;
    let height = 0;
    let rafId: number;

    let columns: number[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement!.offsetHeight;
      columns = Array(Math.floor(width / fontSize)).fill(0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#ff2a2a";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const x = i * fontSize;
        const y = columns[i] * fontSize;
        const char = Math.random() > 0.5 ? "1" : "0";

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.97) {
          columns[i] = 0;
        } else {
          columns[i]++;
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ================= MATRIX OVERLAY (VERDE) ================= */

  useEffect(() => {
    const canvas = overlayCanvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const fontSize = 12;
    let width = 0;
    let height = 0;
    let rafId: number;

    let columns: number[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement!.offsetHeight;
      columns = Array(Math.floor(width / fontSize)).fill(0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      /* FONDO NEGRO SÓLIDO */
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, width, height);

      /* MATRIX VERDE */
      ctx.fillStyle = "#00ff66";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const x = i * fontSize;
        const y = columns[i] * fontSize;
        const char = Math.random() > 0.5 ? "1" : "0";

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.97) {
          columns[i] = 0;
        } else {
          columns[i]++;
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ================= MOUSE ================= */

  useEffect(() => {
    const section = sectionRef.current!;
    const overlay = overlayRef.current!;

    const move = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const percent = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
      );

      overlay.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    };

    const leave = () => {
      overlay.style.clipPath = "inset(0 100% 0 0)";
    };

    section.addEventListener("mousemove", move);
    section.addEventListener("mouseleave", leave);

    return () => {
      section.removeEventListener("mousemove", move);
      section.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        id="fondoanimado"
        className="bg-transparent absolute inset-0 z-0 
             h-[clamp(700px,120vh,1100px)] 
             overflow-hidden flex"
      >
        {/* Linea 1 */}
        <div className="bg-transparent w-[clamp(8px,1.2vw,15px)] ml-[4%] h-full overflow-hidden">
          <div className="paleta-cinta animate-scroll-fast">
            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>

            <div className="w-full h-[502px]"></div>

            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-full w-[clamp(120px,18vw,553px)]"></div>

        {/* Linea 2 */}
        <div className="bg-transparent w-[clamp(8px,1.2vw,15px)] h-full overflow-hidden">
          <div className="paleta-cinta animate-scroll-fast2">
            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>

            <div className="w-full h-[502px]"></div>

            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-full w-[clamp(120px,18vw,552px)]"></div>

        {/* Linea 3 */}
        <div className="bg-transparent w-[clamp(8px,1.2vw,15px)] h-full overflow-hidden">
          <div className="paleta-cinta animate-scroll-fast3">
            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>

            <div className="w-full h-[502px]"></div>

            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-full w-[clamp(140px,20vw,612px)]"></div>

        {/* Linea 4 */}
        <div className="bg-transparent w-[clamp(8px,1.2vw,15px)] mr-[3%] h-full overflow-hidden">
          <div className="paleta-cinta animate-scroll-fast4">
            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>

            <div className="w-full h-[502px]"></div>

            <div className="bg-[#092618] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
            <div className="bg-[#29B372] w-full h-[30px]"></div>
            <div className="bg-[#176641] w-full h-[30px]"></div>
            <div className="bg-[#092618] w-full h-[30px]"></div>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <div className="mt-[10%]">
          {/* Marquee */}
          <div
            id="section1"
            className="w-full h-[200px] overflow-hidden flex items-center"
          >
            <div className="flex whitespace-nowrap animate-marquee">
              <h2
                className={`${miFuente.className} text-[211px] font-[700] leading-[169px] text-white`}
              >
                {texto}
                {texto}
                {texto}
                {texto}
              </h2>
            </div>
          </div>

          {/* Descripción */}
          <div className="w-[50vw] mx-auto">
            <p className={`text-white text-center mt-[0.5%]`}>
              Boost your trading! From{" "}
              <span className="text-[#3affa3]">5%</span> to{" "}
              <span className="text-[#3affa3]">40%</span> profit. Our trading
              software offers advanced analysis, fast execution, and intelligent
              risk management.
            </p>
          </div>

          {/* Botón */}
          <div
            className="
    flex items-center bg-white rounded-sm overflow-hidden cursor-pointer 
    hover:bg-gray-100 transition-colors duration-300 
    mx-auto mt-[5%] group

    w-[15vh] sm:w-[20vh]
  "
          >
            {/* TEXTO */}
            <div
              className="
      px-4 sm:px-5 md:px-6 
      py-1 
      text-sm sm:text-base md:text-lg 
      text-black 
      overflow-hidden 
      h-[24px] sm:h-[26px] md:h-[28px] 
      flex flex-col justify-start
    "
            >
              <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                Trade Now
              </span>
              <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                Trade Now
              </span>
            </div>

            {/* ICONO */}
            <div
              className="
      bg-black 
      w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
      flex items-center justify-center 
      mr-[3%] 
      rounded-lg 
      mt-[5%] mb-[5%] 
      overflow-hidden
    "
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col transition-transform">
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
            </div>
          </div>

          {/* Texto principal */}
          <div className="mt-[30%]">
            <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 text-center bg-transparent">
              <div className="h-[14px] w-[100px] bg-[#3AFFA3] shadow-[0_0_15px_#3AFFA3] mb-8"></div>

              <h2
                className={`${miFuente.className} font-[700] text-white`}
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 96px)",
                  lineHeight: "clamp(2rem, 4.3vw, 82px)",
                }}
              >
                Empowering investors is our mission,
                <br />
                with cutting-edge technology to optimize
                <br />
                their trading strategies and achieve their
                <br />
                financial goals through efficient and reliable
                <br />
                automated solutions.
              </h2>
            </section>
          </div>

          {/* APIX TRADE (encima al inicio) */}
          <section>
            <div
              id="letraapix"
              className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
            >
              <h2
                className={`${miFuente.className} text-center font-bold text-white leading-none`}
                style={{
                  fontSize: "clamp(4rem, 22vw, 30rem)",
                }}
              >
                APIX TRADE
              </h2>
            </div>
          </section>

          <div
            className="w-screen h-screen flex items-center justify-center opacity-100"
            id="fondocel"
          >
            <div
              className="mx-[24%] absolute z-30 text-green-500 bg-transparent opacity-0"
              id="divmostradorcel"
            >
              <h2
                className={`${miFuente.className} text-center font-bold text-black text-[96px] leading-[82px]`}
              >
                Personalized Intelligence at Your Fingertips
              </h2>
              <br />
              <p
                className={`${robotoMono.className} text-center font-normal text-black text-[16px] leading-[24px]`}
              >
                Apix Tardo intelligently manages personalized and optimized
                information flow using Artificial Intelligence (AI), allowing
                you to operate and access this relevant and prioritized
                information directly from your phone.
              </p>
              <div className="flex justify-center mt-[25px]">
                <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center text-2xl font-bold text-black transition-all duration-300 hover:border-[#3affa3] hover:shadow-[0_0_15px_4px_#3affa3] mr-[33px]">
                  24
                </div>
                <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center text-2xl font-bold text-black transition-all duration-300 hover:border-[#3affa3] hover:shadow-[0_0_15px_4px_#3affa3]">
                  7
                </div>
              </div>

              <button className="group flex items-center gap-3 bg-[#3affa3] px-[5px] rounded-md font-robotoMono text-black text-lg mx-auto h-[60px] mt-[55px] w-[178px] pl-[10px] cursor-pointer">
                <div className="text-lg text-black overflow-hidden h-[28px] flex flex-col justify-start w-[100%]">
                  <span
                    className={`${robotoMono.className} block transition-transform duration-300 ease-in-out group-hover:-translate-y-full w-[100%]`}
                  >
                    Trade Now
                  </span>
                  <span
                    className={`${robotoMono.className} block transition-transform duration-300 ease-in-out group-hover:-translate-y-full w-[100%]`}
                  >
                    Trade Now
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

            <div
              className="relative h-[600px] w-[360px] rounded-[8vh] scale-100 z-0 opacity-100"
              id="pantallacel"
            >
              <div
                className="absolute w-[100%] h-[100%] bg-black z-10 rounded-[8vh] opacity-100"
                id="pantallaoficial"
              ></div>
              <Image
                id="imgcelular"
                src="/celular.png"
                alt="Descripción de la imagen"
                fill
                className="z-10"
              />
              <div
                className="absolute mt-[0px]  w-[100%] h-[100%] z-0 rounded-[7.5vh] overflow-hidden opacity-100"
                id="pantalladebajo"
              >
                <div className="flex h-[20%]">
                  <div id="cubo1" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo2" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo3" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo4" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo5" className="h-[100%] bg-black w-[100%]"></div>
                </div>
                <div className="flex h-[20%]">
                  <div id="cubo6" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo7" className="h-[100%] bg-white w-[100%]"></div>
                  <div id="cubo8" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo9" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo10" className="h-[100%] bg-white w-[100%]"></div>
                </div>
                <div className="flex h-[20%]">
                  <div id="cubo11" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo12" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo13" className="h-[100%] bg-white w-[100%]"></div>
                  <div id="cubo14" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo15" className="h-[100%] bg-white w-[100%]"></div>
                </div>
                <div className="flex h-[20%]">
                  <div id="cubo16" className="h-[100%] bg-white w-[100%]"></div>
                  <div id="cubo17" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo18" className="h-[100%] bg-white w-[100%]"></div>
                  <div id="cubo19" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo20" className="h-[100%] bg-white w-[100%]"></div>
                </div>
                <div className="flex h-[20%]">
                  <div id="cubo21" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo22" className="h-[100%] bg-white w-[100%]"></div>
                  <div id="cubo23" className="h-[100%] bg-black w-[100%]"></div>
                  <div id="cubo24" className="h-[100%] bg-white w-[100%]"></div>
                  <div id="cubo25" className="h-[100%] bg-black w-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
          <section id="pasosdiv" className="w-screen min-h-screen">
            <div className="flex flex-col lg:flex-row min-h-screen">
              {/* IZQUIERDA */}
              <div className="bg-black w-full lg:w-[60%] h-[50vh] lg:h-screen lg:sticky lg:top-0">
                <div className="grid grid-cols-26 grid-rows-10 gap-[4px] p-4 h-full">
                  {Array.from({ length: 260 }).map((_, i) => (
                    <div key={i} id={`cuboluz${i + 1}`} className="cuboluz" />
                  ))}
                </div>
              </div>

              {/* DERECHA */}
              <div className="bg-white w-full lg:w-[40%] flex flex-col px-8 py-12 text-center">
                <div className="flex flex-col items-center space-y-24">
                  <h1
                    className={`text-4xl font-semibold text-black ${titleAnim}`}
                  >
                    {title}
                  </h1>

                  <img src="/cruz.png" className="w-8 h-8" />

                  <p className={`text-lg text-black ${paragraphAnim}`}>
                    {paragraph}
                  </p>
                </div>

                <button className="mt-auto bg-black text-white h-[100px] rounded-md">
                  SKIP PROCESS
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className="w-screen h-screen bg-black flex flex-col items-center justify-center relative text-white">
          <div className="absolute top-1/4 left-1/4 w-12 h-12 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-b-2 border-r-2 border-white rounded-br-lg"></div>

          <div className="bg-white rounded-2xl p-4">
            <img src="/qr.png" alt="QR Code" className="w-50 h-50" />
          </div>
          <div className="absolute top-[800px]">
            <p className="mt-10 text-xl font-medium tracking-wide flex items-center gap-4 text-[48px] leading-[41px]">
              Scan The
              <span className="flex gap-1">
                <span
                  className="neon-bar w-[15px] h-[38px] bg-[#0affc2]"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="neon-bar w-[15px] h-[38px] bg-[#0affc2]"
                  style={{ animationDelay: "0.5s" }}
                />
                <span
                  className="neon-bar w-[15px] h-[38px] bg-[#0affc2]"
                  style={{ animationDelay: "1s" }}
                />
                <span
                  className="neon-bar w-[15px] h-[38px] bg-[#0affc2]"
                  style={{ animationDelay: "1.5s" }}
                />
              </span>
              QR Code
            </p>
          </div>
        </section>

        <section className="w-full min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center z-50">
          {/* TÍTULO */}
          <h2
            className={`${miFuente.className} text-center font-bold text-white 
              text-[96px] leading-[41px] z-10`}
          >
            Why choose our APIX <br /> <br />
            TRADE software
          </h2>

          {/* CONTENEDOR PRINCIPAL */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-[10%] bg-black">
            {/* TARJETA IZQUIERDA */}
            <div className="relative bg-black from-gray-900 to-black border border-[#0affc2] rounded-xl h-60 flex justify-center items-center">
              <span
                className={`${miFuente.className} text-center font-bold text-white 
              text-[192px] leading-[192px]`}
              >
                A
              </span>
            </div>

            {/* TEXTO DERECHA */}
            <div className="gap-12 z-10">
              <span
                className={`${miFuente.className} text-center font-bold text-white 
              text-[58px] leading-[41px] z-10`}
              >
                Efficient Automation
              </span>
              <p
                className={`${robotoMono.className} text-white text-[16px] leading-[24px]`}
              >
                Execute trading strategies 24/7 without manual intervention,
                optimizing speed and eliminating human error.
              </p>
            </div>
          </div>
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-[5%]">
            {/* TARJETA IZQUIERDA */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-[#0affc2] rounded-xl h-60 flex justify-center items-center">
              <span
                className={`${miFuente.className} text-center font-bold text-white 
              text-[192px] leading-[192px]`}
              >
                P
              </span>
            </div>

            {/* TEXTO DERECHA */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Efficient Automation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Execute trading strategies 24/7 without manual intervention,
                optimizing speed and eliminating human error.
              </p>
            </div>
          </div>
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-[5%]">
            {/* TARJETA IZQUIERDA */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-[#0affc2] rounded-xl h-60 flex justify-center items-center">
              <span
                className={`${miFuente.className} text-center font-bold text-white 
              text-[192px] leading-[192px]`}
              >
                I
              </span>
            </div>

            {/* TEXTO DERECHA */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Efficient Automation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Execute trading strategies 24/7 without manual intervention,
                optimizing speed and eliminating human error.
              </p>
            </div>
          </div>
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-[5%]">
            {/* TARJETA IZQUIERDA */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-[#0affc2] rounded-xl h-60 flex justify-center items-center">
              <span
                className={`${miFuente.className} text-center font-bold text-white 
              text-[192px] leading-[192px]`}
              >
                X
              </span>
            </div>

            {/* TEXTO DERECHA */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Efficient Automation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Execute trading strategies 24/7 without manual intervention,
                optimizing speed and eliminating human error.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-black text-white py-20 mt-[20vh]">
          <div className="text-center mb-16">
            <div className="mx-auto h-2 w-24 rounded-full bg-green-400"></div>

            <h2 className="text-4xl font-bold mt-6 tracking-wide">
              Evolve With Us
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
            {items.map((box, i) => (
              <div
                key={i}
                className="bg-black border border-gray-800 rounded-2xl p-8 flex flex-col justify-between h-56"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg tracking-widest">{box.title}</h3>
                  <img src={box.icon} alt={box.title} className="h-6 w-6" />
                </div>

                <p className="text-green-400 text-4xl font-semibold mt-4">
                  {box.count}
                </p>

                <div className="mt-6 bg-black border border-gray-800 rounded-xl px-6 py-3 flex items-center justify-between">
                  <span className="tracking-widest">JOIN</span>

                  {/* Barras verdes animadas */}
                  <div className="flex gap-1 items-center">
                    <span
                      className="neon-bar w-[6px] h-[18px] bg-[#0affc2] rounded-sm"
                      style={{ animationDelay: "0s" }}
                    />
                    <span
                      className="neon-bar w-[6px] h-[18px] bg-[#0affc2] rounded-sm"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <span
                      className="neon-bar w-[6px] h-[18px] bg-[#0affc2] rounded-sm"
                      style={{ animationDelay: "1s" }}
                    />
                    <span
                      className="neon-bar w-[6px] h-[18px] bg-[#0affc2] rounded-sm"
                      style={{ animationDelay: "1.5s" }}
                    />
                  </div>

                  <span className="tracking-widest">US</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={sectionRef}
          className="relative w-full h-[70vh] bg-black overflow-hidden"
        >
          {/* BASE MATRIX ROJO */}
          <canvas
            ref={baseCanvasRef}
            className="absolute inset-0 w-full h-full z-[0]"
          />

          {/* TEXTO BASE ROJO */}
          <p className="absolute z-[0] left-1/2 top-1/2 -translate-x-1/2 translate-y-10 text-red-400 text-lg pointer-events-none">
            Stay outside and put it off again.
          </p>

          {/* OVERLAY */}
          <div
            ref={overlayRef}
            className="absolute inset-0 z-[10] pointer-events-none"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <canvas
              ref={overlayCanvasRef}
              className="absolute inset-0 w-full h-full"
            />

            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-10 text-green-400 text-lg">
              Take the red pill and stay in Wonderland.
            </p>
          </div>

          {/* CONTENIDO UI */}
          <div className="relative z-[20] flex flex-col items-center justify-center h-full text-center px-6 mt-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              It&apos;s time to choose.
            </h1>

            {/* Botón */}
            <div
              className="
    flex items-center bg-white rounded-sm overflow-hidden cursor-pointer 
    hover:bg-gray-100 transition-colors duration-300 
    mx-auto mt-[10vh] group

    w-[15vh] sm:w-[20vh]
  "
            >
              {/* TEXTO */}
              <div
                className="
      px-4 sm:px-5 md:px-6 
      py-1 
      text-sm sm:text-base md:text-lg 
      text-black 
      overflow-hidden 
      h-[24px] sm:h-[26px] md:h-[28px] 
      flex flex-col justify-start
    "
              >
                <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  Trade Now
                </span>
                <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  Trade Now
                </span>
              </div>

              {/* ICONO */}
              <div
                className="
      bg-black 
      w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
      flex items-center justify-center 
      mr-[3%] 
      rounded-lg 
      mt-[5%] mb-[5%] 
      overflow-hidden
    "
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col transition-transform">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
