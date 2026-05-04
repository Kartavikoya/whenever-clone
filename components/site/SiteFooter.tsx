import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#f0f0f0]">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-9 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-baseline gap-0.5 text-[15px] font-semibold text-[#000]">
              Whenevr
              <span className="text-[10px] font-medium text-[#7c7c7c]">®</span>
            </Link>
            <p className="mt-4 text-[15px] leading-relaxed text-[#7c7c7c]">
              World-class design when you need it — without the overhead of a
              full-time hire.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-10 gap-y-4 text-[14px] font-medium">
            <Link
              href="#pricing"
              className="text-[#7c7c7c] transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#989898]"
            >
              Pricing
            </Link>
            <Link
              href="#blog"
              className="text-[#7c7c7c] transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#989898]"
            >
              Blog
            </Link>
            <Link
              href="https://whenevr.framer.website/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c7c7c] transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#989898]"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://whenevr.framer.website/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c7c7c] transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#989898]"
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[#00000012] pt-8 md:mt-14 md:flex-row md:items-center">
          <p className="text-[13px] text-[#989898]">
            © {new Date().getFullYear()} Whenevr. Clone for portfolio purposes.
          </p>
          <a
            href="https://www.framer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[#7c7c7c] underline decoration-[#dcdcdc] underline-offset-4 transition-colors hover:text-[#000]"
          >
            Create a free website with Framer
          </a>
        </div>
      </div>
    </footer>
  );
}
