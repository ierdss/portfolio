"use client"

import { NavLinks as links } from '@/constants'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState<true | false>(false);

    return(
        <nav className='flexCenter navbar w-full'>
            <div className='flex-1 flexBetween gap-10 justify-center items-center'>
                <Link href={""}>
                    <Image
                        src="/logodark.png"
                        height={50}
                        width={150}
                        alt="Doggo Match"
                    />
                </Link>
                <div className='lg:flex hidden gap-10'>
                    <ul className='flex flex-row gap-2'>
                        {links.map((link) => (
                            <Link 
                                href={link.href} 
                                key={link.key}
                                className='p-4 font-bold text-lg text-slate-400 hover:text-secondary-red'
                                >
                                {link.text}
                            </Link>
                        ))}
                    </ul>
                    <button
                        type='button' 
                        className='flex-1 py-4 px-8 rounded-lg bg-secondary-red text-white font-bold text-lg hover:bg-red-600'>
                        Hire Me!
                    </button>
                </div>
            </div>
            <div className='sm:flex hidden flex-row gap-10'>
             
            </div>
        </nav>
    )
}

export default Navbar;