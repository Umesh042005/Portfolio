import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umesh Deshmukh | Full Stack Developer",
  description: "Portfolio of Umesh Deshmukh, a Full Stack Developer specializing in Java, MERN stack, and AI workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full bg-[var(--background)] text-slate-900 dark:text-zinc-50 relative selection:bg-teal-300 selection:text-teal-900 overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-[0.3] dark:opacity-[0.15] pointer-events-none"></div>
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/20 dark:bg-teal-500/10 blur-[120px] pointer-events-none z-[-1]"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 dark:bg-blue-500/10 blur-[120px] pointer-events-none z-[-1]"></div>

        <main className="relative w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
