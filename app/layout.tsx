import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Logo from "@/public/outline-logo.svg";

export const metadata: Metadata = {
  metadataBase: new URL("https://mithrilai.xyz"),
  title: {
    default: "Mithril AI",
    template: `%s | Mithril AI`,
  },
  description: "Open Science AI Research Lab",
  openGraph: {
    images: "/opengraph.png",
    title: "Mithril AI",
    description: "Open Science AI Research Lab",
    url: "https://mithrilai.xyz",
    siteName: "Mithril AI",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "MithrilAI",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="relative">
        <div className="px-8 py-4 md:px-16 md:py-10">
          <Navbar />
          <div className="absolute right-0 bottom-0 -z-10">
          <Image
            src={Logo}
            alt="Mithril AI Logo"
            className="mr-16"
            width={800}
            height={600}
            priority
          />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
