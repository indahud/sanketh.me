import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Sanketh. I live in Pune, India.',
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hiya, I&apos;m Sanket Shete. I live In Pune, India.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p className="text-red-400 font-bold">
              As far back as I can remember I always wanted to be a Developer
              😅.
            </p>
            <p>
              I have worked as a full stack developer for 3 Years in{' '}
              <span className="font-bold">Web3</span> Startup, where I
              contributed to various projects, including an{' '}
              <span className="font-bold">NFT marketplace</span> and an
              enterprise NFT platform
            </p>
            <p>
              Team was relatively small so I had to wear lot of hats. Worked
              with different things like{' '}
              <span className="font-bold">
                frontend, backend, Devops, automation and testing.
              </span>
            </p>
            <p>
              I am good with technolgies like{' '}
              <span className="font-bold">
                Node.js, Express.js, Typescript, Next.js, React.js, MongoDB,
                PostgreSQL, Elastic Search, Docker
              </span>
              .
            </p>
            <p>
              In my free time, I like to tinker with new techhnologies and side
              projects. Some of them getting user traction.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/0xsanketh" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://instagram.com/sanketh_shete"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/indahud"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/sanket-shete-15064318b"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@sanketh.me"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@sanketh.me
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
