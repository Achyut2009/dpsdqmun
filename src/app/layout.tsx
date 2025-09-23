import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DPS-DQ MUN",
  description: "An interschool MUN conference organised by the students and teachers of DPS-Modern Indian School for all high school students in Qatar.",
    openGraph: {
    title: "DPSDQMUN",
    description:
      "An interschool MUN conference organised by the students and teachers of DPS-Modern Indian School for all high school students in Qatar.",
    images: [
      {
        url: "/favicon.ico",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
