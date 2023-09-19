import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/Components/AuthProvider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Authentication",
  description: "Learning Next Authentication"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <AuthProvider session={session}>
        <body className={`${inter.className} bg-zinc-950 text-slate-400`}>
          {children}
        </body>
      </AuthProvider>
    </html>
  )
};