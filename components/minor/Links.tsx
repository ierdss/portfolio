import Link from 'next/link';
import { SocialMediaLinks } from '@/constants/NavigationLinks'

type classNameProps = {
    className?: string;
}

export default function Links({ className }:classNameProps) {
    return(
        <ul className={className || 'flex flex-row justify-center items-center gap-4'}>
            {SocialMediaLinks.map(({ id, icon, url}) => (
                <li key={id}>
                    <Link href={url} target='_blank' className='text-secondary-red hover:text-accent-pink'>{icon}</Link>
                </li>
            ))}
        </ul>
    )
}