import { Allura, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Hannah Thompson Photo Co.",
  description:
    "Hannah Thompson Photo Co. — wedding and portrait photography. [TBD]",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${allura.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-cream font-body text-moss antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
