import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "20 Receitas Caseiras Balanceadas para Gatos | Alimentação Natural Felina",
  description: "Descubra 20 receitas caseiras nutricionalmente balanceadas para uma alimentação natural e saudável do seu gato. Ingredientes acessíveis e passo a passo fácil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body
        className={`${poppins.variable} antialiased overflow-x-hidden`}
        style={{ backgroundColor: "#FEF5E6" }}
      >
        {children}
      </body>
    </html>
  );
}
