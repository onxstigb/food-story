import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/transitions/PageTransition";

export const metadata: Metadata = {
    title: "The Shared Table",
    description:
        "An editorial food experience blending storytelling, design, and modern recipes.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />

                <PageTransition>
                    <main className="pt-24">{children}</main>
                </PageTransition>

                <Footer />
            </body>
        </html>
    );
}