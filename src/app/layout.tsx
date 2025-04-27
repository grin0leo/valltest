import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from '@/app/providers/QueryProvider';


export const metadata: Metadata = {
  title: "Valltest",
  description: "MVP 1.1 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
