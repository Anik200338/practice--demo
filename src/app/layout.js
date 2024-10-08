import localFont from "next/font/local";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Footer from "@/Components/shared/Footer";
import Navbar from "@/Components/shared/Navbar";
import AuthProvider from "@/services/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor",
  },
  description: "Car Reaper Workshop",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body
        className={inter.className}
        >
       <Suspense>
      <ToastContainer/>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
