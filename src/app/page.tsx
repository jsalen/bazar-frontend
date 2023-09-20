import { Card } from '@/components/ListItem';
import { getItems } from '@/utils';
import { Product } from '@/utils/types';

export default async function Home() {
  const featuredProducts = await getItems<Product>();
  const parsedFeaturedProducts = featuredProducts.slice(0, 3);

  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32">
        <h1 className="text-4xl text-center text-customOlive font-bold lg:text-5xl">
          Bazar Online
        </h1>
        <p className=" pt-3 text-lg max-w-[640px] mx-auto text-customOlive text-center">
          Bazar Online offers unique, eclectic products from around the world.
          Find handmade crafts, vintage clothing, and one-of-a-kind
          collectibles, supporting small businesses and independent artists.
        </p>
      </section>
      <section className="max-w-[1140px] mx-auto">
        <h2 className="text-3xl text-center">Featured Products</h2>
        <div className="py-8 flex flex-col gap-3 lg:flex-row">
          {parsedFeaturedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
