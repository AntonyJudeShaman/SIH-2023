// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const title = "E-Waste Facility Locator";
const description =
  "This is an ewaste facility locator that uses Next-Auth for simple email + password login and a Postgres database to persist the data and location features to identify user location and display the nearest located e-waste recycling facility .";

export const metadata: Metadata = {
  title,
  description,
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={fontSans.variable}>
        <Toaster />
        <Suspense fallback="Loading...">
          {/* @ts-expect-error Async Server Component */}
          <AuthStatus />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
