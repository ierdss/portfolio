//Footer Section Icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const mediaIconSize = 30;

export const NavLinks = [
    { id:1, href:"/", key:"Home", text:"Home"},
    { id:2, href:"#about", key:"About", text:"About"},
    { id:3, href:"#projects", key:"Projects", text:"Projects"},
    { id:4, href:"#contact", key:"Contact", text:"Contact"},
]

export const SocialMediaLinks = [
    { id:1, title:"LinkedIn", icon:<BsLinkedin size={mediaIconSize} className='hover:text-linkedin' />, url:"https://www.linkedin.com/in/andrei-sager-34a452265/"},
    { id:2, title:"Github", icon:<BsGithub size={mediaIconSize} className='hover:text-github' />, url:"https://github.com/LordBrim"},
]