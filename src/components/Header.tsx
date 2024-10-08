import { createClient } from '@/prismicio';
import React from 'react'
import Bounded from './Bounded';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Logo from './Logo';

export default async function Header() {
    const client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <Bounded as="header" className="py-4 md:py-6 lg:py-8">
            <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
                <Link href="/">
                    <Logo />
                </Link>

                <nav>
                    <ul className="flex">
                        {settings.data.navigation.map(({ link, label }) => (
                            <li key={label}>
                                <PrismicNextLink field={link} className="p-3">
                                    {label}
                                </PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </Bounded>
    )
}
