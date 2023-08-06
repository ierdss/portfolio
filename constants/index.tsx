import { SectionContent } from './SectionContent'

export {
    SectionContent
};

//About Section Services Icons
import { BsGlobeAsiaAustralia } from 'react-icons/bs'

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

const aboutIconSize = 40;
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

export const ServicesContent = [
    {
        id: 1,
        icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
        title:"Web Development",
        paragraph:"",
    },
    {
        id: 2,
        icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
        title:"React Developer",
        paragraph:"",
    },    
    {
        id: 3,
        icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
        title:"",
        paragraph:"",
    },    
    {
        id: 4,
        icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
        title:"",
        paragraph:"",
    },    
    {
        id: 5,
        icon: <BsGlobeAsiaAustralia size={aboutIconSize} />,
        title:"",
        paragraph:"",
    },
]

export const SkillList = [
    { 
        title:"Markup",
        skills: [
            { id:1, title:"HTML5", icon:<FaHtml5 size={skillIconSize} color={`#f06529`} /> },
        ]
    },
    { 
        title:"Styling",
        skills: [
            { id:1, title:"CSS3", icon:<FaCss3Alt size={skillIconSize} color={`#2965f1`} /> },
            { id:2, title:"Tailwind", icon:<SiTailwindcss size={skillIconSize} color={`#cc6699`} /> },
            { id:3, title:"Sass", icon:<FaSass size={skillIconSize} color={`#67e8f9`} /> },
        ]
    },
    { 
        title:"Programming Language",
        skills: [
            { id:1, title:"Javascript", icon:<IoLogoJavascript size={skillIconSize} color={`#ecd120`} /> },
            { id:2, title:"Typescript", icon:<BiLogoTypescript size={skillIconSize} color={`#007acc`} /> },
        ]
    },
    { 
        title:"Libraries and Frameworks",
        skills: [
            { id:1, title:"React.js", icon:<FaReact size={skillIconSize} color={`#61dbfb`} /> },
            { id:2, title:"Next.js", icon:<SiNextdotjs size={skillIconSize} color={`#171515`} /> },
        ]
    },
]

export const ProjectsList = [
    {
        id: 1,
        title:"Road Way Delivery",
        description:"Road Way Delivery Service is a leading logistics company revolutionizing the industry with fast, reliable road transportation solutions. We specialize in secure, on-time deliveries for customers and businesses across local and regional destinations.",
        tags: [
            { id:1, tag: "Next.js" },
            { id:2, tag: "Typescript" },
            { id:3, tag: "Tailwind" },
            { id:4, tag: "CSS" },
        ],
        githubUrl:"https://github.com/LordBrim/andrei-portfolio",
        livedemoUrl:"https://roadwaydelivery.vercel.app",
    },
    {
        id: 2,
        title:"Sample Project",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae magni maxime expedita, ea facilis modi incidunt quisquam corrupti velit! Similique eaque voluptas repudiandae iste aperiam consequatur accusantium porro nihil.",
        tags: [
            { id:1, tag: "Next.js" },
            { id:2, tag: "Typescript" },
            { id:3, tag: "Tailwind" },
            { id:4, tag: "CSS" },
        ],
        githubUrl:"/",
        livedemoUrl:"/",
    },
    {
        id: 3,
        title:"Sample Project",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae magni maxime expedita, ea facilis modi incidunt quisquam corrupti velit! Similique eaque voluptas repudiandae iste aperiam consequatur accusantium porro nihil.",
        tags: [
            { id:1, tag: "Next.js" },
            { id:2, tag: "Typescript" },
            { id:3, tag: "Tailwind" },
            { id:4, tag: "CSS" },
        ],
        githubUrl:"/",
        livedemoUrl:"/",
    },
    {
        id: 4,
        title:"Sample Project",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae magni maxime expedita, ea facilis modi incidunt quisquam corrupti velit! Similique eaque voluptas repudiandae iste aperiam consequatur accusantium porro nihil.",
        tags: [
            { id:1, tag: "Next.js" },
            { id:2, tag: "Typescript" },
            { id:3, tag: "Tailwind" },
            { id:4, tag: "CSS" },
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