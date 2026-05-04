const names = [
    "RelayOne",
    "Minos",
    "Haptik",
    "Octave",
    "Nimbus",
    "Arc",
    "North",
    "Pulse",
  ];
  
  export function LogoStrip() {
    return (
      <div className="border-b border-[#0000000f] bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[1200px] px-5 md:px-9">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-50 grayscale md:gap-x-14">
            {names.map((n) => (
              <span
                key={n}
                className="text-[15px] font-semibold tracking-tight text-[#1c1c1c] transition-opacity hover:opacity-80"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  