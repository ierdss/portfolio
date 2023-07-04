"use client"

import { NavLinks as links } from '@/constants'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState<true | false>(false);

    return(
        <nav className='flexCenter navbar w-full'>
            <div className='flex-1 flexStart gap-10'>
                <h1>Andrei Sager</h1>
            </div>
            <div className='sm:flex hidden flex-row gap-10'>
                <ul className="flex text-small gap-7 items-center">
                    {links.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
                <button className=''>
                    Hire Me!
                </button>
            </div>
        </nav>
    )
}

export default Navbar;