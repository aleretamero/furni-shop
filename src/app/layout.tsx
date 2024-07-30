import type { Metadata } from 'next';
import { Inter, Saira } from 'next/font/google';
import './globals.css';

const saira = Saira({
  variable: '--font-saira',
  subsets: ['latin'],
  weight: ['400', '600'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'FurniShop',
  description: 'The best furniture shop in town',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className} ${inter.variable}`}>{children}</body>
    </html>
  );
}
