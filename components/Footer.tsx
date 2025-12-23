export default function Footer() {
  return <>
     <footer className="min-h-screen bg-black text-white flex items-center justify-between px-10 py-20 relative">
        {/* Left side */}
        <div className="max-w-xl space-y-6">
          <div className="flex flex-col items-start space-y-4">
          <img src="/logoapixtrade.png" alt="Logo" className="w-40 h-35px" />
          </div>

          <p className="text-sm leading-relaxed text-gray-300">
            Our mission is to offer investors a competitive advantage in the
            market through intelligent information and advanced AI-powered
            analysis, complemented by the benefits of our strategic alliance
            with top brokers to optimize their commissions and ensure the legal
            security of their transactions.
          </p>

          {/* Circles */}
          <div className="flex gap-6 pt-4">
            {["A", "P", "I", "X"].map((letter) => (
              <div
                key={letter}
                className="w-20 h-20 border border-green-400 rounded-full flex items-center justify-center text-lg tracking-widest"
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col text-right space-y-10 text-xl tracking-widest">
          <a
            href="#"
            className="border-b border-gray-700 pb-4 hover:text-green-400"
          >
            HOME
          </a>
          <a
            href="/"
            className="border-b border-gray-700 pb-4 hover:text-green-400"
          >
            AI
          </a>
          <a
            href="#"
            className="border-b border-gray-700 pb-4 hover:text-green-400"
          >
            TRADE
          </a>
          <a
            href="#"
            className="border-b border-gray-700 pb-4 hover:text-green-400"
          >
            PRICING
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t border-gray-700"></div>
      </footer>
  </>;
}
