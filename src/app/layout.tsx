import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Baskerville, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-subheading",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Understanding Tree™",
    template: "%s | The Understanding Tree™",
  },
  description:
    "The Understanding Tree™ brings together education, advocacy, and practical resources to help children, families, educators, and professionals better understand how people learn, communicate, connect, and grow.",
  metadataBase: new URL("https://theunderstandingtree.com"),
  openGraph: {
    title: "The Understanding Tree™",
    description: "Understanding changes everything.",
    siteName: "The Understanding Tree™",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${libreBaskerville.variable} ${lora.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
