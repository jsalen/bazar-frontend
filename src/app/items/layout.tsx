import { Search } from '@/components/Search';
import React from 'react';

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>
        <Search />
      </section>
      {children}
    </>
  );
}
