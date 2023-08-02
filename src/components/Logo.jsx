import clsx from "clsx"
import Image from "next/image"

export function Logomark({ className }) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <Image alt="Logo" src="/images/favicon.png" width={35} height={35} />
    </div>
  )
}

export function Logo({ className }) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <Image alt="Logo" src="/images/favicon.png" width={35} height={35} />
      <Image alt="Logo" src="/images/rayn-logo-02.svg" width={100} height={50} />
    </div>
  )
}
