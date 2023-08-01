import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function CustomDisclosure({ title, description }) {
  return (
    <div className="w-full rounded-md border p-2 my-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-start items-center gap-2 rounded-lg bg-transparent pr-4 pl-2 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : 'rotate-90'
                } h-5 w-5`}
              />
              <span className='font-bold'>{title}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="pl-9 pr-4 pt-1 pb-2 text-sm text-gray-500">
              {description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
