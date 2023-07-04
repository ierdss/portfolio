"use client"

import { NavLinks as links } from '@/constants'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
    const sizeIcon = 30;
    const [nav, setNav] = useState<true | false>(false);
    const handleNav = () => {
        setNav(!nav);
    }

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
            <div onClick={handleNav} className='lg:hidden flex flex-row gap-10'>
                {nav ? (<GiHamburgerMenu size={sizeIcon}/>) : (<RxCross1 size={sizeIcon}/>)}
            </div>
        </nav>
    )
}

export default Navbar;