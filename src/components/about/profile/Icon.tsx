import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  url: string;
};

export function Icon({ children, url }: Props) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center justify-center hover:cursor-pointer'
    >
      {children}
    </a>
  );
}
