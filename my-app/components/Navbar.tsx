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
        <nav className='flexCenter py-4 px-6 md:px-12 w-full fixed top-0 bg-white'>
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
                            <li key={link.key}>
                            <Link
                                href={link.href} 
                                className='p-4 font-bold text-lg text-slate-400 hover:text-secondary-red'
                                >
                                {link.text}
                            </Link>
                            </li>
                        
                        ))}
                    </ul>
                </div>
            </div>
            <div onClick={handleNav} className='lg:hidden flex flex-row gap-10'>
                {nav ? (<GiHamburgerMenu size={sizeIcon}/>) : (<RxCross1 size={sizeIcon}/>)}
            </div>
        </nav>
    )
}

export default Navbar;