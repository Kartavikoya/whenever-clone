import Image from "next/image";
import Logo1 from "@/public/logos/logo1.svg";
import Logo2 from "@/public/logos/logo2.svg";
import Logo3 from "@/public/logos/logo3.svg";
import Logo4 from "@/public/logos/logo4.svg";
import Logo5 from "@/public/logos/logo5.svg";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

export function LogoStrip() {
  return (
    <section className="bg-[#f5f5f5] pb-10 md:pb-14">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">

        <p className="mb-6 text-[12px] font-medium text-[#989898]">
          Trusted by the biggest brands worldwide
        </p>

       <div className="relative flex items-center gap-10 overflow-hidden p-9 
  [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">

          <div className="flex w-max gap-12 animate-marquee" style={{ willChange: "transform" }}>

            {[...logos, ...logos, ...logos].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt=""
                width={120}
                height={24}
                className="h-6 w-auto opacity-60 grayscale shrink-0"
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}