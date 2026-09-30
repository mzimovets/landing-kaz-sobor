import type { Metadata } from "next";
import { Monomakh } from "next/font/google";
import "./globals.css";

const monomakh = Monomakh({
  variable: "--font-monomakh",
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Всё о таинстве Крещения",
  description:
    "Возраст крещения, огласительные беседы, выбор крёстного, молитвы и всё необходимое для таинства Крещения в православной традиции.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${monomakh.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
