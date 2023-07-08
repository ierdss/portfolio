import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SocialLinks as links } from '@/constants'

const Footer = () => {
    const sizeIcon = 30;

    return(
        <footer className="flex flex-col w-full py-8 px-16 border-t border-nav-border">
            <div className="flexBetween footer_copyright gap-8">
                <p>@ 2023 Andrei Sager. All rights reserved</p>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <Link 
                        href={links[0].url}
                        target='_blank'
                        className='text-secondary-red hover:text-linkedin'
                    >
                        <BsLinkedin size={sizeIcon}/>
                    </Link>
                    <Link 
                        href={links[1].url}
                        target='_blank'
                        className='text-secondary-red hover:text-github'
                    >
                        <BsGithub size={sizeIcon}/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;