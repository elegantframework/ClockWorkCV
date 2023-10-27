import React from 'react';
import Image from 'next/image';
import UnifiedFramework from '@/components/home/UnifiedFramework';
import { Footer } from '@/components/home/Footer';
import NextLink from 'next/link';
import { NavItems, NavPopover } from '@/components/Header';
import styles from './index.module.css';
import clsx from 'clsx';
import { ThemeToggle } from '@/components/ThemeToggle';
import socialCardLarge from '@/img/social-card-large.jpg';
import Config from '@/utils/Config/Config';
import MetaTitle from '@/utils/Meta/MetaTitle';
import Logo from '@/components/Logos/Logo/Logo';
import Link from 'next/link';

Home.layoutProps = {
  meta: {
    ogImage: socialCardLarge.src,
    title: MetaTitle(Config('app.name'), Config('app.tagline'))
  },
  stickyHeader: false
};

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
      </div> 
    </>
  )
};

/**
 * Render a header component for the splash page
 * @returns A Header component
 */
const Header = () => {
  return (
    <React.Fragment>
      <header className="relative">
        <div className="px-4 sm:px-6 md:px-8">
          <div
            className={clsx(
              'absolute inset-0 bottom-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]',
              styles.beams
            )}
          >
            <div
              className="absolute inset-0 bg-[bottom_1px_center] dark:bg-bottom dark:border-b dark:border-slate-100/5"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
              }}
            />
          </div>
          <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
            <Logo className="w-auto h-7" />
            <div className="flex items-center">
              <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" />
              <div className="hidden md:flex items-center">
                <nav>
                  <ul className="flex items-center gap-x-8">
                    <NavItems />
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
          <main className="flex min-h-[92vh] flex-col items-center justify-between p-0 pt-24 md:p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
              
            </div>
            <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left z-10 mt-16 lg:mt-0">
             
            </div>
          </main>
        </div>
      </header>
    </React.Fragment>
  );
};