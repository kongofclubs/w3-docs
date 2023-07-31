import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import NavigationItem from './NavigationItem'

  export function Navigation({ navigation, className }) {
    let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium uppercase text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => <NavigationItem key={link.href} section={link} /> )}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
