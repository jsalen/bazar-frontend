import { ListItem } from '@/components/ListItem';
import { Product, SearchParams } from '@/utils/types';
import { getItems } from '@/utils';
import { Heading } from '@/components/typography/Heading';

type Props = {
  searchParams: { [key in SearchParams]?: string };
};

export default async function Page({ searchParams }: Props) {
  const items = await getItems<Product>(searchParams.search);

  return (
    <div className="pt-6 max-w-[1140px] mx-auto">
      <Heading as="h1" className="mb-2">
        {searchParams ? 'Search Results' : null}
      </Heading>
      {items.length > 0 ? (
        items?.map((item) => <ListItem key={item.id} product={item} />)
      ) : (
        <p className="text-customBlack">No items found</p>
      )}
    </div>
  );
}
