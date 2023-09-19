export async function getItemsBySearch<T>(
  searchTerm: string | undefined,
): Promise<T[]> {
  if (!searchTerm) {
    return [];
  }

  const res = await fetch(`${process.env.BAZAR_API}/items?q=${searchTerm}`);
  const data: T[] = await res.json();

  return data;
}
