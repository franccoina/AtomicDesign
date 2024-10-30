import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ClientLayout from "@/ui/layouts/ClientLayout";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Vac-N-Comp",
  description: "Look for companies and vacants",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={urbanist.className}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
        <ToastContainer />
      </body>
    </html>
  );
}
