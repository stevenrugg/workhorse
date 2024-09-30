import UnstyledLink from '@/components/atoms/UnstyledLink';
import { APP_ROUTE } from '@/constant/route';
import { twclsx } from '@/libs/twclsx';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav className={twclsx(
      'isolate aspect-auto accent-transparent bg-white shadow-lg dark:shadow-white dark:ring-1 dark:ring-white/5 ring-1 ring-black/5 rounded-r-full dark:bg-black/20 dark:bg-opacity-30 rounded-l-full backdrop-blur-md backdrop-filter dark:backdrop-blur dark:backdrop-filter top-0',
      'top-0 md:flex items-center space-x-4 p-4 z-50 bg-opacity-30' // Sticky glassmorphic navbar
    )}>
      {APP_ROUTE.map((item, id) => (
        <UnstyledLink
          key={id}
          href={item.href}
          className={twclsx(
            'px-0.5 py-0.25 transition font-semibold relative rounded-full',
            'before:content-[""] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-gradient-to-r before:from-red-500 before:via-yellow-500 before:to-blue-500 before:scale-x-0 before:origin-bottom-center hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300',
            pathname === item.href
              ? 'text-fuchsia-500 dark:text-primary-2 hover:scale-125 dark:hover:scale-125 bg-white-200 dark:bg-white-100'
              : 'text-main-4 dark:text-main-1 hover:text-slate-600 bg-white-200 dark:bg-white-100 dark:hover:text-primary-1 hover:scale-125 dark:hover:scale-125'
          )}
        >
          {item.children}
        </UnstyledLink>
      ))}
    </nav>
  );
}

export default Nav;









































/* import UnstyledLink from '@/components/atoms/UnstyledLink'

import { APP_ROUTE } from '@/constant/route'
import { twclsx } from '@/libs/twclsx'

import { useRouter } from 'next/router'

const Nav = () => {
  const { pathname } = useRouter()

  return (
    <nav className={twclsx('md:flex items-center space-x-4')}>
      {APP_ROUTE.map((item, id) => (
        <UnstyledLink
          key={id}
          href={item.href}
          className={twclsx(
            'px-1.5 py-0.5 transition font-semibold relative',
            'border-2 border-transparent hover:border-rainbow hover:animate-rainbow-border',
            pathname === item.href
              ? 'text-main-1 dark:text-primary-2'
              : 'text-main-4 dark:text-main-1 hover:text-slate-600 dark:hover:text-primary-1'
          )}
        >
          {item.children}
        </UnstyledLink>
      ))}
    </nav>
  );
}

export default Nav

*/

