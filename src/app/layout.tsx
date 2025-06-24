import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "GymBro",
    description: "Your premium ai fitness trainer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${geistMono.variable} antialiased`}>
                <ClerkProvider>{children}</ClerkProvider>
            </body>
        </html>
    );
}
