import { Disclosure } from '@headlessui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar: NextPage = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <span>
        S&apos;inscrire
        <a href="https://www.example.com"> terms and conditions</a>
      </span>
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
      <Link href="/">
        <a data-testid="logo">
          <Image
            className="block lg:hidden h-8 w-auto"
            src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="Logo-mentor"
            height={400}
            width={700}
          />
        </a>
      </Link>
      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span aria-label="Open menu" className="sr-only">
          Open main menu
        </span>
      </Disclosure.Button>
    </Disclosure>
  )
}

export default Navbar
