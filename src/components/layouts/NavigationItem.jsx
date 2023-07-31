import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

export default function NavigationItem({ section }) {
  let router = useRouter()

  const linkItem = (
    <li key={section.href} className="relative">
      <Link
        href={section.href}
        className={clsx(
          'flex items-center w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
          section.href === router.pathname
            ? 'font-semibold text-sky-500 before:bg-sky-500'
            : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
        )}
      >
        {section.icon && <section.icon className='h-5 w-5 text-sky-500' />} &nbsp; {section.title}
      </Link>
    </li>
  )

  if (!section.links) {
    return linkItem
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative flex w-full justify-between rounded-lg bg-transparent text-left text-sm font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            { linkItem }
            <ChevronUpIcon
              className={`${
                !open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-sky-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pl-4 pb-2 text-sm text-gray-500">
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => link.links
                ? <NavigationItem section={link} />
                : (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        link.href === router.pathname
                          ? 'font-semibold text-sky-500 before:bg-sky-500'
                          : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
