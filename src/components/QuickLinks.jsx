import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

export function QuickLinks({ children, width = 210 }) {
  return (
    <div className={`not-prose my-12 grid gap-6 grid-cols-[repeat(auto-fit,_minmax(${width}px,_1fr))]`}>
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href, icon, children, newTab }) {
  let linkEl = <>
    <span className="absolute -inset-px rounded-xl" />
    {title}
  </>

  if (href) {
    linkEl = <Link href={href} target={newTab ? '_blank': '_self'}>
      {linkEl}
    </Link>
  }

  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className={clsx(href && "group-hover:opacity-100", "absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] dark:[--quick-links-hover-bg:theme(colors.slate.800)]")} />
      <div className="relative overflow-hidden rounded-xl p-6">
        {icon && <Icon icon={icon} className="h-8 w-8" />}
        <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
          {linkEl}
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description ? description : children}
        </p>
      </div>
    </div>
  )
}

export function LinkCard({ title, description, href, image, newTab }) {
  let linkEl = <>
    <span className="absolute -inset-px rounded-xl" />
    {title}
  </>

  if (href) {
    linkEl = <Link href={href} target={newTab ? '_blank': '_self'}>
      {linkEl}
    </Link>
  }

  return (
    <div className="group relative rounded-md border border-slate-200 dark:border-slate-800">
      <div className={clsx(href && "group-hover:opacity-100", "absolute -inset-px rounded-md border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] dark:[--quick-links-hover-bg:theme(colors.slate.800)]")} />
      <div className="relative overflow-hidden rounded-md">
        <div className='relative w-full h-[200px] bg-slate-700'>
          {image && <Image src={image} alt="image" fill={true} style={{ objectFit: 'cover' }} />}
        </div>
        <p className="mt-1 px-3 py-2 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
        <h2 className="mt-4 px-3 py-2 font-display text-base text-slate-900 dark:text-white">
          {linkEl}
        </h2>
      </div>
    </div>
  )
}
