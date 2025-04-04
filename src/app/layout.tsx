import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Cover from "@/app/components/cover"


import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tian Dev Lading Page🖱️",
  description: "Generated by Tian Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NavBar/>
      <Header/>
     
        {children}
      </body>
    </html>
  );
}
