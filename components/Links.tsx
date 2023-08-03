import Link from 'next/link';
import { SocialMediaLinks } from '@/constants'

export default function Links() {
    return(
        <ul className='flex flex-row justify-center items-center gap-4'>
        {SocialMediaLinks.map(({ id, icon, url}) => (
            <li key={id}>
                <Link href={url} target='_blank' className='text-secondary-red'>{icon}</Link>
            </li>
        ))}
    </ul>
    )
}