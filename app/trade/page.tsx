"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const miFuente = localFont({
  src: [
    { path: "../fonts/HelveticaNowDisplay-Regular.ttf", weight: "500" },
    { path: "../fonts/ppneuebit-bold.otf", weight: "700" },
  ],
});

export default function Trade() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const line = lineRef.current;

    // Línea vertical que crece durante el scroll
    gsap.fromTo(
      line,
      { height: 0 },
      {
        height: "100%",
        scrollTrigger: {
          trigger: "#inicioscroll",
          start: "top top",
          end: "bottom+=500 top",
          scrub: 1,
        },
      }
    );

    // Activación de círculos
    circlesRef.current.forEach((circle, i) => {
      gsap.to(circle, {
        backgroundColor: "#00ffbb",
        borderColor: "#00ffbb",
        scale: 1.3,
        scrollTrigger: {
          trigger: itemsRef.current[i],
          start: "top center+=200",
          end: "top center",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    // Animación de tarjetas izquierda/derecha
    itemsRef.current.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        duration: 0.9,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 transform-gpu z-20 top-[830px]">
        <a
          href="#next-section" // cambia por el ID de la siguiente sección
          className="group flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm transition-all duration-500 hover:bg-white/10"
        >
          <svg
            className="h-8 w-8 md:h-10 md:w-10 text-white transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      <section className="w-full h-[500px] bg-black flex items-center justify-center px-4 mb-[13vw]">
        <div className="w-[60%]">
          <h1
            className={`${miFuente.className} text-white text-center font-medium leading-[81px] text-[67px]`}
          >
            APIX TRADE OPENS THE DOORS TO ITS AUTOMATED TRADING{" "}
            <span className="">PLATFORM.</span>
          </h1>
        </div>
      </section>

      <img
        src="/logoapixtrade.png"
        alt=""
        className="absolute top-155 z-0 right-8"
        height={700}
        width={700}
      />

      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-end bg-[#070607] overflow-hidden ">
        {/* Cuadrícula sutil (grid de líneas) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            linear-gradient(#fff 2px, transparent 1px),
            linear-gradient(90deg, #fff 2px, transparent 1px)
          `,
            backgroundSize: "73.2px 170px", // mismo tamaño que en la imagen original
          }}
        />

        {/* Texto principal */}
        <div className="relative z-10 max-w-7xl px-6 md:px-12 lg:px-20">
          <h1 className="text-[33px] font-bold text-white leading-tight tracking-tight text-end">
            MASTER THE MARKET WITH OUR CUTTING-EDGE
            <br />
            TOOLS THAT DRIVE HIGHLY EFFICIENT
            <br />
            TRADING WITH OUR{" "}
            <span className="bg-clip-text bg-gradient-to-r text-white">
              APIX TRADE
            </span>{" "}
            SOFTWARE .
          </h1>
        </div>

        {/* Barra verde brillante en la esquina superior derecha */}
        <div className="absolute top-24 mt-[15vw] right-8 md:right-16 lg:right-24">
          <div className="w-20 md:w-28 lg:w-32 h-3 bg-[#3affa3] shadow-[0_0_15px_4px_rgba(0,255,100,0.6)]" />
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-black text-white py-40">
        <div
          className="w-full bg-black py-32 flex flex-col items-center justify-center text-white mt-[5vw]"
          id="inicioscroll"
        >
          {/* Círculo con número */}
          <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center font-medium text-[3vh]">
            1
          </div>

          {/* Título */}
          <h2
            className={`${miFuente.className} text-center font-bold leading-[81px] text-[96px]`}
          >
            Why choose our APIX
            <br />
            TRADE software
          </h2>
        </div>

        {/* Línea central */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-neutral-800 transform -translate-x-1/2">
          <div
            ref={lineRef}
            className="w-full bg-gradient-to-b from-teal-300 to-green-400"
          />
        </div>

        {/* Items */}
        <div className="relative w-full mx-auto flex flex-col gap-64">
          {/* Item A */}
          <div
            ref={(el) => {
              itemsRef.current[0] = el;
            }}
            className="relative flex items-center justify-between"
          >
            {/* izquierda */}
            <div className="w-1/2 flex justify-center">
              <div className="w-70 h-70 border border-green-400 flex items-center justify-center text-6xl font-bold">
                <h1
                  className={`${miFuente.className} text-white text-center font-bold leading-[81px] text-[187px]`}
                >
                  A
                </h1>
              </div>
            </div>

            {/* círculo */}
            <div
              ref={(el) => {
                circlesRef.current[0] = el;
              }}
              className="absolute left-1/2 w-6 h-6 rounded-full border border-white bg-black -translate-x-1/2 z-10"
            />

            {/* derecha */}
            <div className="relative w-[30vw]  bg-black p-10 md:p-12 border border-white/10 right-[200]">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Increased Execution Speed and Strategy Optimization
              </h2>

              <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed">
                Automated trading software can analyze market data and execute
                orders at much faster speeds than a human. This is crucial in
                volatile markets where prices can change rapidly.
              </p>
            </div>
          </div>

          {/* Item P */}
          <div
            ref={(el) => {
              itemsRef.current[1] = el;
            }}
            className="relative flex items-center justify-between"
          >
            {/* izquierda */}
            <div className="relative w-[30vw]  bg-black p-10 md:p-12 border border-white/10 right-[-160]">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Increased Execution Speed and Strategy Optimization
              </h2>

              <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed">
                Automated trading software can analyze market data and execute
                orders at much faster speeds than a human. This is crucial in
                volatile markets where prices can change rapidly.
              </p>
            </div>

            {/* círculo */}
            <div
              ref={(el) => {
                circlesRef.current[1] = el;
              }}
              className="absolute left-1/2 w-6 h-6 rounded-full border border-white bg-black -translate-x-1/2 z-10"
            />

            {/* derecha */}
            <div className="w-1/2 flex justify-center">
              <div className="w-70 h-70 border border-green-400 flex items-center justify-center text-6xl font-bold">
                <h1
                  className={`${miFuente.className} text-white text-center font-bold leading-[81px] text-[187px]`}
                >
                  P
                </h1>
              </div>
            </div>
          </div>
          {/* Item I */}
          <div
            ref={(el) => {
              itemsRef.current[0] = el;
            }}
            className="relative flex items-center justify-between"
          >
            {/* izquierda */}
            <div className="w-1/2 flex justify-center">
              <div className="w-70 h-70 border border-green-400 flex items-center justify-center text-6xl font-bold">
                <h1
                  className={`${miFuente.className} text-white text-center font-bold leading-[81px] text-[187px]`}
                >
                  I
                </h1>
              </div>
            </div>

            {/* círculo */}
            <div
              ref={(el) => {
                circlesRef.current[0] = el;
              }}
              className="absolute left-1/2 w-6 h-6 rounded-full border border-white bg-black -translate-x-1/2 z-10"
            />

            {/* derecha */}
            <div className="relative w-[30vw]  bg-black p-10 md:p-12 border border-white/10 right-[200]">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Increased Execution Speed and Strategy Optimization
              </h2>

              <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed">
                Automated trading software can analyze market data and execute
                orders at much faster speeds than a human. This is crucial in
                volatile markets where prices can change rapidly.
              </p>
            </div>
          </div>

          {/* Item X */}
          <div
            ref={(el) => {
              itemsRef.current[1] = el;
            }}
            className="relative flex items-center justify-between"
          >
            {/* izquierda */}
            <div className="relative w-[30vw]  bg-black p-10 md:p-12 border border-white/10 right-[-160]">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Increased Execution Speed and Strategy Optimization
              </h2>

              <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed">
                Automated trading software can analyze market data and execute
                orders at much faster speeds than a human. This is crucial in
                volatile markets where prices can change rapidly.
              </p>
            </div>

            {/* círculo */}
            <div
              ref={(el) => {
                circlesRef.current[1] = el;
              }}
              className="absolute left-1/2 w-6 h-6 rounded-full border border-white bg-black -translate-x-1/2 z-10"
            />

            {/* derecha */}
            <div className="w-1/2 flex justify-center">
              <div className="w-70 h-70 border border-green-400 flex items-center justify-center text-6xl font-bold">
                <h1
                  className={`${miFuente.className} text-white text-center font-bold leading-[81px] text-[187px]`}
                >
                  X
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-black py-32 flex flex-col items-center justify-center text-white mt-[5vw]">
        {/* Círculo con número */}
        <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center font-medium text-[3vh]">
          2
        </div>

        {/* Título */}
        <h2
          className={`${miFuente.className} text-center font-bold leading-[81px] text-[96px]`}
        >
          Discover the benefits of trading with
          <br />
          our automated trading software
        </h2>
      </div>

      <section className="w-full min-h-screen bg-black text-white flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 px-8">
          {/* IZQUIERDA – Texto */}
          <div className="flex flex-col justify-center gap-8">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
              EURUSD / USDCHF
            </h2>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
              AUDUSD / USDCAD
            </h2>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
              NZDUSD / EURNZD
            </h2>
          </div>

          {/* DERECHA – Video */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[3/5] border border-white/10">
              <video
                src="/cygnusvideo2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen bg-black text-white flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 px-8">
          {/* IZQUIERDA – Texto */}
          <div className="flex flex-col justify-center gap-8">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
              EURUSD / USDCHF
            </h2>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
              AUDUSD / USDCAD
            </h2>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
              NZDUSD / EURNZD
            </h2>
          </div>

          {/* DERECHA – Video */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[3/5] border border-white/10">
              <video
                src="/text-to-video-b7607b51.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className="w-full bg-black py-32 flex flex-col items-center justify-center text-white mt-[5vw]"
        id="inicioscroll"
      >
        {/* Círculo con número */}
        <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center font-medium text-[3vh]">
          3
        </div>

        {/* Título */}
        <h2
          className={`${miFuente.className} text-center font-bold leading-[81px] text-[96px]`}
        >
          Automated Profitability: The Future of
          <br />
          Your Trading is Here.
        </h2>
      </div>

      <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          {/* Card izquierda */}
          <div className="border border-white/20 p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We offer three investment
              <br />
              options with varying profit
              <br />
              potential
            </h2>

            <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-md mx-auto">
              A conservative option with an expected return of 5%, an
              intermediate option with a potential of up to 30%, and a
              high-potential option that could achieve a profit of up to 50% per
              month.
            </p>
          </div>

          {/* Cruz central */}
          <div className="flex justify-center items-center">
            <img src="/cruzverde.png" alt="Cross" className="w-30 h-30" />
          </div>

          {/* Card derecha */}
          <div className="border border-white/20 p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Performance Through
              <br />
              Market Cycles
            </h2>

            <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-md mx-auto">
              A decade of historical testing ensures superior reliability. From
              2015 to the present, we have observed strong trending cycles and
              extended sideways periods, and Apix Trade has weathered each
              market phase with remarkably little drawdown.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
