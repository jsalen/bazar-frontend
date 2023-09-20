import { ListItem } from '@/components/ListItem';
import { Heading } from '@/components/typography/Heading';
import { getItems } from '@/utils';
import { Product } from '@/utils/types';

export default async function Home() {
  const featuredProducts = await getItems<Product>();
  const parsedFeaturedProducts = featuredProducts.slice(0, 3);

  return (
    <>
      <section className="pt-24 pb-16 lg:pt-32">
        <Heading as="h1" className="text-center text-4xl lg:text-5xl">
          Bazar Online
        </Heading>
        <p className=" pt-3 text-lg max-w-[640px] mx-auto text-customOlive text-center">
          Bazar Online offers unique, eclectic products from around the world.
          Find handmade crafts, vintage clothing, and one-of-a-kind
          collectibles, supporting small businesses and independent artists.
        </p>
      </section>
      <section className="max-w-[1140px] mx-auto border-t border-t-gray-200 pt-8">
        <Heading as="h2" className="text-center">
          Featured Products
        </Heading>
        <div className="py-8 flex flex-col gap-7 lg:flex-row">
          {parsedFeaturedProducts.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
