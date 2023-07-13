"use client";
import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Tables', href: '#', current: false },
    { name: 'Documentation', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <>
            <div className="min-h-full">
                <div>
                    <Disclosure as="nav" className="bg-gray-800">
                        {({ open }) => (
                            <>
                                <div className="mx-auto sm:px-6 lg:px-">
                                    <div className="border-b border-gray-700">
                                        <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-8 w-8"
                                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                        alt="Your Company"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-gray-900 text-white'
                                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                                )}
                                                                aria-current={item.current ? 'page' : undefined}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </Disclosure>
                    <header className="py-4">
                        <div className="mx-auto px-6 lg:px-24 sm:px-6.text-center ">
                            <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}
