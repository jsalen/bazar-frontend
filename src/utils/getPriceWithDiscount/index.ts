type GetPriceWithDiscount = {
  price: number;
  discountPercentage: number;
  locale?: string;
};

export function getPriceWithDiscount({
  price,
  discountPercentage,
  locale = 'en-US',
}: GetPriceWithDiscount): string {
  return Number(
    (price - (price * discountPercentage) / 100).toFixed(2),
  ).toLocaleString(locale ?? 'en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
