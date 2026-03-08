import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'People RADAR Dashboard',
    description: 'HR Analytics Dashboard by Capture IT',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <div className="flex min-h-screen bg-background p-4 text-textMain">
                    <Sidebar />
                    <main className="flex-1 ml-[88px] max-w-[1500px] mx-auto w-full">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
