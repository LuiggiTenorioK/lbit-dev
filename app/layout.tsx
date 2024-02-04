import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const fontClass = Roboto({ 
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Luiggi Tenorio | Software Engineer",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontClass.className}>{children}</body>
    </html>
  );
}
