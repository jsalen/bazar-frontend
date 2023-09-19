import { Search } from '@/components/Search';

export default function Home() {
  return (
    <section className="pt-32">
      <h1 className="text-4xl text-center text-customOlive font-bold lg:text-5xl">
        Bazar Online
      </h1>
      <Search />
    </section>
  );
}
