import type { Metadata } from 'next';
import { Inter, Judson } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const judson = Judson({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-judson',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Clary - Beauty Clinic',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${judson.variable} overflow-x-hidden  relative bg-gray-200`}
            >
                {/* <div className="absolute md:-right-100 md:-top-100 right-0 -top-20 bg-beige w-[100px] h-[100px] md:w-[1000px] md:h-[1000px] rounded-full -z-40 blur-[100px]" /> */}
                {children}

                {/* <div className="absolute -left-50 bottom-0 bg-beige w-[700px] h-[500px] rounded-full -z-40 blur-[100px]" />
                <div className="absolute -right-50 bottom-0 bg-beige w-[700px] h-[300px] rounded-full -z-40 blur-[100px]" /> */}
            </body>
        </html>
    );
}
