
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "voicemind-ai",
  description: "Real-time Voice Recognition Smart AI Responses Smart AI Responses Web-based Voice Assistant Secure & User-Friendly Interface",
   icons: {
    icon: [
      {
        rel: "icon",
        url: "/image.png",
      },
      {
        rel: "apple-touch-icon",
        url: "/image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
        {children}
        </MantineProvider>
        
      </body>
    </html>
  );
}
