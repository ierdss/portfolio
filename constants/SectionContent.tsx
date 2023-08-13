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

const aboutIconSize = 40;
const contactIconSize = 40;
const skillIconSize = 50;

export const AboutSectionContent = [
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

export const TechnologiesSectionContent = [
    { id:1, title:"HTML5", group:"markup", icon:<FaHtml5 size={skillIconSize} color={`#f06529`} /> },
    { id:2, title:"CSS3", group:"styling", icon:<FaCss3Alt size={skillIconSize} color={`#2965f1`} /> },
    { id:3, title:"Tailwind", group:"styling", icon:<SiTailwindcss size={skillIconSize} color={`#67e8f9`} /> },
    { id:4, title:"Sass", group:"styling", icon:<FaSass size={skillIconSize} color={`#cc6699`} /> },
    { id:5, title:"Javascript", group:"programming", icon:<IoLogoJavascript size={skillIconSize} color={`#ecd120`} /> },
    { id:6, title:"Typescript", group:"programming", icon:<BiLogoTypescript size={skillIconSize} color={`#007acc`} /> },
    { id:7, title:"React.js", group:"library", icon:<FaReact size={skillIconSize} color={`#61dbfb`} /> },
    { id:8, title:"Next.js", group:"framework", icon:<SiNextdotjs size={skillIconSize} color={`#171515`} /> },
]

export const ProjectSectionContent = [
    {
        id: 1,
        thumbnailDesktop:"/road-way-delivery__compressed-desktop-short.jpg",
        desktopAlt:"RWD full page on desktop",
        thumbnailMobile:"/road-way-delivery__compressed-mobile-short.jpg",
        mobileAlt:"RWD full page on mobile",
        title:"Marked A.I.",
        subtitle:"Artificial Intelligence",
        description: 
        <p className='projectDescription'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae magni maxime expedita, ea facilis modi incidunt quisquam corrupti velit! Similique eaque voluptas repudiandae iste aperiam consequatur accusantium porro nihil.
        </p>,
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
        id: 2,
        thumbnailDesktop:"/road-way-delivery__compressed-desktop-short.jpg",
        desktopAlt:"RWD full page on desktop",
        thumbnailMobile:"/road-way-delivery__compressed-mobile-short.jpg",
        mobileAlt:"RWD full page on mobile",
        title:"Available",        
        subtitle:"e-commerce shop",
        description: 
        <p className='projectDescription'>
            An online shop that sells a lot of products. It also has a dashboard for the seller and the user. Sellers can effortlessly manage their inventory, track orders, and engage with customers, while users can easily track their purchases, manage their profiles, and explore personalized recommendations.
        </p>,
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
        thumbnailDesktop:"/road-way-delivery__compressed-desktop-short.jpg",
        desktopAlt:"RWD full page on desktop",
        thumbnailMobile:"/road-way-delivery__compressed-mobile-short.jpg",
        mobileAlt:"RWD full page on mobile",
        title:"Letter",
        subtitle:"instant messaging",
        description: 
        <p className='projectDescription'>
            Letter is an all-in-one communication app designed to seamlessly connect you with friends and loved ones. With Letter, you can effortlessly send messages to users and join engaging voice chats fostering meaningful conversations. Elevate your interactions with face-to-face connections through high-quality video calls, making every conversation feel personal and authentic. Stay connected like never before with Letter – where messaging, voice chats, and video calls come together in one intuitive platform.
        </p>,
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
        thumbnailDesktop:"/road-way-delivery__compressed-desktop-short.jpg",
        desktopAlt:"RWD full page on desktop",
        thumbnailMobile:"/road-way-delivery__compressed-mobile-short.jpg",
        mobileAlt:"RWD full page on mobile",
        title:"Road Way Delivery",
        subtitle:"Transport Service",
        description:
        <p className='projectDescription'><span className='font-bold'>
            Road Way Delivery</span> Service is a leading logistics company revolutionizing the industry with fast, reliable road transportation solutions. We specialize in secure, on-time deliveries for customers and businesses across local and regional destinations.
        </p>,
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
        id: 5,
        thumbnailDesktop:"/road-way-delivery__compressed-desktop-short.jpg",
        desktopAlt:"RWD full page on desktop",
        thumbnailMobile:"/road-way-delivery__compressed-mobile-short.jpg",
        mobileAlt:"RWD full page on mobile",
        title:"Shoutcaster",
        subtitle:"Video Sharing",
        description: 
        <p className='projectDescription'>
           Welcome to Shoutcaster, our dedicated podcast platform, the ultimate destination for immersive audio experiences. Discover a world of knowledge, stories, and insights as you explore a diverse array of podcasts on our platform. Whether you're into captivating storytelling, thought-provoking discussions, or expert interviews, our platform offers a curated selection to cater to every interest. Immerse yourself in a universe of sound, where ideas and narratives come to life, all in one convenient podcast-exclusive platform.
        </p>,
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

export const ContactSectionContent = [
    { key:1, icon: <HiMailOpen size={contactIconSize}/>, title:"Email Address", text:"andreiwork25@gmail.com"},
    { key:2, icon: <GiRotaryPhone size={contactIconSize}/>, title:"Phone Number", text:"*639763272778"},
    { key:3, icon: <MdAccessTimeFilled size={contactIconSize}/>, title:"Working Hours", text:"(GMT+8) 09:00 - 17:00"},
]