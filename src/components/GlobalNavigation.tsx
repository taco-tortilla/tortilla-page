import Link from 'next/link';

export function GlobalNavigation() {
  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className='flex min-h-full items-center text-sm font-semibold tablet:text-xl'>
      {children}
    </li>
  );

  return (
    <div>
      <nav>
        <ul className='flex gap-3 p-5 text-center tablet:gap-5 tablet:px-20'>
          <li className='mr-auto text-lg font-bold tablet:text-4xl'>
            <Link href='/'>tortilla</Link>
          </li>
          <ListItem>
            <Link href='/about'>About</Link>
          </ListItem>
          <ListItem>
            <Link href='/work'>Work</Link>
          </ListItem>
        </ul>
      </nav>
    </div>
  );
}
