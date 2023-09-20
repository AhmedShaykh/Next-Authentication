import AuthProvider from "@/Components/AuthProvider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Authentication",
  description: "Learning Next Authentication"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} bg-zinc-950 text-slate-400`}>
          {children}
        </body>
      </AuthProvider>
    </html>
  )
};