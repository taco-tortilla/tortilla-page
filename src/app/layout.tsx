import { Footer } from '@/components/Footer';
import { GlobalNavigation } from '@/components/GlobalNavigation';

import type { Metadata } from 'next';

import '../globals.css';

export const metadata: Metadata = {
  title: 'tortilla',
  description: 'This is a portfolio site of tortilla(Taisei Hasegawa)',
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
        <div className='min-h-screen p-5 tablet:py-20'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
