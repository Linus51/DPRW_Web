import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Inter, Black_Ops_One } from "next/font/google";

export const metadata = {
  title: "DPRW – War Thunder Kampfgruppe",
  description: "DPRW – Realistische Bodenschlachten | War Thunder",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const blackops = Black_Ops_One({ weight: "400", subsets: ["latin"], variable: "--font-blackops" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${blackops.variable} font-sans`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
