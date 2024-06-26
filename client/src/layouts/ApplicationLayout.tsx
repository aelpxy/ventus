import { ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { classNames } from '../utils/common';

type NavigationItem = {
    name: string;
    href: string;
    current: boolean;
};

interface IProps {
    title: string;
    children: ReactNode;
    navigation: NavigationItem[];
}

export default function ApplicationLayout(props: IProps) {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-zinc-900">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 select-none text-zinc-100">
                                            <code>~/ventus</code>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {props.navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            'rounded-md px-3 py-2 text-sm font-medium transition duration-300 ease-in-out',
                                                            item.current
                                                                ? 'border border-zinc-800 bg-zinc-950/60 text-white'
                                                                : 'text-gray-300 hover:bg-zinc-800 hover:text-white',
                                                        )}
                                                        aria-current={
                                                            item.current ? 'page' : undefined
                                                        }
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {props.navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                'block rounded-md border border-zinc-300 px-3 py-2 text-base font-medium transition duration-300 ease-in-out',
                                                item.current
                                                    ? 'border-transparent bg-zinc-900 text-white'
                                                    : 'text-zinc-300 hover:border-zinc-700 hover:bg-zinc-700 hover:text-white',
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
                            {props.title}
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{props.children}</div>
                </main>
            </div>
        </>
    );
}
