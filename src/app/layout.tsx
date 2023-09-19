import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bazar Marketplace',
  description: 'Tiniest marketplace in the world',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="mx-4">{children}</main>
      </body>
    </html>
  );
}
