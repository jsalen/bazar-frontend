import type { Metadata } from 'next';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { Search } from '@/components/Search';
import { IconBuildingStore, IconUserCircle } from '@tabler/icons-react';
import './globals.css';

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bazar Marketplace',
  description: 'Tiniest marketplace in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="max-w-[1140px] mx-auto pt-4 px-4 lg:px-6">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Link className="text-lg" href="/">
                Bazar
              </Link>
              <IconBuildingStore className="text-3xl" />
            </div>
            <div className="w-72">
              <Search />
            </div>
          </div>
          {/* 
          TODO: To be implemented in Backend
          <nav className="pt-3 flex justify-end">
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="flex gap-2 items-center py-2 px-3 bg-yellow-400 rounded-md"
                  href="/login"
                >
                  Login <IconUserCircle width={18} height={18} />
                </Link>
              </li>
            </ul>
          </nav> */}
        </header>
        <main className="mx-4">{children}</main>
      </body>
    </html>
  );
}
