import ItemDetail from '@/components/ItemDetail';
import { getItemById } from '@/utils';
import { Product } from '@/utils/types';
import React from 'react';

type ItemsParams = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: ItemsParams) {
  const { slug } = params;
  const item = await getItemById<Product>(slug);

  if (!item) {
    return (
      <div>Oops! Looks like the item you were looking for does not exists.</div>
    );
  }

  return (
    <section className="py-12">
      <ItemDetail {...item} />
    </section>
  );
}
