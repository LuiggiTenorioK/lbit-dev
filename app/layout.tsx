import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Navbar from "@/components/Navbar";

const fontClass = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luiggi Tenorio | Software Engineer",
  description: "Hi! I'm Luiggi, a Software Engineer with more than 5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <html lang="en" className="!scroll-smooth">
          <body className={`${fontClass.className} bg-gray-50 text-gray-900 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

            <div className="animate-pulse-long bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[5rem] h-[40rem] w-[38rem] rounded-full blur-[14rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
            <div className="animate-pulse-long bg-[#dbd7fb] absolute top-[-5rem] -z-10 left-[-35rem] h-[50rem] w-[50rem] rounded-full blur-[14rem] sm:w-[68.75rem] dark:bg-[#676394] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
            
            <Navbar/>

            {children}
            <ThemeSwitch />
          </body>
        </html>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
