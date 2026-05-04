import Link from "next/link";

export default function FourOhFourPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#f5f5f5] px-6 py-24 text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#989898]">
        Error
      </p>
      <h1 className="mt-4 text-[clamp(3rem,10vw,5rem)] font-semibold tracking-[-0.04em] text-[#000]">
        404
      </h1>
      <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#5c5c5c]">
        This page doesn&apos;t exist — the same demo link used on the Framer
        template.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-[#000] px-8 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Back home
      </Link>
    </div>
  );
}
