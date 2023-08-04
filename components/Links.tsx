import Link from 'next/link';
import { SocialMediaLinks } from '@/constants'

type classNameProps = {
    className?: string;
}

export default function Links({ className }:classNameProps) {
    return(
        <div className={className}>
            <ul className='flex flex-row justify-center items-center gap-4'>
                {SocialMediaLinks.map(({ id, icon, url}) => (
                    <li key={id}>
                        <Link href={url} target='_blank' className='text-secondary-red'>{icon}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}