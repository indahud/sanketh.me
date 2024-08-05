import { type Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Sanketh',
    default: 'Sanketh - Software Developer, Indie Hacker',
  },
  description: 'I’m Sanket, a software developer based in PUne, India.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
