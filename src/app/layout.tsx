import { Footer } from '@/components/Footer';
import { GlobalNavigation } from '@/components/GlobalNavigation';

import type { Metadata } from 'next';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Tortilla',
  description: 'This is a websit with a portfolio of tortilla(Taisei Hasegawa)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <GlobalNavigation />
        <div className='p-5 tablet:p-20'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
