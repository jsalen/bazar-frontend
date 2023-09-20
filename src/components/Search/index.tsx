'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { SearchParams } from '@/utils/types';

export const Search = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { push } = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      push(`/items?${SearchParams.SEARCH}=${searchTerm}`);
    }
  };

  return (
    <form
      className="relative max-w-[440px] mx-auto"
      onSubmit={onSubmit}
      role="search"
    >
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <input
        className="pl-3 py-2 w-full rounded-md border border-flame focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flame"
        type="text"
        placeholder="Search Bazar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="absolute right-0 bottom-px h-auto py-2 px-3 rounded-r bg-flame">
        <IconSearch className="text-CustomBlack" />
      </button>
    </form>
  );
};
