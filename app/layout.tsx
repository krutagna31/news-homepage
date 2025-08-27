import type { Metadata } from "next";
import { ThemeProvider } from "@/context/theme-provider";
import localFont from "next/font/local";
import { Header } from "@/components/sections";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
  preload: false,
});

export const metadata: Metadata = {
  title: "News Homepage",
  description: "This is the solution to news homepage challenge on frontend mentor",
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
