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
  title: "Bessi Portfolio",
  description:
    "Descubra as habilidades de um desenvolvedor freelancer apaixonado por transformar ideias em realidade. Aqui, você encontrará uma coleção diversificada de projetos que demonstram minha expertise em desenvolvimento web e aplicativos móveis. Estou disponível para novos trabalhos e ansioso por desafios criativos. Entre em contato para discutir suas necessidades e começar a criar hoje mesmo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${cherry.variable} relative antialiased
                    h-screen w-full flex justify-center bg-zinc-100
                    dark:bg-zinc-800 overflow-x-hidden`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
