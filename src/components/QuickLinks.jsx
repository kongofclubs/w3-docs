import Link from 'next/link'
import Image from 'next/image'

import { Icon } from '@/components/Icon'

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 grid gap-6 grid-cols-[repeat(auto-fit,_minmax(210px,_1fr))]">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href, icon }) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        {icon && <Icon icon={icon} className="h-8 w-8" />}
        <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
          <Link href={href} target='_blank'>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export function LinkCard({ title, description, href, image }) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl">
        <div className='relative w-full h-[200px]'>
          {image && <Image src={image} alt="image" fill={true} style={{ objectFit: 'cover' }} />}
        </div>
        <p className="mt-1 px-3 py-2 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
        <h2 className="mt-4 px-3 py-2 font-display text-base text-slate-900 dark:text-white">
          <Link href={href} target='_blank'>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
      </div>
    </div>
  )
}
