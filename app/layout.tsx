import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game of Thrones",
  description: "Enter the world of Westeros",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
