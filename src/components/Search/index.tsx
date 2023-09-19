'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Search = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { push } = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      push(`/items?search=${searchTerm}`);
    }
  };

  return (
    <form className="relative pt-4 max-w-[440px] mx-auto" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <input
        className="pl-3 py-2 w-full rounded-md border border-flame focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flame"
        type="text"
        placeholder="iPhone 9"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="absolute right-0 bottom-px h-auto py-2 px-3 text-white rounded-r bg-flame">
        Search
      </button>
    </form>
  );
};
