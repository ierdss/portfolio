//Skills Section Icons
import { FaHtml5, FaReact, FaCss3Alt, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'
import { IoLogoJavascript } from 'react-icons/io'

//Contact Section Icons
import { HiMailOpen } from 'react-icons/hi'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdAccessTimeFilled } from 'react-icons/md'

//Footer Section Icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const contactIconSize = 40;
const skillIconSize = 50;
const footerIconSize = 30;

export const NavLinks = [
    { id:1, href:"/", key:"Home", text:"Home"},
    { id:2, href:"#about", key:"About", text:"About"},
    { id:3, href:"#projects", key:"Projects", text:"Projects"},
    { id:4, href:"#contact", key:"Contact", text:"Contact"},
]

export const SocialMediaLinks = [
    { id:1, title:"LinkedIn", icon:<BsLinkedin size={footerIconSize} className='hover:text-linkedin' />, url:"https://www.linkedin.com/in/andrei-sager-34a452265/"},
    { id:2, title:"Github", icon:<BsGithub size={footerIconSize} className='hover:text-github' />, url:"https://github.com/LordBrim"},
]

export const HeroContent = {
    portrait:"/MeRed.png",
    alt:"A portrait of myself wearing a comfortable red t-shirt.",
    title:"Front-End Developer",
    subtitle:"Embracing the fusion of artistry and code, I shape digital experiences as a front-end developer. With a passion for design and a drive for innovation, I craft seamless interfaces and striking visuals, elevating the aesthetic essence of the web.",
}

export const AboutContent = {
    title:"Get To Know Me!",
    subtitle: [
        "I'm a natural problem solver, eversince I was a kid I enjoyed building contraptions with lego, solving puzzles, and tinkering my curiosity away. This not only honed my interest in building things but it also polished my persistence and what led me to pursue this career in the present.",
        "People call me spontaneous but I am simply curious of what will happen if I did this or that. What I like about this field is the ability to save and retract progress when needed, github for example. Needless to say I always contain myself or channel this curious and persistent energy in a proper way that would benifit myself and the company.",
        "However, I as practice as a developer I found myself becoming more and more meticulous in my craft. I would prioritize writing clean code and place comments where it's necessary."
    ]
}

export const SkillList = [
    { 
        title:"Markup",
        skills: [
            { id:1, title:"HTML5", icon:<FaHtml5 size={skillIconSize} className='text-html' /> },
        ]
    },
    { 
        title:"Styling",
        skills: [
            { id:1, title:"CSS3", icon:<FaCss3Alt size={skillIconSize} className='text-css' /> },
            { id:2, title:"Tailwind", icon:<SiTailwindcss size={skillIconSize} className='text-tailwind' /> },
            { id:3, title:"Sass", icon:<FaSass size={skillIconSize} className='text-sass' /> },
        ]
    },
    { 
        title:"Programming Language",
        skills: [
            { id:1, title:"Javascript", icon:<IoLogoJavascript size={skillIconSize} className='text-javascript' /> },
            { id:2, title:"Typescript", icon:<BiLogoTypescript size={skillIconSize} className='text-typescript' /> },
        ]
    },
    { 
        title:"Libraries and Frameworks",
        skills: [
            { id:1, title:"React.js", icon:<FaReact size={skillIconSize} className='text-react' /> },
            { id:2, title:"Next.js", icon:<SiNextdotjs size={skillIconSize} className='text-next' /> },
        ]
    },
]

export const ProjectsList = [
    {
        id: 1,
        title:"Road Way Delivery",
        description:"Road Way Delivery Service is a leading logistics company revolutionizing the industry with fast, reliable road transportation solutions. We specialize in secure, on-time deliveries for customers and businesses across local and regional destinations.",
        tags: [
            "Next.js",
            "Typescript",
            "Tailwind",
            "CSS",
        ],
        githubUrl:"https://github.com/LordBrim/andrei-portfolio",
        livedemoUrl:"https://roadwaydelivery.vercel.app",
    },
    {
        id: 2,
        title:"Sample Project",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae magni maxime expedita, ea facilis modi incidunt quisquam corrupti velit! Similique eaque voluptas repudiandae iste aperiam consequatur accusantium porro nihil.",
        tags: [
            "Typescript",
            "React",
            "Tailwind",
            "Plain CSS",
        ],
        githubUrl:"/",
        livedemoUrl:"/",
    },
    {
        id: 3,
        title:"Sample Project",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae magni maxime expedita, ea facilis modi incidunt quisquam corrupti velit! Similique eaque voluptas repudiandae iste aperiam consequatur accusantium porro nihil.",
        tags: [
            "Typescript",
            "React",
            "Tailwind",
            "Plain CSS",
        ],
        githubUrl:"/",
        livedemoUrl:"/",
    },
    {
        id: 4,
        title:"Sample Project",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae magni maxime expedita, ea facilis modi incidunt quisquam corrupti velit! Similique eaque voluptas repudiandae iste aperiam consequatur accusantium porro nihil.",
        tags: [
            "Typescript",
            "React",
            "Tailwind",
            "Plain CSS",
        ],
        githubUrl:"/",
        livedemoUrl:"/",
    },
]

export const ContactInfo = [
    { key:1, icon: <HiMailOpen size={contactIconSize}/>, title:"Email", text:"andreiwork25@gmail.com"},
    { key:2, icon: <GiRotaryPhone size={contactIconSize}/>, title:"Number", text:"*639763272778"},
    { key:3, icon: <MdAccessTimeFilled size={contactIconSize}/>, title:"Time", text:"(GMT+8) 09:00 - 17:00"},
]