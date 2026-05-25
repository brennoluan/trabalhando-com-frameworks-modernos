import type { Metadata } from "next";
import { Fjalla_One, Work_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fjallaOne = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fjalla",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Culturama | Descruba o melhor da cultura",
  description: "Descruba o melhor da cultura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fjallaOne.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
