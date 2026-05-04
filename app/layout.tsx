import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whenevr® — Design subscription for startups & teams",
  description:
    "A monthly design subscription for startups, creators, and teams who need work done without the wait.",
  openGraph: {
    title: "Whenevr® — Design subscription",
    description:
      "World-class design whenevr you need it. Social graphics, UX, pitch decks, web design, branding.",
    url: "https://whenevr.framer.website/",
    siteName: "Whenevr",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
