import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'vasqiart — Minimal, privacy-first web tools',
  description: 'Building small, useful tools that respect your privacy. Built in Tokyo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
