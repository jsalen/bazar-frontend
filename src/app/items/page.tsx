import { Card, Product } from '@/components/ListItem';
import { Search, SearchParams } from '@/components/Search';
import { getItemsBySearch } from '@/utils/fetchResources';

type Props = {
  searchParams: { [key in SearchParams]?: string };
};

export default async function Page({ searchParams }: Props) {
  const items = await getItemsBySearch<Product>(searchParams.search);

  return (
    <div className="pt-6">
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
