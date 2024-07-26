import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "Bank Hotel",
  description: "Bank Hotel Website by Ridwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
