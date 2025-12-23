"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import localFont from "next/font/local";
import Image from "next/image";
import flecha from "../public/flecha.svg";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const items = [
    {
      title: "TELEGRAM",
      count: "39k+",
      icon: "/icons/telegram.svg",
    },
    {
      title: "WHATSAPP",
      count: "102k+",
      icon: "/icons/whatsapp.svg",
    },
    {
      title: "DISCORD",
      count: "32k+",
      icon: "/icons/discord.svg",
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
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
    let columns = Math.floor(canvas.width / fontSize);
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

  const fondocelRef = useRef(null);
  const letraApixRef = useRef(null);
  const sectionRef = useRef(null);

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
        markers: true,
      },
    });

    // 1️⃣ FONDOCEL SUBE HASTA TAPAR LETRAAPIX

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

    tl.to("#divmostradorcel", {
      opacity: 10,
      ease: "none",
    });
  });

  const texto = "Automated software! Intelligent risk and profit management.";

  return (
    <>
     <div
          id="fondoanimado"
          className="bg-transparent absolute inset-0 z-0 h-[1100px] overflow-hidden flex"
        >
          {/* Aquí puedes poner más divs de animaciones, partículas, shapes, etc. */}
          {/* Linea1 */}
          <div className="bg-transparent w-[15px] ml-[4%] h-full overflow-hidden">
            <div className="paleta-cinta animate-scroll-fast">
              {/* Primera paleta */}
              <div className="bg-[#092618] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#092618] w-full h-[30px]"></div>

              {/* Espacio */}
              <div className="w-full h-[502px]"></div>

              {/* Segunda paleta */}
              <div className="bg-[#092618] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#092618] w-full h-[30px]"></div>
            </div>
          </div>

      <div id="separador" className="h-full w-[553px]" ></div>

          {/* Linea2 */}
          <div className="bg-transparent w-[15px] h-full overflow-hidden">
            <div className="paleta-cinta animate-scroll-fast2">
              {/* Primera paleta */}
              <div className="bg-[#092618] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#092618] w-full h-[30px]"></div>

              {/* Espacio */}
              <div className="w-full h-[502px]"></div>

              {/* Segunda paleta */}
              <div className="bg-[#092618] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#092618] w-full h-[30px]"></div>
            </div>
          </div>

    <div id="separador" className="h-full w-[552px]" ></div>

          {/* Linea3 */}
          <div className="bg-transparent w-[15px] h-full overflow-hidden">
            <div className="paleta-cinta animate-scroll-fast3">
              {/* Primera paleta */}
              <div className="bg-[#092618] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#092618] w-full h-[30px]"></div>

              {/* Espacio */}
              <div className="w-full h-[502px]"></div>

              {/* Segunda paleta */}
              <div className="bg-[#092618] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#092618] w-full h-[30px]"></div>
            </div>
          </div>

          <div id="separador" className="h-full w-[612px]" ></div>

          {/* Linea4 */}
          <div className="bg-transparent w-[15px] mr-[3%] h-full overflow-hidden">
            <div className="paleta-cinta animate-scroll-fast4">
              {/* Primera paleta */}
              <div className="bg-[#092618] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#3AFFA3] w-full h-[30px]"></div>
              <div className="bg-[#29B372] w-full h-[30px]"></div>
              <div className="bg-[#176641] w-full h-[30px]"></div>
              <div className="bg-[#092618] w-full h-[30px]"></div>

              {/* Espacio */}
              <div className="w-full h-[502px]"></div>

              {/* Segunda paleta */}
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
            Boost your trading! From <span className="text-[#3affa3]">5%</span>{" "}
            to <span className="text-[#3affa3]">40%</span> profit. Our trading
            software offers advanced analysis, fast execution, and intelligent
            risk management.
          </p>
        </div>

        {/* Botón */}
        <div className="flex items-center bg-white rounded-sm overflow-hidden cursor-pointer hover:bg-gray-100 transition-colors duration-300 mx-auto w-[10%] mt-[5%] group">
          <div className="px-6 py-1 text-lg text-black overflow-hidden h-[28px] flex flex-col justify-start">
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Trade Now
            </span>
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Trade Now
            </span>
          </div>

          <div className="bg-black w-12 h-12 flex items-center justify-center mr-[3%] rounded-lg mt-[5%] mb-[5%] overflow-hidden">
            <div className="relative w-6 h-6 flex flex-col transition-transform">
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
              className={`${miFuente.className} text-[96px] font-[700] leading-[82px] text-white`}
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
        <div>
          <div
            ref={letraApixRef}
            className="relative w-screen h-screen flex justify-center items-center bg-amber-500"
            id="letraapix"
          >
            <h2
              className={`${miFuente.className} text-center font-bold text-white 
              text-[480px]`}
            >
              APIX TRADE
            </h2>
          </div>
        </div>

        <div
          className="w-screen h-screen bg-transparent flex items-center justify-center"
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
              information flow using Artificial Intelligence (AI), allowing you
              to operate and access this relevant and prioritized information
              directly from your phone.
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
            className="relative h-[500px] w-[300px] rounded-[7vh] scale-100 bg-white"
            id="pantallacel"
          >
            <Image
              id="imgcelular"
              src="/celular.png"
              alt="Descripción de la imagen"
              fill
              className="z-10"
            />
            <div className="absolute mt-[0px]  w-[100%] h-[100%] z-0 rounded-[7.5vh] overflow-hidden opacity-100">
              <div className="flex h-[20%]">
                <div id="cubo1" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo2" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo3" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo4" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo5" className="h-[100%] bg-white w-[100%]"></div>
              </div>
              <div className="flex h-[20%]">
                <div id="cubo6" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo7" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo8" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo9" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo10" className="h-[100%] bg-white w-[100%]"></div>
              </div>
              <div className="flex h-[20%]">
                <div id="cubo11" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo12" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo13" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo14" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo15" className="h-[100%] bg-white w-[100%]"></div>
              </div>
              <div className="flex h-[20%]">
                <div id="cubo16" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo17" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo18" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo19" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo20" className="h-[100%] bg-white w-[100%]"></div>
              </div>
              <div className="flex h-[20%]">
                <div id="cubo21" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo22" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo23" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo24" className="h-[100%] bg-white w-[100%]"></div>
                <div id="cubo25" className="h-[100%] bg-white w-[100%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-screen h-screen bg-amber-700" id="pasosdiv">
          <div className="flex">
            <div className="bg-black h-screen w-[85%]">
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>

              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
                <div className="bg-[#101011] h-auto w-[100%] m-[0.4%]"></div>
              </div>
              <div className="h-[10%] flex">
                <div
                  className="border-solid border-[#3affa3] border-4 w-[1150px] h-[70px] m-5 py-[8px] px-[10px] block"
                  id="barraborde"
                >
                  <div className="bg-[#3affa3] w-[0%] h-[100%]"></div>
                </div>
              </div>
            </div>
            <div className="bg-white h-screen w-[50%] flex flex-col items-center justify-between py-10">
              <h1
                className={`${robotoMono.className} text-black text-center font-semibold text-[52px] leading-[62px] gap-6`}
              >
                CONFIGURACION INICIAL
              </h1>

              <div className="flex flex-col items-center gap-4">
                <img
                  src="/cruz.png"
                  alt=""
                  className="block mx-auto mb-[200px] h-[70px] w-[70px]"
                />
                <p
                  className={`${robotoMono.className} text-black text-center text-[20px] leading-[30px]`}
                >
                  Parrafo
                </p>
              </div>

              <button
                className={`${robotoMono.className} bg-black text-white w-[90%] h-[100px] rounded-xl`}
              >
                SKIP THE PROCESS
              </button>
            </div>
          </div>
        </div>

        <section className="w-screen h-screen bg-amber-400 flex flex-col items-center justify-center relative text-white">
          <div className="absolute top-1/4 left-1/4 w-12 h-12 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-b-2 border-r-2 border-white rounded-br-lg"></div>

          <div className="bg-white rounded-2xl p-4">
            <img src="/qr.png" alt="QR Code" className="w-50 h-50" />
          </div>
          <div className="absolute top-[800px]">
            <p className="mt-10 text-xl font-medium tracking-wide flex items-center gap-2 text-[48px] leading-[41px]">
              Scan The
              <span className="flex col gap-1">
                <span className="w-[10] h-[38px] bg-[#0affc2]"></span>
                <span className="w-[10] h-[38px] bg-[#0affc2]"></span>
                <span className="w-[10] h-[38px] bg-[#0affc2]"></span>
                <span className="w-[10] h-[38px] bg-[#0affc2]"></span>
              </span>
              QR Code
            </p>
          </div>
        </section>
      </div>
      <section className="w-full min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
        {/* TÍTULO */}
        <h2
          className={`${miFuente.className} text-center font-bold text-white 
              text-[96px] leading-[41px]`}
        >
          Why choose our APIX <br /> <br />
          TRADE software
        </h2>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-[10%]">
          {/* TARJETA IZQUIERDA */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-[#0affc2] rounded-xl h-60 flex justify-center items-center">
            <span
              className={`${miFuente.className} text-center font-bold text-white 
              text-[192px] leading-[192px]`}
            >
              A
            </span>
          </div>

          {/* TEXTO DERECHA */}
          <div className="gap-12">
            <span
              className={`${miFuente.className} text-center font-bold text-white 
              text-[58px] leading-[41px]`}
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

      <section className="w-full bg-black text-white py-20">
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
                <div className="flex gap-1">
                  <div className="h-3 w-1 bg-green-400 rounded-sm"></div>
                  <div className="h-3 w-1 bg-green-400 rounded-sm"></div>
                  <div className="h-3 w-1 bg-green-400 rounded-sm"></div>
                  <div className="h-3 w-1 bg-green-400 rounded-sm"></div>
                </div>

                <span className="tracking-widest">US</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full h-[700px] flex items-center justify-center bg-black overflow-hidden">
        {/* Fondo Matrix */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            It&apos;s time to choose.
          </h1>

          <p className="text-gray-400 mb-10">
            Stay outside and put it off again.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-xl text-lg font-medium shadow-lg flex items-center justify-center gap-3 hover:scale-105 duration-200 mx-auto">
            Let&apos;s Talk
            <span className="bg-black text-green-400 w-7 h-7 flex items-center justify-center rounded-md">
              →
            </span>
          </button>
        </div>
      </section>
    </div>
    </>
  );
}
