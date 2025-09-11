import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "@/context/ModalContext";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import GlobalModal from "@/components/GlobalModal";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Retiro de Bienestar",
  description: "Una experiencia de transformación consciente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <ModalProvider>
        <Navbar />
          {children}
          <CookieConsentBanner />
          <GlobalModal />
          <CustomCursor />
        </ModalProvider>
      </body>
    </html>
  );
}
