'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ProductInfo } from '@/types/works.types';

import { DetailsModal } from './DetailsModal';

export function WorkItem({ productInfo }: { productInfo: ProductInfo }) {
  const { title, image, tech } = productInfo;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo>({
    title: '',
    image: '',
    tech: [],
    description: '',
  });

  function handleClick(productInfo: ProductInfo) {
    setSelectedProduct(productInfo);
    setIsOpen(true);
  }

  return (
    <>
      <button
        type='button'
        onClick={() => handleClick(productInfo)}
        className='flex flex-col items-center rounded-lg bg-neutral-500/80 p-5 transition-transform duration-200 hover:scale-105'
      >
        <div className='aspect-video w-full rounded-lg bg-neutral-200'>
          <Image
            src={image}
            width={1920}
            height={1080}
            alt={title}
            className='aspect-video w-full rounded-lg object-cover '
          />
        </div>
        <div className='pt-5'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <div className='flex flex-wrap justify-center gap-2 pt-5'>
            {tech.map((item, index) => (
              <p
                key={index}
                className='rounded-full bg-zinc-300/50 px-2 py-1 text-sm'
              >
                #{item}
              </p>
            ))}
          </div>
        </div>
      </button>
      <DetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedProduct={selectedProduct}
      />
    </>
  );
}
