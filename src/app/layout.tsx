import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/utils";
import ModalPortal from "@/components/modal/ModalPortal";
import ToastPortal from "@/components/toast/ToastPortal";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(pretendard.variable)}>
        {children}
        <ModalPortal />
        <ToastPortal />
      </body>
    </html>
  );
}
