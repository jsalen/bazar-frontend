import Image from 'next/image';
import { Rating } from '../Rating';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const Card = ({ product }: { product: Product }): JSX.Element => {
  const priceWithDiscount = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);
  const stockIsLow = product.stock < 5;

  return (
    <article className="flex gap-2 mb-2 rounded-md border-neutral-100 border-solid border">
      <div className="relative min-w-[152px] bg-lightGray flex flex-col justify-center">
        <Image
          alt={product.title}
          className="border-none object-cover"
          src={product.thumbnail}
          width={152}
          height={152}
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-1">
        <h2 className="text-base font-normal text-primaryText">
          {product.title}
        </h2>
        <p className="font-light text-sm line-clamp-2">{product.description}</p>
        <footer>
          <div className="flex items-center gap-1">
            <span className="text-cyan-600 text-xs font-normal">
              {product.rating.toFixed(1)}
            </span>
            <Rating
              hiddenLabel={true}
              readOnly={true}
              size="small"
              value={product.rating}
            />
          </div>
          <div>
            <p className="pt-1 text-xl text-customBlack">
              <span className="text-xs align-middle">$</span>
              {priceWithDiscount}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs text-lightText font-light">
                Typical price:{' '}
                <span className="line-through">{product.price}€</span>
              </p>
            )}
          </div>
          {stockIsLow && (
            <p className="text-red-500 text-xs font-light">
              Only {product.stock} in stock - order soon
            </p>
          )}
        </footer>
      </div>
    </article>
  );
};
