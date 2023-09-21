'use client';
import { MediaQueries, Product } from '@/utils/types';
import React from 'react';
import { Rating } from '../Rating';
import Image from 'next/image';
import { getPriceWithDiscount } from '@/utils';
import { Heading } from '../typography/Heading';
import { Accordion } from '../Accordion';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { Chip } from '@mui/material';
import Link from 'next/link';

export default function ItemDetail({
  brand,
  category,
  description,
  discountPercentage,
  images,
  price,
  rating,
  stock,
  thumbnail,
  title,
}: Product): JSX.Element {
  const [selectedImage, setSelectedImage] = React.useState(thumbnail);
  const { windowWidth } = useWindowWidth();
  const isDesktop = windowWidth > MediaQueries.DESKTOP;

  const priceWithDiscount = getPriceWithDiscount({ price, discountPercentage });
  const stockIsLow = stock < 5;

  const handleImageSelection = (image: string): void => {
    setSelectedImage(image);
  };

  return (
    <article className="max-w-[1140px] mx-auto pt-4 border-t border-lightGray">
      <div className="lg:flex lg:flex-row-reverse lg:gap-3 lg:justify-end">
        {!isDesktop && (
          <div className={`flex gap-2 ${!isDesktop && 'pb-4'}`}>
            <Link href={`/items?search=${category}`} passHref>
              <Chip
                className="text-customOlive border-customOlive capitalize hover:bg-customOlive hover:text-white transition-all duration-200 ease-in-out cursor-pointer"
                color="primary"
                variant="outlined"
                size="medium"
                label={category}
              />
            </Link>
            <Link href={`/items?search=${brand}`}>
              <Chip
                className="text-customOlive border-customOlive capitalize hover:bg-customOlive hover:text-white transition-all duration-200 ease-in-out cursor-pointer"
                color="primary"
                variant="outlined"
                size="medium"
                label={brand}
              />
            </Link>
          </div>
        )}
        <div className="pb-3 flex justify-between flex-row-reverse items-center lg:flex-col-reverse lg:justify-end lg:items-start lg:gap-2 lg:pl-4">
          {isDesktop && (
            <div className="lg:pt-4 lg:flex lg:flex-col lg:gap-2">
              <Heading as="h2" className="lg:text-xl">
                Product Description
              </Heading>
              <p className="text-base font-light">{description}</p>
            </div>
          )}
          <div className="flex items-center justify-end">
            <Rating
              hiddenLabel={false}
              label={rating.toFixed(1)}
              readOnly={true}
              size="small"
              value={rating}
            />
          </div>
          <Heading as="h1">{title}</Heading>
          {isDesktop && (
            <div className="flex gap-2">
              <Link href={`/items?search=${category}`} passHref>
                <Chip
                  className="text-customOlive border-customOlive capitalize hover:bg-customOlive hover:text-white transition-all duration-200 ease-in-out cursor-pointer"
                  color="primary"
                  variant="outlined"
                  size="medium"
                  label={category}
                />
              </Link>
              <Link href={`/items?search=${brand}`}>
                <Chip
                  className="text-customOlive border-customOlive capitalize hover:bg-customOlive hover:text-white transition-all duration-200 ease-in-out cursor-pointer"
                  color="primary"
                  variant="outlined"
                  size="medium"
                  label={brand}
                />
              </Link>
            </div>
          )}
        </div>
        <div className="relative w-full max-w-[1024px] h-[420px] bg-lightGray flex flex-col justify-center shadow lg:max-w-[467px]">
          <Image
            alt={title}
            className="border-none object-contain"
            src={selectedImage}
            fill={true}
          />
        </div>
        <div className="relative py-3 flex flex-wrap gap-2 w-full lg:max-w-[80px] lg:flex-col lg:py-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full max-w-[76px] h-[76px] bg-lightGray flex flex-col justify-center shadow"
            >
              <Image
                alt={title}
                className="border-none object-contain cursor-pointer"
                src={image}
                fill={true}
                onClick={() => handleImageSelection(image)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 pb-3 lg:flex lg:justify-end">
        <p className="text-2xl">{priceWithDiscount}</p>
      </div>
      <div className="py-5 border-y-2 border-lightGray">
        {stockIsLow && (
          <p className="pb-2 text-red-500 text-sm font-bold">
            Only {stock} in stock - order soon.
          </p>
        )}
        <div className="flex flex-col gap-3 items-center justify-end lg:flex-row">
          <button className="w-full py-3 bg-yellow-400 rounded-3xl lg:text-lg lg:max-w-[220px]">
            Add to Cart
          </button>
          <button className="w-full bg-flame py-3 rounded-3xl lg:text-lg lg:max-w-[220px]">
            Buy Now
          </button>
        </div>
      </div>
      {!isDesktop && (
        <div className="pt-4">
          <Accordion description={description} heading="Product Description" />
        </div>
      )}
    </article>
  );
}
