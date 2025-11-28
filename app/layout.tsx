import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MuiThemeProvider } from "@/components/ui/MuiThemeProvider";
import { ReactNode } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Omni Asset II | Apex Capital",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn">
      <body className="min-h-screen">
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
