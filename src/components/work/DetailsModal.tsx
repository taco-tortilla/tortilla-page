import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel={title}
      className='fixed left-1/2 top-1/2 max-h-[70%] w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-lg border-none bg-[rgba(127,127,130,0.95)] p-3 tablet:w-1/2 tablet:p-6'
    >
      <div className='flex justify-end pb-2 tablet:pb-5'>
        <button onClick={handleClose}>✗</button>
      </div>
      <div className='flex h-auto justify-center'>
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={title}
          loading='lazy'
          className='w-full rounded-lg object-cover'
        />
      </div>
      <div className='pt-5'>
        <h1 className='text-center text-xl font-bold'>{title}</h1>
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
        <p className='pt-5 text-sm'>{description}</p>
      </div>
      {/* </div> */}
    </Modal>
  );
}
