'use client';

import Image from 'next/image';

type WorksInfo = {
  title: string;
  image: string;
  tech: Array<string>;
  description: string;
};

function handleClick(title: string) {
  console.log(title);
}

export const WorkItem = ({ title, image, tech, description }: WorksInfo) => (
  <button
    type='button'
    onClick={() => handleClick(title)}
    className='rounded-lg bg-neutral-500/80 p-5  transition-transform duration-200 hover:scale-105'
  >
    <div className='h-auto rounded-lg bg-neutral-200'>
      <Image
        src={image}
        width={500}
        height={250}
        alt={title}
        loading='lazy'
        className='w-full rounded-lg object-cover'
      />
    </div>
    <div className='pt-5'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <div className='flex flex-wrap gap-2 pt-5'>
        {tech.map((item, index) => (
          <p
            key={index}
            className='rounded-full bg-zinc-300/50 px-2 py-1 text-sm'
          >
            #{item}
          </p>
        ))}
      </div>
      <p className='text-lg font-semibold'>{description}</p>
    </div>
  </button>
);
