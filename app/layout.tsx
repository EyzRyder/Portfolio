import type { Metadata } from "next";
import { Poppins, Cherry_Bomb_One as Cherry } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-poppins",
});
const cherry = Cherry({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cherry",
});

export const metadata: Metadata = {
  title: "Bessi",
  description: "Portfolio de Desenvolvedor fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${cherry.variable} relative antialiased h-screen  w-full flex justify-center bg-zinc-100 `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
