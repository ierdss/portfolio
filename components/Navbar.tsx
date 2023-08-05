"use client"

import { useEffect } from 'react'
import { NavLinks } from '@/constants'
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

export default function Navbar() {
    const sizeIcon = 30;
    const [nav, setNav] = useState<true | false>(false);
    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const onScroll = () => {
            const navbar = document.getElementById("navbar")!;
            const distance = 50;
            if (document.documentElement.scrollTop > distance) {
                navbar.classList.add("navbar__black");
            } else {
                navbar.classList.remove("navbar__black");
            }
        }
        window.addEventListener("scroll", onScroll);
    }, []);

    return(
        <nav id='navbar' className='flexCenter py-4 px-6 md:px-12 w-full fixed top-0 !z-50 max-w-screen-xl bg-transparent text-slate-200 shadow-lg'>
            <div className='flex-1 flexBetween gap-10 md:gap-16 justify-center items-center'>
                <Link href={"/"}>
                    <h1 className='text-5xl font-black bg-clip-text wk-bg-clip text-transparent bg-cover bg-center bg-home-texture hover:text-secondary-red'>ANDREI</h1>
                </Link>
                <div className='lg:flex hidden gap-10'>
                    <ul id='navbar-links' className='flex flex-row gap-2'>
                        {NavLinks.map(({ id, href, text}) => (
                            <li key={id}>
                            <Link
                                href={href} 
                                className='p-4 font-bold text-lg hover:text-secondary-red target:text-secondary-red'
                                >
                                {text}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div onClick={handleNav} className='lg:hidden flex flex-row gap-10'>
                {!nav ? (<GiHamburgerMenu size={sizeIcon}/>) : (<RxCross1 size={sizeIcon}/>)}
            </div>
            <div className={!nav ? 'hidden' : 'block absolute top-20 w-full bg-white'} >
                <ul id='navbar-links' className='flex flex-col w-full pb-8 text-slate-400'>
                    {NavLinks.map((link) => (
                        <li key={link.key}
                            className='w-full'>
                            <Link
                                onClick={handleNav}
                                href={link.href} 
                                className='block w-full p-6 font-bold text-lg  hover:text-secondary-red'
                                >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}