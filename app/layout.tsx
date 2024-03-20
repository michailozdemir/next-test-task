import type { Metadata } from "next";
import { nunito } from "@/components/ui/Fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next - Text Task",
  description: "Next.js page with Tailwind CSS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
