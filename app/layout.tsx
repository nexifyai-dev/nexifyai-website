import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeXifyAI — chat it. automate it.',
  description: 'NeXifyAI is an AI-powered automation platform that lets you chat your way to productivity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
