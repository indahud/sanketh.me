import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoAnimaginary from '@/images/logos/animaginary.svg';
import logoCosmos from '@/images/logos/cosmos.svg';
import logoHelioStream from '@/images/logos/helio-stream.svg';
import OpenrApp from '@/images/logos/openr_app.svg';
import getUpiLink from '@/images/logos/getupilink.svg';
import { CLOUDFLARE_BUCKET_PUBLIC } from '@/lib/common';

const projects = [
  {
    name: 'App link Opener',
    description:
      'Web app to open links from websites like Youtube, Spotify, Amazon and others into their mobile applications. It supports all platforms like Android, IOS or browsers.',
    link: { href: 'https://udgam-gifts-prod.vercel.app', label: 'openr.app' },
    logo: `${CLOUDFLARE_BUCKET_PUBLIC}/openr_app.svg`,
  },
  {
    name: 'Upi Link Generator',
    description:
      'Users can easily accpet UPI payments with single link. It doesnt need any registration.',
    link: { href: 'https://getupilink.com', label: 'getupilink' },
    logo: `${CLOUDFLARE_BUCKET_PUBLIC}/getupilink.svg`
  },
  {
    name: 'Gift Packaging Website',
    description:
      'Ecommerce like Website for Diwali gift hampers packaging business. It displays curated list of gift hampers, their images and option to order it.',
    link: { href: 'https://udgamgifts.com', label: 'udgam gifts' },
    logo: `${CLOUDFLARE_BUCKET_PUBLIC}/udgam_logo.svg`
  },
  {
    name: 'Smoke Log',
    description:
      'Mobile app to keep track of daily cigarettes smoking. Detailed weekly / monthly insights with barcharts and heatmaps.',
    link: { href: '/', label: 'smoke log' },
    logo: `${CLOUDFLARE_BUCKET_PUBLIC}/adaptive-icon-2.webp`
  },
  //   {
  //     name: 'HelioStream',
  //     description:
  //       'Real-time video streaming library, optimized for interstellar transmission.',
  //     link: { href: '#', label: 'github.com' },
  //     logo: logoHelioStream,
  //   },
  //   {
  //     name: 'cosmOS',
  //     description:
  //       'The operating system that powers our Planetaria space shuttles.',
  //     link: { href: '#', label: 'github.com' },
  //     logo: logoCosmos,
  //   },
  //   {
  //     name: 'OpenShuttle',
  //     description:
  //       'The schematics for the first rocket I designed that successfully made it to orbit.',
  //     link: { href: '#', label: 'github.com' },
  //     logo: logoOpenShuttle,
  //   },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I've worked on these projects in my free time. They are getting heavy user traction. I am open for any suggestions."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {/* <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              /> */}
              {/* <img src={project.logo} alt={project.name} className="h-8 w-8" /> */}
              <img
                src={project.logo}
                className="h-8 w-8"
                alt="avatar"
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
