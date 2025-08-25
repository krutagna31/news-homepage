import type { Metadata } from "next";
import { ThemeProvider } from "@/context/theme-provider";
import localFont from "next/font/local";
import { Header } from "@/components/sections";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
});

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "A Next.js template with shadcn/ui and tailwind css installed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
