import { Card } from '@/components/ListItem';
import { Product, SearchParams } from '@/utils/types';
import { getItems } from '@/utils';

type Props = {
  searchParams: { [key in SearchParams]?: string };
};

export default async function Page({ searchParams }: Props) {
  const items = await getItems<Product>(searchParams.search);

  return (
    <div className="pt-6 max-w-[1140px] mx-auto">
      <h1 className="text-3xl mb-2 text-customBlack">
        {searchParams ? 'Search Results' : ''}
      </h1>
      {items.length > 0 ? (
        items?.map((item) => <Card key={item.id} product={item} />)
      ) : (
        <p className="text-customBlack">No items found</p>
      )}
    </div>
  );
}
