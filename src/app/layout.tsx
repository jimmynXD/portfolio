import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'James Nguyen | Senior UX Engineer',
  description:
    'Portfolio showcasing my work as a Senior UX Engineer, specializing in design systems, frontend architecture, and developer experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth dark'>
      <body
        className={`${outfit.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <div className='min-h-screen'>{children}</div>
      </body>
    </html>
  );
}
