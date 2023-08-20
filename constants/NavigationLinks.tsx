//Footer Section Icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const mediaIconSize = 30;

export const NavLinks = [
    { id:1, href:"/", key:"Home", text:"Home"},
    { id:2, href:"#services", key:"Services", text:"Services"},
    { id:3, href:"#about", key:"About", text:"About"},
    { id:4, href:"#experience", key:"Experience", text:"Experience"},
    { id:5, href:"#projects", key:"Projects", text:"Projects"},
]

export const SocialMediaLinks = [
    { id:1, title:"LinkedIn", icon:<BsLinkedin size={mediaIconSize} className='hover:text-linkedin' />, url:"https://www.linkedin.com/in/andrei-sager-34a452265/"},
    { id:2, title:"Github", icon:<BsGithub size={mediaIconSize} className='hover:text-github' />, url:"https://github.com/LordBrim"},
]