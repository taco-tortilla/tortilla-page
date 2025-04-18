import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect } from 'react';
import Modal from 'react-modal';

import { ProductInfo } from '@/types/works.types';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedProduct: ProductInfo;
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(34, 34, 34, 0.8)',
  },
};

export function DetailsModal({ isOpen, setIsOpen, selectedProduct }: Props) {
  const { title, image, tech, description } = selectedProduct;
  function handleClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel={title}
      ariaHideApp={false}
      className='fixed left-1/2 top-1/2 max-h-[70%] w-4/5 -translate-x-1/2 -translate-y-1/2 overflow-auto overscroll-none rounded-lg border-none bg-[rgba(127,127,130,0.95)] p-3 tablet:w-2/5 tablet:p-6 laptop:w-2/6'
    >
      <div className='flex justify-end pb-2 tablet:pb-5'>
        <span
          onClick={handleClose}
          className='i-ri-close-fill text-xl transition-transform duration-100 hover:scale-125 hover:cursor-pointer laptop:text-2xl'
        />
      </div>
      <div className='flex h-auto justify-center'>
        <div className='aspect-video w-full rounded-lg bg-neutral-200'>
          <Image
            src={image}
            width={1920}
            height={1080}
            alt={title}
            className='aspect-video w-full rounded-lg object-cover'
          />
        </div>
      </div>
      <div className='pt-5'>
        <h1 className='text-center text-xl font-bold'>{title}</h1>
        {selectedProduct.links !== undefined && (
          <div className='flex flex-wrap items-center justify-center gap-5 pt-3 laptop:pt-5'>
            {selectedProduct.links?.github && (
              <a
                href={selectedProduct.links.github}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:cursor-pointer'
              >
                <span className='i-ri-github-fill text-2xl transition-transform duration-100 hover:scale-110 tablet:text-4xl' />
              </a>
            )}
            {selectedProduct.links?.web && (
              <a
                href={selectedProduct.links.web}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:cursor-pointer'
              >
                <span className='i-ri-window-2-fill text-xl transition-transform duration-100 hover:scale-110  tablet:text-3xl' />
              </a>
            )}
          </div>
        )}
        <div className='flex flex-wrap justify-center gap-2 pt-3 laptop:pt-5'>
          {tech.map((item, index) => (
            <p
              key={index}
              className='rounded-full bg-zinc-300/50 px-2 py-1 text-xs tablet:text-sm'
            >
              #{item}
            </p>
          ))}
        </div>
        <p className='whitespace-pre-wrap pt-8 text-sm'>{description}</p>
      </div>
    </Modal>
  );
}
