import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeXifyAI — chat it. automate it.',
  description: 'NeXifyAI ist eine KI-gestützte Automatisierungsplattform. Chatte dich zur Produktivität.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
